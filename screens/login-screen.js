import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import styles from '../styles/login-screen-style.js';

  export default function LoginScreen({navigation}){
    
    return (
      
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent:'center'}}>

        <View style={styles.mainBox}>

        <View style={styles.topBox}>
          <View style={styles.logoBox}>
            <Image style={styles.logo} source={require('../assets/baseAppIcon.png')} />
          </View>

          <Text style={styles.firstText}>Welcome to e-shop</Text>
          <Text style={styles.secondText}>Sign in to continue</Text>
          
        </View>

        <View style={styles. bottomBox}> 
          <View style={styles.inputBox}>
              <TextInput placeholder='Your Email' style={styles.textInput}></TextInput>
              <AntDesign name="mail" style={styles.icon}/>
            </View>

            <View style={styles.inputBox}>
              <TextInput placeholder='Password' style={styles.textInput}></TextInput>
              <AntDesign name="lock" style={styles.icon}/>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                <Text style={styles.buttonText} >Sign Up</Text>
            </TouchableOpacity>

            <View >
              <Text style={styles.secondText} onPress={() => navigation.navigate('Register')}>Don't have an account <Text style={styles.signText} onPress={() => navigation.navigate('Register')}>Register</Text>
              </Text>
             </View>
          
          
        </View>
          

          

        </View>


       

        </ScrollView>
      </View>

      
    
  );
  }