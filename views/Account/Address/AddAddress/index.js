
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AddAddressScreen = ({ navigation, route }) => {
  const [country, setCountry] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  
  const onSave = () => {
    // Add your logic to save the address data
    const newAddress = {
      country: country,
      first: first,
      last: last,
      street: street,
      city: city,
      region: region,
      zip: zip,
      phone: phone,
    };
    

    // Pass the new address data to the onSave callback
    route.params.onSave(newAddress);

    // Navigate back
    navigation.goBack();
  };

  return (
    <View style={[styles.screen]}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Add Address</Text>
      </View>
      <View style={styles.cialo}>
      <TextInput
  style={styles.input}
  placeholder="Country"
  value={country}
  onChangeText={(text) => setCountry(text)}
/>
<TextInput
  style={styles.input}
  placeholder="First Name"
  value={first}
  onChangeText={(text) => setFirst(text)}
/>
<TextInput
  style={styles.input}
  placeholder="Last Name"
  value={last}
  onChangeText={(text) => setLast(text)}
/>
<TextInput
  style={styles.input}
  placeholder="Street"
  value={street}
  onChangeText={(text) => setStreet(text)}
/>
<TextInput
  style={styles.input}
  placeholder="City"
  value={city}
  onChangeText={(text) => setCity(text)}
/>
<TextInput
  style={styles.input}
  placeholder="Region"
  value={region}
  onChangeText={(text) => setRegion(text)}
/>
<TextInput
  style={styles.input}
  placeholder="ZIP Code"
  value={zip}
  onChangeText={(text) => setZip(text)}
/>
<TextInput
  style={styles.input}
  placeholder="Phone"
  value={phone}
  onChangeText={(text) => setPhone(text)}
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
          onPress={onSave}
        >
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
  },
  buttonText: {
    color:'#223263',
    fontSize: 18,
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

