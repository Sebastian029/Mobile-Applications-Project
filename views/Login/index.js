import { Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from './style';

const LoginScreen = ({navigation}) => {
 




    const handleLogin = () => {
        console.log('login handler');
        navigation.navigate('TabNav');
    }
    const goToRegister = () => {
        navigation.navigate('Register');
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
        <Text style={styles.secondText}>Sign in to continue</Text>
          

          <View style={styles.inputBox}>
            <TextInput placeholder='Your Email' style={styles.textInput}></TextInput>
            <AntDesign name="mail" style={styles.icon}/>
          </View>

     

          <View style={styles.inputBox}>
            <TextInput placeholder='Password' style={styles.textInput}></TextInput>
            <AntDesign name="unlock" style={styles.icon}/>
          </View>

          <Pressable style={styles.button} onPress={handleLogin}> 
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>

          <Pressable onPress={goToRegister}>
            <Text style={styles.secondText}>Don't have an account? <Text style={styles.signText}>Sign In</Text>
            </Text>
          </Pressable>

          
         </View>
        </ScrollView>
      </View>
  );
  }
  export default LoginScreen;