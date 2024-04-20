import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import config from "../../../config";

const MySaleScreen = ({ navigation }) => {
  const [mySaleData, setMySaleData] = useState([]);
  const [saleOrginal, setSaleOrginal] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedMySaleData = await AsyncStorage.getItem("bootsData");
        if (storedMySaleData) {
          const allMySaleData = JSON.parse(storedMySaleData);
          setSaleOrginal(allMySaleData);
          const storedUserData = await AsyncStorage.getItem("userData");
          const parsedUserData = JSON.parse(storedUserData);

          if (parsedUserData && parsedUserData.id) {
            const userId = parsedUserData.id;
            console.log("User ID:", userId);

            const filteredMySaleData = allMySaleData.filter(
              (item) => item.userid === userId
            );
            setMySaleData(filteredMySaleData);

            filteredMySaleData.forEach((item) => {
              if (item.check === 3) {
                alertMessage =
                  "Twój wystawiony przedmiot został wysłany do poprawy przez administratora. Popraw jak najszybciej ten przedmiot";
                Alert.alert("Znaleziono przedmioty", alertMessage);
              }
            });
          }
        }
      } catch (error) {
        console.error("Error reading MySale data from AsyncStorage:", error);
      }
    };

    fetchData();
  }, []);

  const saveMySaleDataToStorage = async (mySaleData) => {
    try {
      await AsyncStorage.setItem("bootsData", JSON.stringify(mySaleData));
    } catch (error) {
      console.error("Error saving MySale data to AsyncStorage:", error);
    }
  };

  const handleSaveMySale = async (newMySale) => {
    try {
      const storedUserData = await AsyncStorage.getItem("userData");
      const parsedUserData = JSON.parse(storedUserData);
      if (parsedUserData && parsedUserData.id) {
        const userId = parsedUserData.id;
        await config.post(`/boots`, { ...newMySale, userid: userId });

        const responseData = await config.get("/boots");
        const getResponseCardData = responseData.data;

        const filteredMySaleData = getResponseCardData.filter(
          (item) => item.userid === userId
        );

        setMySaleData(filteredMySaleData);
        saveMySaleDataToStorage(getResponseCardData);
      } else {
        console.error("Error reading user data from AsyncStorage");
      }
    } catch (error) {
      console.error("Error updating data in the database:", error);
    }
  };

  const handleEditMySale = async (editedMySale, originalMySale) => {
    const index = saleOrginal.findIndex(
      (mySale) => mySale.id === originalMySale.id
    );

    if (index !== -1) {
      const updatedMySaleData = [...saleOrginal];
      updatedMySaleData[index] = editedMySale;

      try {
        const storedUserData = await AsyncStorage.getItem("userData");
        const parsedUserData = JSON.parse(storedUserData);
        if (parsedUserData && parsedUserData.id) {
          const userId = parsedUserData.id;
          await config.put(`/boots/${originalMySale.id}`, {
            ...editedMySale,
            userid: userId,
          });

          const filteredMySaleData = updatedMySaleData.filter(
            (item) => item.userid === userId
          );
          setMySaleData(filteredMySaleData);

          saveMySaleDataToStorage(updatedMySaleData);
        } else {
          console.error("Error reading user data from AsyncStorage");
        }
      } catch (error) {
        console.error("Error updating data in the database:", error);
      }
    }
  };

  const handleDeleteMySale = async (mySaleToDelete) => {
    const index = saleOrginal.findIndex(
      (mySale) => mySale.id === mySaleToDelete.id
    );

    if (index !== -1) {
      const updatedMySaleData = [...saleOrginal];
      updatedMySaleData.splice(index, 1);

      try {
        const storedUserData = await AsyncStorage.getItem("userData");
        const parsedUserData = JSON.parse(storedUserData);

        const userId = parsedUserData.id;
        await config.delete(`/boots/${mySaleToDelete.id}`);

        const filteredMySaleData = updatedMySaleData.filter(
          (item) => item.userid === userId
        );
        setMySaleData(filteredMySaleData);
        saveMySaleDataToStorage(updatedMySaleData);
      } catch (error) {
        console.error("Error deleting data from the database:", error);
      }
    }
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.productView}
        onPress={() =>
          navigation.navigate("ProductSale", { selectedItem: item })
        }
      >
        {item.check === 3 ? (
          <View>
            <Image source={item.img} style={styles.productIconpop} />
            <Text style={styles.textRotated}>Do poprawy</Text>
          </View>
        ) : (
          <Image source={item.img} style={styles.productIcon} />
        )}

        <View style={styles.singleProductView}>
          <View style={styles.itemTop}>
            <Text style={styles.productName}> {item.title}</Text>
            <View style={styles.iconL}>
              <AntDesign
                name="edit"
                style={styles.basicIcon}
                onPress={() =>
                  navigation.navigate("EditMySale", {
                    mySale: item,
                    onSave: (editedMySale) =>
                      handleEditMySale(editedMySale, item),
                  })
                }
              />

              <AntDesign
                name="delete"
                style={styles.basicIcon}
                onPress={() =>
                  navigation.navigate("DeleteMySale", {
                    mySale: item,
                    onDelete: handleDeleteMySale,
                  })
                }
              />
            </View>
          </View>
          <Text style={styles.productPrice}>{item.price}$</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <AntDesign
          name="left"
          style={styles.basicIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>MySale</Text>
      </View>

      <View style={styles.content}>
        {mySaleData.length > 0 ? (
          <FlatList
            data={mySaleData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={styles.noItemsText}>Your sale is empty</Text>
        )}
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? "#31263E" : "#31263E",
          },
        ]}
        onPress={() =>
          navigation.navigate("Sell Product", { onSave: handleSaveMySale })
        }
      >
        <Text style={styles.buttonText}>Sell Product</Text>
      </Pressable>
    </View>
  );
};

export default MySaleScreen;
