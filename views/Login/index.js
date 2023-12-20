import React, { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formData = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'login',
    phoneNumber: '123456789',
    birthday: '1990-01-01',
    password: 'password',
    repeatPassword: 'password',
  };
  const [cardData, setCardData] = useState([
    {
      number: "5000 0000 1111 4000",
      cardHolder: "Dominik Jaroszek",
      expiryDate: "01/2024",
    },
    {
      number: "9000 0030 1111 4020",
      cardHolder: "Pawel Zaporozy",
      expiryDate: "01/2025",
    },
    {
      number: "1234 0030 1111 4020",
      cardHolder: "Pawel Bialy",
      expiryDate: "01/2025",
    },
    
  ]);
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

  const saveCardDataToStorage = async (cardData) => {
    try {
      await AsyncStorage.setItem('cardData', JSON.stringify(cardData));
    } catch (error) {
      console.error('Error saving user data to AsyncStorage:', error);
    }
  };
  const saveAddressDataToStorage = async (addressData) => {
    try {
      await AsyncStorage.setItem('addressData', JSON.stringify(addressData));
    } catch (error) {
      console.error('Error saving user data to AsyncStorage:', error);
    }
  };
  const saveUserDataToStorage = async (userData) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user data to AsyncStorage:', error);
    }
  };

  const handleLogin = () => {
    saveUserDataToStorage(formData);
    saveCardDataToStorage(cardData);
    saveAddressDataToStorage(addressData);
    navigation.navigate('TabNav');
    // Sprawdź, czy wprowadzone dane są poprawne
    if (email === formData.email && password === formData.password) {
      console.log('Login successful');

      // Zapisz dane zalogowanego użytkownika w AsyncStorage
      saveUserDataToStorage(formData);

      navigation.navigate('TabNav');
    } else {
      console.log('Invalid credentials');
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
