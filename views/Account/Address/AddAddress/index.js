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
    // Add your logic to save the address data
    const newAddress = {
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

    // Pass the new address data to the onSave callback
    route.params.onSave(newAddress);

    // Navigate back
    navigation.goBack();
  };

  const onGetLocation = async () => {
   
    const userLocation = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
   
      setLocation(location);
      // console.log("Location:");
      // console.log(location);

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

      <Text style={styles.header}>Country</Text>
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          onChangeText={(text) => setCountry(text)}
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

        <Text style={styles.header}>Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
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
      <View style={[styles]}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? 'darkorange' : 'orange',
            },
          ]}
          onPress={() => onGetLocation()}
        >
          <Text style={styles.buttonText}>GPS</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddAddressScreen;

