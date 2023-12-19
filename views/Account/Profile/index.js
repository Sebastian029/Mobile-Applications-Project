import React, { useEffect, useState } from 'react';
import { Text, View, Image, SafeAreaView,StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Funkcja do pobierania danych z AsyncStorage
    const getUserDataFromStorage = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          // Jeśli dane są dostępne, ustaw je w stanie komponentu
          setUserData(JSON.parse(storedUserData));
        }
      } catch (error) {
        console.error('Error reading user data from AsyncStorage:', error);
      }
    };

    // Wywołaj funkcję pobierania danych po zamontowaniu komponentu
    getUserDataFromStorage();
  }, []);

  return (
    <SafeAreaView>
      <View style={[styles.screen]}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Add Card</Text>
      </View>
      <View>
          {userData && (
            <View>
              <Text>Hi ! {userData.firstName}</Text>
              <Text>{userData.email}</Text>
            </View>
          )}
        </View>
        <View>
          {userData && (
            <View>
              <Text>Full Name: {userData.firstName} {userData.lastName}</Text>
              <Text>Your Email: {userData.email}</Text>
              <Text>Phone Number: {userData.phoneNumber}</Text>
              <Text>Birthday: {userData.birthday}</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
  },
  buttonText: {
    color:'#223263',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  cialo:{
   
    
  },
screen:{
  width:'100%',
  height:'100%',
  backgroundColor:'white',
  display:'flex',
  flexDirection:'column',
  
},

topBar: {
  width: '100%' ,
  flexDirection: 'row',
  justifyContent: 'flex-start', // Align items to the left
  paddingLeft: 30,
  paddingTop: 45,
  borderBottomWidth: 0.2,
  borderColor: 'gray',
  paddingBottom: 10,
  backgroundColor: 'white',
  
},
Back: {
  backgroundColor: 'blue',
  height: 40,
  justifyContent: 'center',
  
 
},
basicIcon: {
  fontSize: 22,
  color: 'gray',
},
exitIcon: {
  fontSize: 22,
  color: 'red',
},
title: {
  marginLeft: 10, // Adjust margin as needed
  
 
  fontSize: 20, // Adjust font size as needed
  color:'#223263',

  fontWeight:'bold',

},
buttonContainer: {
  flex: 1,
  justifyContent: 'center',
},



})

