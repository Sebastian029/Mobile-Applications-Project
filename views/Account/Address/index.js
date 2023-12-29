import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import axios from 'axios';
import { baseUrl } from '../../../config';

const AddressScreen = ({ navigation }) => {
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    // Odczytaj dane z AsyncStorage po załadowaniu komponentu
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
  }, []); // Pusta zależność oznacza, że useEffect zostanie uruchomiony tylko raz po zamontowaniu komponentu

  const saveAddressDataToStorage = async (addressData) => {
    try {
      await AsyncStorage.setItem('addressData', JSON.stringify(addressData));
    } catch (error) {
      console.error('Error saving address data to AsyncStorage:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.heading}>My Address 1</Text>

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
          onPress={() => navigation.navigate('DeleteAddress', { address: item, onDelete: handleDeleteAddress })}
        >
          <Text style={styles.buttonSmallText}>Delete</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.buttonSmall,
            {
              backgroundColor: pressed ? 'darkorange' : 'orange',
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
    // Dodaj nowy adres do stanu
    setAddressData([...addressData, newAddress]);
    // Zapisz dane adresowe do AsyncStorage
    saveAddressDataToStorage([...addressData, newAddress]);
  
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      const parsedUserData = JSON.parse(storedUserData);
      if (parsedUserData && parsedUserData.id) {
        const userId = parsedUserData.id;
        // Aktualizuj dane w bazie danych tylko dla nowo dodanego adresu
        await axios.post(`${baseUrl}/addressData`, { ...newAddress, userid: userId });
      } else {
        console.error("Error reading user data from AsyncStorage");
      }
    } catch (error) {
      console.error('Error updating data in the database:', error);
    }
  };

  const handleEditAddress = async (editedAddress, originalAddress) => {
    const index = addressData.findIndex((address) => address.id === originalAddress.id);
  
    if (index !== -1) {
      const updatedAddressData = [...addressData];
      updatedAddressData[index] = editedAddress;
  
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        const parsedUserData = JSON.parse(storedUserData);
        if (parsedUserData && parsedUserData.id) {
          const userId = parsedUserData.id;
          // Aktualizuj dane w bazie danych
          await axios.put(`${baseUrl}/addressData/${originalAddress.id}`, { ...editedAddress, userid: userId });
  
          // Aktualizuj stan i zapisz dane adresowe do AsyncStorage
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
    const index = addressData.findIndex((address) => address.id === addressToDelete.id);
    
    if (index !== -1) {
      const updatedAddressData = [...addressData];
      updatedAddressData.splice(index, 1);
    
      try {
        // Usuń dane z bazy danych
        await axios.delete(`http://192.168.1.25:3004/addressData/${addressToDelete.id}`);
        
        // Aktualizuj stan i zapisz dane adresowe do AsyncStorage
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
        <FlatList
          data={addressData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? 'darkorange' : 'orange',
          },
        ]}
        onPress={() => navigation.navigate('AddAddress', { onSave: handleSaveAddress })} // Użyj funkcji anonimowej tutaj
      >
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>

    </View>
  );
};

export default AddressScreen;