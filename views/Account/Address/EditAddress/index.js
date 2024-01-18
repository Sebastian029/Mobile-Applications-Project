import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './style'

const EditAddressScreen = ({ navigation, route }) => {
  const [country, setCountry] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [userid, setUserid] = useState('');
  useEffect(() => {
    if (route.params?.address) {
      const { id, name, country, first, last, street, city, region, zip, phone, userid} = route.params.address;
      setUserid(userid);
      setId(id);
      setName(name);
      setCountry(country);
      setFirst(first);
      setLast(last);
      setStreet(street);
      setCity(city);
      setRegion(region);
      setZip(zip);
      setPhone(phone);
    }
  }, [route.params?.address]);

  

  const onSave = () => {
    const editedAddress = {
      id: id,
      userid : userid,
      name : name,
      country: country,
      first: first,
      last: last,
      street: street,
      city: city,
      region: region,
      zip: zip,
      phone: phone,
    };

    if (!name || !country || !first || !last || !street || !city || !region || !zip || !phone) {
      Alert.alert('Error', 'All fields must be filled out.');
      return;
    }

  const nameRegex = /^[a-zA-Z]+$/;
  if (!nameRegex.test(first) || !nameRegex.test(last)) {
    Alert.alert('Error', 'First and last names should contain only letters.');
    return;
  }

  const phoneRegex = /^\+48\d{9}$/;
  if (!phoneRegex.test(phone)) {
    Alert.alert('Error', 'Phone number should be in the format +489123456789.');
    return;
  }

  const zipRegex = /^\d{2}-\d{3}$/;
  if (!zipRegex.test(zip)) {
    Alert.alert('Error', 'ZIP code should be in the format xx-xxx.');
    return;
  }

    route.params.onSave(editedAddress);

    navigation.goBack();
  };

  return (
    <View style={[styles.screen]}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Edit Address</Text>
      </View>
      <ScrollView style={styles.content}>
      <Text style={styles.header}>Name Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Name Address"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.header}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={first}
          onChangeText={(text) => setFirst(text)}
        />

        <Text style={styles.header}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={last}
          onChangeText={(text) => setLast(text)}
        />
        <Text style={styles.header}>Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        
        <Text style={styles.header}>Street</Text>
        <TextInput
          style={styles.input}
          placeholder="Street"
          value={street}
          onChangeText={(text) => setStreet(text)}
        />

        <Text style={styles.header}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={(text) => setCity(text)}
        />

        <Text style={styles.header}>Region</Text>
        <TextInput
          style={styles.input}
          placeholder="Region"
          value={region}
          onChangeText={(text) => setRegion(text)}
        />

        <Text style={styles.header}>ZIP Code</Text> 
        <TextInput
          style={styles.input}
          placeholder="ZIP Code"
          value={zip}
          onChangeText={(text) => setZip(text)}
        />
      <Text style={styles.header}>Country</Text>
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          onChangeText={(text) => setCountry(text)}
        />

        
      </ScrollView>
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

export default EditAddressScreen;

