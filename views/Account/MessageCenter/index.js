import React, { useEffect, useState, useRef } from 'react';

import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, Button,FlatList,Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';


import config from '../../../config'

const MessageCenterScreen = ({ navigation }) => {

 

  
  const renderItem = ({ item }) => (
    
      <Pressable style={styles.infoBox} onPress={() => navigation.navigate('MessageDetail', { selectedItem: item})}>
        
        <Text style={styles.infoText}> {item.title}</Text>

      </Pressable>
    
  );



  const [messageData, setMessageData] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserDataFromStorage = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
          const responseOrder = await config.get(`/message`);
          const getResponseOrder = responseOrder.data;
          setMessageData(getResponseOrder);
          
        }
      } catch (error) {
        console.error('Error reading user data from AsyncStorage:', error);
      }
    };

    getUserDataFromStorage();

    
  }, []);


  return (
    <SafeAreaView style={styles.screen}>
   
      <View style={styles.topBar}>
        <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Message Center</Text>
      </View>

      <View style={styles.welcomeView}>
            {userData && (
              <View>
                <Text style={styles.title}>Hi, {userData.firstName}!</Text>
              </View>
            )}
            
            <FlatList
              data={messageData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()} 
            />

      </View>
    </SafeAreaView>
  );
};

export default MessageCenterScreen;

