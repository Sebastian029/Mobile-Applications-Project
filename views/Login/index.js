import React, { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import axios from 'axios';
import { baseUrl } from '../../config';

// Bazowy adres URL dla zapytań axios
//const baseUrl = 'http://192.168.1.25:3004';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  

  const saveAddressDataToStorage = async (userId, addressData) => {
    try {
      // Sprawdź, czy użytkownik jest zalogowany
      const authenticatedUser = await AsyncStorage.getItem('userData');
      if (!authenticatedUser) {
        console.error('User not authenticated');
        return;
      }

      // Pobierz istniejące dane adresowe z AsyncStorage
      const existingAddressData = await AsyncStorage.getItem('addressData');
      let parsedAddressData = existingAddressData ? JSON.parse(existingAddressData) : [];

      if (!Array.isArray(parsedAddressData)) {
        parsedAddressData = [];
      }

      // Filtruj dane adresowe tylko dla zalogowanego użytkownika
      const filteredAddressData = parsedAddressData.filter((address) => address.userid === userId);

      // Dodaj nowe dane adresowe dla zalogowanego użytkownika
      const userAddressData = addressData.map(address => ({ ...address, userid: userId }));
      filteredAddressData.push(...userAddressData);

      // Zapisz dane adresowe do AsyncStorage
      await AsyncStorage.setItem('addressData', JSON.stringify(filteredAddressData));
    } catch (error) {
      console.error('Error saving address data to AsyncStorage:', error);
    }
  };

  const saveCardDataToStorage = async (userId, cardData) => {
    try {
      // Sprawdź, czy użytkownik jest zalogowany
      const authenticatedUser = await AsyncStorage.getItem('userData');
      if (!authenticatedUser) {
        console.error('User not authenticated');
        return;
      }
  
      // Pobierz istniejące dane kart z AsyncStorage
      const existingCardData = await AsyncStorage.getItem('cardData');
      let parsedCardData = existingCardData ? JSON.parse(existingCardData) : [];
  
      if (!Array.isArray(parsedCardData)) {
        parsedCardData = [];
      }
  
      // Filtruj dane kart tylko dla zalogowanego użytkownika
      const filteredCardData = parsedCardData.filter((card) => card.userid === userId);
  
      // Dodaj nowe dane karty dla zalogowanego użytkownika
      const userCardData = cardData.map(card => ({ ...card, userid: userId }));
      filteredCardData.push(...userCardData);
  
      // Zapisz dane kart do AsyncStorage
      await AsyncStorage.setItem('cardData', JSON.stringify(filteredCardData));
    } catch (error) {
      console.error('Error saving card data to AsyncStorage:', error);
    }
  };
  
  const saveUserDataToStorage = async (userData) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user data to AsyncStorage:', error);
    }
  };
  const displayStoredData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      const storedCardData = await AsyncStorage.getItem('cardData');
  
      console.log('Stored User Data:', storedUserData);
      console.log('Stored Card Data:', storedCardData);
    } catch (error) {
      console.error('Error reading data from AsyncStorage:', error);
    }
  };

  const saveMySaleDataToStorage = async (userId, mySaleData) => {
    try {
      // Sprawdź, czy użytkownik jest zalogowany
      const authenticatedUser = await AsyncStorage.getItem('userData');
      if (!authenticatedUser) {
        console.error('User not authenticated');
        return;
      }
  
      // Pobierz istniejące dane mySale z AsyncStorage
      const existingMySaleData = await AsyncStorage.getItem('mySaleData');
      let parsedMySaleData = existingMySaleData ? JSON.parse(existingMySaleData) : [];
  
      if (!Array.isArray(parsedMySaleData)) {
        parsedMySaleData = [];
      }
  
      // Filtruj dane mySale tylko dla zalogowanego użytkownika
      const filteredMySaleData = parsedMySaleData.filter((mySale) => mySale.userid === userId);
  
      // Dodaj nowe dane mySale dla zalogowanego użytkownika
      const userMySaleData = mySaleData.map((mySale) => ({ ...mySale, userid: userId }));
      filteredMySaleData.push(...userMySaleData);
  
      // Zapisz dane mySale do AsyncStorage
      await AsyncStorage.setItem('mySaleData', JSON.stringify(filteredMySaleData));
    } catch (error) {
      console.error('Error saving mySale data to AsyncStorage:', error);
    }
  };

  const handleLogin = async () => {
    //saveUserDataToStorage(formData);
    //saveCardDataToStorage(cardData);
   // saveAddressDataToStorage(addressData);
   // navigation.navigate('TabNav');
   // Clear AsyncStorage data before attempting to save new data
  try {
    await AsyncStorage.removeItem('mySaleData');
    await AsyncStorage.removeItem('userData');
    await AsyncStorage.removeItem('cardData');
    await AsyncStorage.removeItem('addressData');
  } catch (error) {
    console.error('Error clearing AsyncStorage data:', error);
  }
    try{
    const responseUsers = await axios.get('http://192.168.1.25:3004/users');
      console.log('Dane z serwera:', responseUsers.data);
    const responseCardData = await axios.get('http://192.168.1.25:3004/cardData');
      console.log('Dane z serwera:', responseCardData.data);
    const responseAddressData = await axios.get('http://192.168.1.25:3004/addressData');
      console.log('Dane z serwera:', responseAddressData.data);
    const responseMySaleData = await axios.get(`${baseUrl}/mySaleData`);
      console.log('Dane z serwera:', responseMySaleData.data);

      const getResponseDataUsers = responseUsers.data;
      const getResponseDataCardData = responseCardData.data;
      const getResponseAddressCardData =  responseAddressData.data;
      const getResponseMySaleData =  responseMySaleData.data;

      const authenticatedUser = getResponseDataUsers.find((user) => user.email === email && user.password === password);
      //const authenticatedCardData = getResponseDataCardData.find((cardData) => cardData.userid === authenticatedUser.id);

      console.log("user: "+authenticatedUser.id);
      //console.log("card: "+authenticatedCardData.userid);
     // console.log('Dane z serwera:', authenticatedCardData);
    // Sprawdź, czy wprowadzone dane są poprawne
    if (authenticatedUser){ 
      console.log('Login successful');
      const authenticatedCardData = getResponseDataCardData.filter((cardData) => {
        const match = cardData.userid === authenticatedUser.id;
        console.log('Checking:', cardData.userid, ' === ', authenticatedUser.id, ' => ', match);
        setLoginError('');
        return match;
      });
      const authenticatedAddressData = getResponseAddressCardData.filter((addressData) => addressData.userid === authenticatedUser.id);
      console.log('Authenticated card data:', authenticatedCardData);
      console.log("card: " + authenticatedCardData.map(card => card.userid).join(', '));
      //console.log('Authenticated address data:', authenticatedAddressData);

      const authenticatedMySaleData = getResponseMySaleData.filter((mySaleData) => mySaleData.userid === authenticatedUser.id);
      console.log('Authenticated mysale data:', authenticatedMySaleData);
      console.log("mysale: " + authenticatedMySaleData.map(mySale => mySale.userid).join(', '));
      // Zapisz dane zalogowanego użytkownika w AsyncStorage
      saveUserDataToStorage(authenticatedUser);
      saveCardDataToStorage(authenticatedUser.id, authenticatedCardData);
      saveAddressDataToStorage(authenticatedUser.id, authenticatedAddressData);
      saveMySaleDataToStorage(authenticatedUser.id,authenticatedMySaleData);
      displayStoredData();
      navigation.navigate('TabNav');
    } else {
      console.log('Invalid credentials');
      setLoginError('Invalid credentials');

    }
  }catch(error)
  {
    console.log("error: ",error);
    setLoginError('An error occurred hehe');
  }
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.topBox}>
          <View style={styles.logoBox}>
            <Image style={styles.logo} source={require('../../assets/baseAppIcon.png')} />
          </View>
          <Text style={styles.firstText}>Let's get started</Text>
        </View>

        <View style={styles.mainBox}>

        {loginError && (
    <Text style={styles.errorText}>{loginError}</Text>
  )}

          <Text style={styles.secondText}>Sign in to continue</Text>

          <View style={styles.inputBox}>
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              onChangeText={(text) => setEmail(text)}
            />
            <AntDesign name="mail" style={styles.icon} />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
            <AntDesign name="unlock" style={styles.icon} />
          </View>

          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>

          <Pressable onPress={goToRegister}>
            <Text style={styles.secondText}>
              Don't have an account? <Text style={styles.signText}>Sign Up</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

