import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Image, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import config from '../../config';

const AdminPanelScreen = ({ navigation }) => {
  const [mySaleData, setMySaleData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedMySaleData = await AsyncStorage.getItem('bootsData');
        if (storedMySaleData) {
          const allMySaleData = JSON.parse(storedMySaleData);
          setMySaleData(allMySaleData.filter(item => item.check === 1)); // Filtruj dane podczas ustawiania
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
  
  const handleDeleteMySale = async (mySaleToDelete) => {
    try {
      await config.delete(`/boots/${mySaleToDelete.id}`);
      
      const updatedMySaleData = mySaleData.filter(item => item.id !== mySaleToDelete.id); // Usuń usunięty element
      setMySaleData(updatedMySaleData);
      saveMySaleDataToStorage(updatedMySaleData);
    } catch (error) {
      console.error('Error deleting data from the database:', error);
    }
  };

  const Accept = async (item) => {
    try {
        await config.put(`/boots/${item.id}`, { ...item, check: 2 });
        
        const updatedMySaleData = mySaleData.map(data => {
            if (data.id === item.id) {
                return { ...data, check: 2 }; 
            }
            return data;
        });
        
        const filteredMySaleData = updatedMySaleData.filter(item => item.check === 1);
        setMySaleData(filteredMySaleData);
        saveMySaleDataToStorage(filteredMySaleData); 
    } catch (error) {
        console.error('Error updating data:', error);
    }
};

  const handleLogout = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => (
    <Pressable style={styles.productView} onPress={() => navigation.navigate('AdminProduct', { selectedItem: item})}>
      <View style={styles.card}>
        <View style={styles.productView}>
          <Image source={item.img} style={styles.productIcon} />
          <View style={styles.singleProductView}>
            <View style={styles.itemTop}>
              <Text style={styles.productName}>{item.title}</Text>
            </View>
            <Text style={styles.productPrice}>{item.price}$</Text>
          </View>
        </View>
        <View style={styles.buttonBox}>
          <Pressable
            style={({ pressed }) => [
              styles.buttonSmall,
              {
                backgroundColor: pressed ? '#31263E' : '#31263E',
              },
            ]}
            onPress={() => navigation.navigate('AdminDelete', { mySale: item, onDelete: handleDeleteMySale })}
          >
            <Text style={styles.buttonSmallText}>Delete</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.buttonSmall,
              {
                backgroundColor: pressed ? '#31263E' : '#31263E',
              },
            ]}
            onPress={() => Accept(item)}
          >
            <Text style={styles.buttonSmallText}>Accept</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Verification</Text>
        <Pressable onPress={() => handleLogout()}> 
          <Text style={styles.title}>Logout</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        {mySaleData.length > 0 ? (
          <FlatList
            data={mySaleData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={styles.noItemsText}>Your product to verification is empty</Text>
        )}
      </View>
    </View>
  );
};

export default AdminPanelScreen;
