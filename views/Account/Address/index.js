import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

const AddressScreen = ({ navigation }) => {
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    // Odczytaj dane z AsyncStorage po załadowaniu komponentu
    const fetchData = async () => {
      try {
        const storedAddressData = await AsyncStorage.getItem('addressData');
        if (storedAddressData) {
          setAddressData(JSON.parse(storedAddressData));
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

  const handleSaveAddress = (newAddress) => {
    // Dodaj nowy adres do stanu
    setAddressData([...addressData, newAddress]);
    // Zapisz dane adresowe do AsyncStorage
    saveAddressDataToStorage([...addressData, newAddress]);
  };

  const handleEditAddress = (editedAddress, originalAddress) => {
    // Znajdź indeks oryginalnego adresu w tablicy
    const index = addressData.findIndex((address) => address === originalAddress);

    if (index !== -1) {
      // Utwórz kopię danych adresowych i zastąp oryginalny adres edytowanym
      const updatedAddressData = [...addressData];
      updatedAddressData[index] = editedAddress;

      // Zaktualizuj stan i zapisz dane adresowe do AsyncStorage
      setAddressData(updatedAddressData);
      saveAddressDataToStorage(updatedAddressData);
    }
  }

  const handleDeleteAddress = (addressToDelete) => {
    // Znajdź indeks adresu do usunięcia
    const index = addressData.findIndex((address) => address.phone === addressToDelete.phone);

    if (index !== -1) {
      // Utwórz kopię stanu i usuń adres
      const updatedAddressData = [...addressData];
      updatedAddressData.splice(index, 1);

      // Zaktualizuj stan i zapisz dane adresowe do AsyncStorage
      setAddressData(updatedAddressData);
      saveAddressDataToStorage(updatedAddressData);
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
