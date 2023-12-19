import React, { useState } from 'react';

import { View, Text,  StyleSheet, Pressable, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';





 


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
        phone:"100000",
        
      },
      {
        country: "Polska",
        first: "Dominik",
        last: "Jaroszek",
        street: "Podraje",
        city: "Nowy Korczyn",
        region:"Swietokrzyskie",
        zip:"100-200",
        phone:"100000",
        
      },
    ]);
  
    const renderItem = ({ item }) => (
      <View>
        
        <Text>Country: {item.country}</Text>
        <Text>First Name: {item.first}</Text>
        <Text>Last Name: {item.last}</Text>
        <Text>Street: {item.street}</Text>
        <Text>City: {item.city}</Text>
        <Text>Region: {item.region}</Text>
        <Text>ZIP Code: {item.zip}</Text>
        <Text>Phone: {item.phone}</Text>
        <Pressable
  style={({ pressed }) => [
    styles.buttonSmall,
    {
      backgroundColor: pressed ? 'darkorange' : 'orange',
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
       <View style={styles.cialo} >
       <FlatList
  data={addressData}
  renderItem={renderItem}
  keyExtractor={(item, index) => index.toString()} 
/>

       </View>
      
      <View style={[styles]}>
      
      
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
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
  },
  buttonSmall:{
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
  },
  buttonText: {
    color:'#223263',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSmallText: {
    color:'#223263',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cialo:{
   
    
  },
screen:{
  width:'100%',
  height:'100%',
  backgroundColor:'white',
  display:'flex',
  flexDirection:'column',
  
},

topBar: {
  width: '100%' ,
  flexDirection: 'row',
  justifyContent: 'flex-start', // Align items to the left
  paddingLeft: 30,
  paddingTop: 45,
  borderBottomWidth: 0.2,
  borderColor: 'gray',
  paddingBottom: 10,
  backgroundColor: 'white',
  
},
Back: {
  backgroundColor: 'blue',
  height: 40,
  justifyContent: 'center',
  
 
},
basicIcon: {
  fontSize: 22,
  color: 'gray',
},
exitIcon: {
  fontSize: 22,
  color: 'red',
},
title: {
  marginLeft: 10, // Adjust margin as needed
  
 
  fontSize: 20, // Adjust font size as needed
  color:'#223263',

  fontWeight:'bold',

},
buttonContainer: {
  flex: 1,
  justifyContent: 'center',
},



})
