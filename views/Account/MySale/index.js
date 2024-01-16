import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import config from '../../../config';

const MySaleScreen = ({ navigation }) => {
  const [mySaleData, setMySaleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedMySaleData = await AsyncStorage.getItem('bootsData');
        if (storedMySaleData) {
          const allMySaleData = JSON.parse(storedMySaleData);
          
          const storedUserData = await AsyncStorage.getItem('userData');
          const parsedUserData = JSON.parse(storedUserData);
  
          if (parsedUserData && parsedUserData.id) {
            const userId = parsedUserData.id;
            console.log("User ID:", userId);
  
            // Filtruj produkty, aby wyświetlać tylko te z odpowiednim userid
            const filteredMySaleData = allMySaleData.filter(item => item.userid === userId);
            setMySaleData(filteredMySaleData);
          }
        }
      } catch (error) {
        console.error('Error reading MySale data from AsyncStorage:', error);
      }
    };
  
    fetchData();
  }, []);

  const saveMySaleDataToStorage = async (mySaleData) => {
    try {
      await AsyncStorage.setItem('bootsData', JSON.stringify(mySaleData));
    } catch (error) {
      console.error('Error saving MySale data to AsyncStorage:', error);
    }
  };

  
  const handleSaveMySale = async (newMySale) => {
    
    
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      const parsedUserData = JSON.parse(storedUserData);
      if (parsedUserData && parsedUserData.id) {
        const userId = parsedUserData.id;
        // Aktualizuj dane w bazie danych tylko dla nowo dodanego adresu
        await config.post(`/boots`, { ...newMySale, userid: userId });
        
        setMySaleData([...mySaleData, newMySale]);
    saveMySaleDataToStorage([...mySaleData, newMySale]);
      } else {
        console.error("Error reading user data from AsyncStorage");
      }
    } catch (error) {
      console.error('Error updating data in the database:', error);
    }
  };
  
  const handleEditMySale = async (editedMySale, originalMySale) => {
    const index = mySaleData.findIndex((mySale) => mySale.id === originalMySale.id);
  
    if (index !== -1) {
      const updatedMySaleData = [...mySaleData];
      updatedMySaleData[index] = editedMySale;
  
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        const parsedUserData = JSON.parse(storedUserData);
        if (parsedUserData && parsedUserData.id) {
          const userId = parsedUserData.id;
          // Aktualizuj dane w bazie danych
          await config.put(`/boots/${originalMySale.id}`, { ...editedMySale, userid: userId });
  
          // Aktualizuj stan i zapisz dane sprzedażowe do AsyncStorage
          setMySaleData(updatedMySaleData);
          saveMySaleDataToStorage(updatedMySaleData);
        } else {
          console.error("Error reading user data from AsyncStorage");
        }
      } catch (error) {
        console.error('Error updating data in the database:', error);
      }
    }
};



  const handleDeleteMySale = async (mySaleToDelete) => {
    const index = mySaleData.findIndex((mySale) => mySale.id === mySaleToDelete.id);
  
    if (index !== -1) {
      const updatedMySaleData = [...mySaleData];
      updatedMySaleData.splice(index, 1);
  
      try {
        // Usuń dane z bazy danych
        await config.delete(`/boots/${mySaleToDelete.id}`);
  
        // Aktualizuj stan i zapisz dane sprzedażowe do AsyncStorage
        setMySaleData(updatedMySaleData);
        saveMySaleDataToStorage(updatedMySaleData);
      } catch (error) {
        console.error('Error deleting data from the database:', error);
      }
    }
};

const renderItem = ({ item }) => {
  return (
    <Pressable  style={styles.productView} onPress={() => navigation.navigate('ProductSale', { selectedItem: item})}>
      <Image source={item.img} style={styles.productIcon} />
      <View style={styles.singleProductView}>
        <View style={styles.itemTop}>
          <Text style={styles.productName}>{item.brand} {item.title}</Text>
          <View>
            <AntDesign name="edit" style={styles.basicIcon}  onPress={() =>
              navigation.navigate('EditMySale', {
                mySale: item,
                onSave: (editedMySale) => handleEditMySale(editedMySale, item),
              })}/>
          </View>
          <AntDesign name="delete" style={styles.basicIcon} onPress={() => navigation.navigate('DeleteMySale', { mySale: item, onDelete: handleDeleteMySale })}/>
        </View>
        <Text style={styles.productPrice}>{item.price}$</Text>
        </View>
    </Pressable>
  );
};
  return (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>MySale</Text>
      </View>

      <View style={styles.content}>
        {mySaleData.length > 0 ? (
          <FlatList
          data={mySaleData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          />
          ) : (
            <Text style={styles.noItemsText}>Cart is empty</Text>
            )}
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? 'darkorange' : 'orange',
          },
        ]}
            
        onPress={() => navigation.navigate('Sell Product', { onSave: handleSaveMySale })}
      >
        <Text style={styles.buttonText}>Sell Product</Text>
      </Pressable>
    </View>
  );
};

export default MySaleScreen;
