import React, { useState } from 'react';

import { View, Text,  StyleSheet, Pressable, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './style';

  const AddressScreen = ({ navigation }) => {
    
    const [addressData, setAddressData] = useState([
      {
        country: "Polska",
        first: "Dominik",
        last: "Jaroszek",
        street: "Podraje",
        city: "Nowy Korczyn",
        region:"Swietokrzyskie",
        zip:"100-200",
        phone:"+48 100-000-123",
        houseNumber:'100'
        
      },
      {
        country: "Polska",
        first: "Dominik",
        last: "Jaroszek",
        street: "Podraje",
        city: "Nowy Korczyn",
        region:"Swietokrzyskie",
        zip:"100-200",
        phone:"+48 123-467-789",
        houseNumber:'123'
        
      },
    ]);
  
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
              onPress={() => navigation.navigate('DeleteAddress', { address: item, onDelete: handleDeleteAddress })} Użyj funkcji anonimowej tutaj
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
      // Add the new address to the state
      setAddressData([...addressData, newAddress]);
    };

    const handleEditAddress = (editedAddress, originalAddress) => {
      // Find the index of the original address in the array
      const index = addressData.findIndex((address) => address === originalAddress);
  
      if (index !== -1) {
        // Create a copy of the address data and replace the original address with the edited one
        const updatedAddressData = [...addressData];
        updatedAddressData[index] = editedAddress;
  
        // Update the state
        setAddressData(updatedAddressData);
      }
    }

    const handleDeleteAddress = (addressToDelete) => {
      // Znajdź indeks karty do usunięcia
      const index = addressData.findIndex((address) => address.number === addressToDelete.number);
  
      if (index !== -1) {
        // Utwórz kopię stanu i usuń kartę
        const updatedAddressData = [...addressData];
        updatedAddressData.splice(index, 1);
  
        // Uaktualnij stan
        setAddressData(updatedAddressData);
      }
    };




  return (
    <View style={[styles.screen]}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
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
