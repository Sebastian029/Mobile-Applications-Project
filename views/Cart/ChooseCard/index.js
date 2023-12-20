import React, { useState ,useEffect} from 'react';

import { View, Text,  StyleSheet, Pressable, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from './style';

 


  const PaymentChooseScreen = ({ navigation }) => {

    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        const getCardDataFromStorage = async () => {
          try {
            const storedCardData = await AsyncStorage.getItem('cardData');
            if (storedCardData) {
              setCardData(JSON.parse(storedCardData));
            }
          } catch (error) {
            console.error('Error reading user data from AsyncStorage:', error);
          }
        };
    
        getCardDataFromStorage();
    
        
      }, []);

    
  
    

    const renderItem = ({ item }) => (
      <Pressable style={styles.card} onPress={() => navigation.navigate('CheckOut', { card: item })}>
        <Text style={styles.cardNumber}>{item.number}</Text>
        <View style={styles.cardBottom}>
          <View style={styles.cardDetail}>
            <Text style={styles.cardDetailTop}>CARD HOLDER</Text>
            <Text style={styles.cardDetailBottom}>{item.cardHolder}</Text>
          </View>
          <View style={styles.cardDetail}>
            <Text style={styles.cardDetailTop}>CARD SAVE</Text>
            <Text style={styles.cardDetailBottom}>{item.expiryDate}</Text>
          </View>
        </View>
      </Pressable>
    );
    

    const handleGoBackAndSaveData = () => {
      navigation.goBack();
     
    };


  return (
    <View style={styles.screen}>

      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon}  onPress={handleGoBackAndSaveData}/>
        <Text style={styles.title}>Card</Text>
      </View>

      <View style={[styles.content]}>
        <FlatList
          data={cardData}
          renderItem={renderItem}
          keyExtractor={(item) => item.number}
        />
        
        </View>

        
        
    </View>
  );
};

export default PaymentChooseScreen;


