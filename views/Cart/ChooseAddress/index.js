import React, { useState,useEffect } from 'react';

import { View, Text,  StyleSheet, Pressable, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

  const ChooseAddressScreen = ({ navigation }) => {
    
    const [addressData, setAddressData] = useState(null);

    useEffect(() => {
        const getAddressDataFromStorage = async () => {
          try {
            const storedAddressData = await AsyncStorage.getItem('addressData');
            if (storedAddressData) {
              setAddressData(JSON.parse(storedAddressData));
            }
          } catch (error) {
            console.error('Error reading user data from AsyncStorage:', error);
          }
        };
    
        getAddressDataFromStorage();
    
        
      }, []);

  
    const renderItem = ({ item }) => (
        <Pressable style={({ pressed }) => [
                styles.card,
                {
                    borderColor: pressed ? "#f99c1c" : 'lightgrey',
                },
            ]}
            onPress={() => navigation.navigate('CheckOut', { address: item })}>
        <Text style={styles.heading}>My Address 1</Text>

        <Text style={styles.cardInformation}>{item.first} {item.last}</Text>
        <Text style={styles.cardInformation}>{item.street} {item.houseNumber}, {item.city},</Text>
        <Text style={styles.cardInformation}>{item.zip} {item.street}</Text>
        <Text style={styles.cardInformation}>{item.region}, {item.country}</Text>
        <Text style={styles.cardInformation}>{item.phone}</Text>
      </Pressable>
    );


    

    



  return (
    <View style={[styles.screen]}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
        <Text style={styles.title}>Address</Text>
      </View>

      <View style={styles.content} >
        <FlatList
          data={addressData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()} 
        />
       </View>
      
 
      
      
      
      
    </View>
  );
};

export default ChooseAddressScreen;
