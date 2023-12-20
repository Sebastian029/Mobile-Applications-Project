import React, { useEffect, useState, useRef } from 'react';

import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, Button,FlatList,Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';




const MessageCenterScreen = ({ navigation }) => {

  const [messageData, setMessageData] = useState([
    {
      id: 1,
      type: "Comment",
      title: "Add comment to your purhase A5555",
      detail: "Your order was placed successfully on 31 February 2137 24:59 and will be delivered yesterday."
    },
    {
      id: 2,
      type: "Confirm",
      title: "Confirm to your purhase A5555",
      detail: "Your order was placed successfully on 31 February 2137 24:59 and will be delivered yesterday."
    },
  ]);
  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('MessageDetail', { selectedItem: item})}>
      <Text> {item.title}</Text>

    </Pressable>
  );




  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserDataFromStorage = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      } catch (error) {
        console.error('Error reading user data from AsyncStorage:', error);
      }
    };

    getUserDataFromStorage();

    const requestCameraPermission = async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    };

    requestCameraPermission();
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
              <Text style={styles.welcomeText}>Hi, {userData.firstName}!</Text>
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

