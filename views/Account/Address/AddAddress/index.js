import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Location from 'expo-location';

import styles from './style';
import { LogBox } from 'react-native'
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const AddAddressScreen = ({ navigation, route }) => {
  const [country, setCountry] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);



  useEffect(() => {
    (async () => {
      console.log('tu');
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      console.log('tutaj');
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    })();
  }, []);

  const onSave = () => {
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

    const truncatedFirst = first.slice(0, 20);
    const truncatedLast = last.slice(0, 20);
    const truncatedStreet = street.slice(0, 20);
    const truncatedCity = city.slice(0, 20);
    const truncatedRegion = region.slice(0, 20);
    const truncatedCountry = country.slice(0, 20);

    const newAddress = {
      name: name,
      country: truncatedCountry,
      first: truncatedFirst,
      last: truncatedLast,
      street: truncatedStreet,
      city: truncatedCity,
      region: truncatedRegion,
      zip: zip,
      phone: phone,
    };

    route.params.onSave(newAddress);

    navigation.navigate('SucessAddress');
  };

  const onGetLocation = async () => {
   
    const userLocation = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
   
      setLocation(location);

    try {
      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      
      fetchAddressFromCoordinates(coords.latitude, coords.longitude);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to get location.');
    }
  };

  const fetchAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const location = await Location.reverseGeocodeAsync({
        latitude: latitude,
        longitude: longitude,
      });

      if (location && location.length > 0) {
        const address = location[0];
        setCountry(address.country || '');
        setCity(address.city || '');
        setRegion(address.region || '');
        setZip(address.postalCode || '');
        const fullStreet = `${address.street || ''} ${address.streetNumber || ''}`;
        setStreet(fullStreet.trim());

        console.log('Formatted Address:', address);
      } else {
        Alert.alert('Error', 'No address found for the given coordinates.');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to fetch address from coordinates.');
    }
  };

  return (
    <View style={[styles.screen]}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Add Address</Text>
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
              backgroundColor: pressed ? '#31263E' : '#31263E',
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

