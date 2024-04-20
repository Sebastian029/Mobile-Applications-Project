import React, { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import config from '../../config';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  

  const saveAddressDataToStorage = async (userId, addressData) => {
    try {
      const authenticatedUser = await AsyncStorage.getItem('userData');
      if (!authenticatedUser) {
        console.error('User not authenticated');
        return;
      }

      const existingAddressData = await AsyncStorage.getItem('addressData');
      let parsedAddressData = existingAddressData ? JSON.parse(existingAddressData) : [];

      if (!Array.isArray(parsedAddressData)) {
        parsedAddressData = [];
      }

      const filteredAddressData = parsedAddressData.filter((address) => address.userid === userId);

      const userAddressData = addressData.map(address => ({ ...address, userid: userId }));
      filteredAddressData.push(...userAddressData);

      await AsyncStorage.setItem('addressData', JSON.stringify(filteredAddressData));
    } catch (error) {
      console.error('Error saving address data to AsyncStorage:', error);
    }
  };

  const saveCardDataToStorage = async (userId, cardData) => {
    try {
      const authenticatedUser = await AsyncStorage.getItem('userData');
      if (!authenticatedUser) {
        console.error('User not authenticated');
        return;
      }
  
      const existingCardData = await AsyncStorage.getItem('cardData');
      let parsedCardData = existingCardData ? JSON.parse(existingCardData) : [];
  
      if (!Array.isArray(parsedCardData)) {
        parsedCardData = [];
      }
  
      const filteredCardData = parsedCardData.filter((card) => card.userid === userId);
  
      const userCardData = cardData.map(card => ({ ...card, userid: userId }));
      filteredCardData.push(...userCardData);
  
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
  const saveBootsDataToStorage = async (bootsData) => {
    try {
      await AsyncStorage.setItem('bootsData', JSON.stringify(bootsData));
    } catch (error) {
      console.error('Error saving boots data to AsyncStorage:', error);
    }
  };


  const saveMySaleDataToStorage = async (userId, mySaleData) => {
    try {
      const authenticatedUser = await AsyncStorage.getItem('userData');
      if (!authenticatedUser) {
        console.error('User not authenticated');
        return;
      }
  
      const existingMySaleData = await AsyncStorage.getItem('mySaleData');
      let parsedMySaleData = existingMySaleData ? JSON.parse(existingMySaleData) : [];
  
      if (!Array.isArray(parsedMySaleData)) {
        parsedMySaleData = [];
      }
  
      const filteredMySaleData = parsedMySaleData.filter((mySale) => mySale.userid === userId);
  
      const userMySaleData = mySaleData.map((mySale) => ({ ...mySale, userid: userId }));
      filteredMySaleData.push(...userMySaleData);
  
      await AsyncStorage.setItem('mySaleData', JSON.stringify(filteredMySaleData));
    } catch (error) {
      console.error('Error saving mySale data to AsyncStorage:', error);
    }
  };

  const saveOrderDataToStorage = async (userId, orderData) => {
    try {
      const authenticatedUser = await AsyncStorage.getItem('userData');
      if (!authenticatedUser) {
        console.error('User not authenticated');
        return;
      }
  
      const existingOrderData = await AsyncStorage.getItem('orderData');
      let parsedMySaleData = existingOrderData ? JSON.parse(existingOrderData) : [];
  
      if (!Array.isArray(parsedMySaleData)) {
        parsedMySaleData = [];
      }
  
      const filteredMySaleData = parsedMySaleData.filter((orderData) => orderData.userid === userId);
  
      const userMySaleData = orderData.map((orderData) => ({ ...orderData, userid: userId }));
      filteredMySaleData.push(...userMySaleData);
  
      await AsyncStorage.setItem('orderData', JSON.stringify(filteredMySaleData));
    } catch (error) {
      console.error('Error saving mySale data to AsyncStorage:', error);
    }
  };



  const handleLogin = async () => {
   
  try {
    await AsyncStorage.removeItem('userData');
    await AsyncStorage.removeItem('cardData');
    await AsyncStorage.removeItem('addressData');
    await AsyncStorage.removeItem('boots');
    await AsyncStorage.removeItem('orderData');
    await AsyncStorage.removeItem('CartItem');

  } catch (error) {
    console.error('Error clearing AsyncStorage data:', error);
  }
    try{
    const responseUsers = await config.get('/users');
    const responseCardData = await config.get('/cardData');
    const responseAddressData = await config.get('/addressData');
    const responseBoots = await config.get(`/boots`);
    const responseOrder = await config.get(`/orderData`);
      const getResponseDataUsers = responseUsers.data;
      const getResponseDataCardData = responseCardData.data;
      const getResponseAddressCardData =  responseAddressData.data;
      const getResponseBoots = responseBoots.data;
      const getResponseOrder = responseOrder.data;

      const authenticatedUser = getResponseDataUsers.find((user) => user.email === email && user.password === password);
    
      if (authenticatedUser?.email === 'admin' && authenticatedUser?.password === 'admin') {
        saveBootsDataToStorage(getResponseBoots);
        console.log("hej")
        navigation.navigate('AdminPanel');
        return;
    }

    if (authenticatedUser){ 
      const authenticatedCardData = getResponseDataCardData.filter((cardData) => {
        const match = cardData.userid === authenticatedUser.id;
        setLoginError('');
        return match;
      });
      const authenticatedAddressData = getResponseAddressCardData.filter((addressData) => addressData.userid === authenticatedUser.id);
    
      const authenticatedOrderData = getResponseOrder.filter((orderData) => orderData.userid === authenticatedUser.id);
      
      saveUserDataToStorage(authenticatedUser);
      saveBootsDataToStorage(getResponseBoots);
      saveCardDataToStorage(authenticatedUser.id, authenticatedCardData);
      saveAddressDataToStorage(authenticatedUser.id, authenticatedAddressData);
      saveOrderDataToStorage(authenticatedUser.id,authenticatedOrderData);
      
      navigation.reset({
        index: 0,
        routes: [{ name: 'TabNav' }],
      });

    } else {
      console.log('Invalid credentials');
      setLoginError('Invalid credentials');

    }
  }catch(error)
  {
    console.log("error: ",error);
    setLoginError('An error occurred');
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
          <Text style={styles.firstText}>Welcome to e-Shop</Text>
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

