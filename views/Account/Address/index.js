import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

import config from '../../../config';

const AddressScreen = ({ navigation }) => {
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedAddressData = await AsyncStorage.getItem('addressData');
        if (storedAddressData) {
          setAddressData(JSON.parse(storedAddressData));
          const storedUserData = await AsyncStorage.getItem('userData');
          const parsedUserData = JSON.parse(storedUserData);
          if (parsedUserData && parsedUserData.id) {
            const userId = parsedUserData.id;
            console.log("User ID:", userId);
          }
        }
      } catch (error) {
        console.error('Error reading address data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []); 

  const saveAddressDataToStorage = async (addressData) => {
    try {
      await AsyncStorage.setItem('addressData', JSON.stringify(addressData));
    } catch (error) {
      console.error('Error saving address data to AsyncStorage:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.heading}>{item.name}</Text>

      <Text style={styles.cardInformation}>{item.first} {item.last}</Text>
      <Text style={styles.cardInformation}>{item.street} {item.houseNumber}, {item.city},</Text>
      <Text style={styles.cardInformation}>{item.zip} {item.street}</Text>
      <Text style={styles.cardInformation}>{item.region}, {item.country}</Text>
      <Text style={styles.cardInformation}>{item.phone}</Text>
      <View style={styles.buttonBox}>
        <Pressable
          style={({ pressed }) => [
            styles.buttonSmall,
            {
              backgroundColor: pressed ? 'gray' : 'lightgray',
            },
          ]}
          onPress={() => navigation.navigate('DeleteAddress', { address: item, onDelete: () => handleDeleteAddress(item) })}
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
          onPress={() =>
            navigation.navigate('EditAddress', {
              address: item,
              onSave: (editedAddress) => handleEditAddress(editedAddress, item),
            })}
        >
          <Text style={styles.buttonSmallText}>Edit</Text>
        </Pressable>
      </View>
    </View>
  );

  const handleSaveAddress = async (newAddress) => {
    
  
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      const parsedUserData = JSON.parse(storedUserData);
      if (parsedUserData && parsedUserData.id) {
        const userId = parsedUserData.id;
        await config.post(`/addressData`, { ...newAddress, userid: userId });
        const responseData = await config.get('/addressData');
       const getResponseAddressData =  responseData.data;
       const filteredAddressData = getResponseAddressData.filter(item => item.userid === userId);
      setAddressData(filteredAddressData);
      saveAddressDataToStorage(filteredAddressData);


      } else {
        console.error("Error reading user data from AsyncStorage");
      }
    } catch (error) {
      console.error('Error updating data in the database:', error);
    }
  };

  const handleEditAddress = async (editedAddress, originalAddress) => {
    const index = addressData.findIndex((address) => address.id === originalAddress.id);
  console.log(editedAddress.id);
  console.log(originalAddress.id);

    if (index !== -1) {
      const updatedAddressData = [...addressData];
      updatedAddressData[index] = editedAddress;
  
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        const parsedUserData = JSON.parse(storedUserData);
        if (parsedUserData && parsedUserData.id) {
          const userId = parsedUserData.id;
          await config.put(`/addressData/${originalAddress.id}`, { ...editedAddress, userid: userId });
  
          setAddressData(updatedAddressData);
          saveAddressDataToStorage(updatedAddressData);
        } else {
          console.error("Error reading user data from AsyncStorage");
        }
      } catch (error) {
        console.error('Error updating data in the database:', error);
      }
    }
  };

  const handleDeleteAddress = async (addressToDelete) => {
    console.log(addressToDelete);
    const index = addressData.findIndex((address) => address.id === addressToDelete.id);
    console.log(addressToDelete.id);
    console.log(addressToDelete.userid);
    if (index !== -1) {
      const updatedAddressData = [...addressData];
      updatedAddressData.splice(index, 1);
    
      try {
        await config.delete(`/addressData/${addressToDelete.id}`);
        
        setAddressData(updatedAddressData);
        saveAddressDataToStorage(updatedAddressData);
      } catch (error) {
        console.error('Error deleting data from the database:', error);
      }
    }
  };

  return (
    <View style={[styles.screen]}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Address</Text>
      </View>

      <View style={styles.content} >
      {addressData.length > 0 ? (
        <FlatList
          data={addressData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        ) : (
          <Text style={styles.noItemsText}>Addresses are empty</Text>
        )}
        
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? '#31263E' : '#31263E',
          },
        ]}
        onPress={() => navigation.navigate('AddAddress', { onSave: handleSaveAddress })} 
      >
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>

    </View>
  );
};

export default AddressScreen;