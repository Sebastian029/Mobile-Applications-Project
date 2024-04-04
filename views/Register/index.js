import {Text, View, Image, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import config from '../../config'

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
        Alert.alert('Error', 'Password and repeat password do not match')
        return;
      }
  
      try {
        const emailExistsResponse = await config.get(`/users?email=${email}`);

        if (emailExistsResponse.data.length > 0) {
          Alert.alert('Error', 'Email already exists')
          return;
        }

        if (!firstName || !lastName || !email || !phoneNumber || !birthday || !password || !password || !repeatPassword) {
          Alert.alert('Error', 'All fields must be filled out.');
          return;
        }
        
        
        const nameRegex = /^[a-zA-Z]+$/;
        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
          Alert.alert('Error', 'First and last names should contain only letters.');
          return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
          Alert.alert('Error', 'Make sure that the input follows the user@mail.com format');
          return;
        }

     
        

   
       



        const response = await config.post('/users', {
          firstName,
          lastName,
          email,
          password,
          repeatPassword,
        });

  

      } catch (error) {
        console.error('Error during registration:', error);
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