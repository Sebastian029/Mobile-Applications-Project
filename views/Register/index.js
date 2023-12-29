import {Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import axios from 'axios';

import styles from './style.js';

  export default function Register({navigation}){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');
   const [repeatPassword, setRepeatPassword] = useState('');
   const [passwordError, setPasswordError] = useState(null);

    const handleRegister = async () => {
      if (password !== repeatPassword) {
        console.log("Password and repeat password do not match");
        setPasswordError('Passwords do not match');
        // Display an error message or update UI accordingly
        return;
      }
      setPasswordError(' ');
      try {
        // Check if the email already exists
        const emailExistsResponse = await axios.get(`http://192.168.1.25:3004/users?email=${email}`);

        if (emailExistsResponse.data.length > 0) {
          console.log("Email already exists");
          setPasswordError('Email already exists');
          // Display an error message or update UI accordingly
          return;
        }

        const response = await axios.post('http://192.168.1.25:3004/users', {
          firstName,
          lastName,
          email,
          phoneNumber,
          birthday,
          password,
          repeatPassword,
        });
  
        console.log('Response from server:', response.data);

      } catch (error) {
        console.error('Error during registration:', error);
        // Handle error, show an alert, or update UI accordingly
      }

        console.log('register handler');
        navigation.navigate('Login');
    }

    const goToLogin = () =>{
      navigation.navigate('Login');
    }

    return (
      
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={{ flexGrow: 1}}>

        <View style={styles.topBox}>
          <View style={styles.logoBox}>
          <Image style={styles.logo} source={require('../../assets/baseAppIcon.png')} />
          </View>

          <Text style={styles.firstText}>Let's get started</Text>
          
        </View>

        <View style={styles.mainBox}>
        <Text style={styles.secondText}>Create an new account</Text>
        <View style={styles.inputBox}>
            <TextInput placeholder='First Name' style={styles.textInput}  onChangeText={(text) => setFirstName(text)}></TextInput>
            <Feather name="user" style={styles.icon}/>
          </View>
          <View style={styles.inputBox}>
            <TextInput placeholder='Last Name' style={styles.textInput}  onChangeText={(text) => setLastName(text)}></TextInput>
            <Feather name="user" style={styles.icon}/>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Your Email' style={styles.textInput} onChangeText={(text) => setEmail(text)}></TextInput>
            <AntDesign name="mail" style={styles.icon}/>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Phone Number' style={styles.textInput} onChangeText={(text) => setPhoneNumber(text)}></TextInput>
            <AntDesign name="phone" style={styles.icon}/>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Birthday' style={styles.textInput} onChangeText={(text) => setBirthday(text)}></TextInput>
            <AntDesign name="calendar" style={styles.icon}/>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Password' style={styles.textInput} onChangeText={(text) => setPassword(text)}></TextInput>
            <AntDesign name="unlock" style={styles.icon}/>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Repeat password' style={styles.textInput} onChangeText={(text) => setRepeatPassword(text)}></TextInput>
            <AntDesign name="lock" style={styles.icon}/>
          </View>

          {passwordError && (
    <Text style={styles.errorText}>{passwordError}</Text>
  )}
          <Pressable style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>

          <Pressable onPress={goToLogin}>
            <Text style={styles.secondText}>have an account? <Text style={styles.signText}>Sign In</Text>
            </Text>
          </Pressable>

        
          </View>
        </ScrollView>
      </View>
  );
  }