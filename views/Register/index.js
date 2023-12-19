import {Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import styles from './style.js';

  export default function Register({navigation}){
    
    const handleRegister = () => {
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
            <TextInput placeholder='First Name' style={styles.textInput}></TextInput>
            <Feather name="user" style={styles.icon}/>
          </View>
          <View style={styles.inputBox}>
            <TextInput placeholder='Last Name' style={styles.textInput}></TextInput>
            <Feather name="user" style={styles.icon}/>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Your Email' style={styles.textInput}></TextInput>
            <AntDesign name="mail" style={styles.icon}/>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Phone Number' style={styles.textInput}></TextInput>
            <AntDesign name="phone" style={styles.icon}/>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Birthday' style={styles.textInput}></TextInput>
            <AntDesign name="calendar" style={styles.icon}/>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Password' style={styles.textInput}></TextInput>
            <AntDesign name="unlock" style={styles.icon}/>
          </View>

          <View style={styles.inputBox}>
            <TextInput placeholder='Repeat password' style={styles.textInput}></TextInput>
            <AntDesign name="lock" style={styles.icon}/>
          </View>

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