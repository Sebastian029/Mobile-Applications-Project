import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import config from '../../../config';
import { useFocusEffect } from '@react-navigation/native';

const PaymentScreen = ({ navigation }) => {
  const [cardData, setCardData] = useState([]);



  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedCardData = await AsyncStorage.getItem('cardData');
        if (storedCardData) {
          setCardData(JSON.parse(storedCardData));
        }
      } catch (error) {
        console.error('Error reading card data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []); 

  const saveCardDataToStorage = async (cardData) => {
    try {
      await AsyncStorage.setItem('cardData', JSON.stringify(cardData));
    } catch (error) {
      console.error('Error saving card data to AsyncStorage:', error);
    }
  };

  const renderItem = ({ item }) => {
    const formattedCardNumber = item.number.replace(/(\d{4})/g, '$1 ').trim();
  
    return (
      <Pressable style={styles.card}>
        <AntDesign
          name="closecircleo"
          style={styles.exitIcon}
          onPress={() => navigation.navigate('DeleteCard', { card: item, onDelete: () => handleDeleteCard(item) })}
        />
        <Text style={styles.cardNumber}>{formattedCardNumber}</Text>
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
  };

  const handleSaveCard = async (newCard) => {
    
    

    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      const parsedUserData = JSON.parse(storedUserData);
      if (parsedUserData && parsedUserData.id) {
        const userId = parsedUserData.id;
    await config.post(`/cardData`, { ...newCard, userid: userId });
    const responseData = await config.get('/cardData');
    const getResponseCardData =  responseData.data;
    
    const filteredMySaleData = getResponseCardData.filter(item => item.userid === userId);
    setCardData(filteredMySaleData);
    
    saveCardDataToStorage(filteredMySaleData);
      } else {
        console.error("Error reading user data from AsyncStorage");
      }
    } catch (error) {
      console.error('Error updating data in the database:', error);
    }
  };

  const handleDeleteCard = async (cardToDelete) => {
    const index = cardData.findIndex((card) => card.number === cardToDelete.number);
  
    if (index !== -1) {
      const updatedCardData = [...cardData];
      updatedCardData.splice(index, 1);
  
      console.log('Deleting card with number:', cardToDelete.number);
      console.log('Deleting card with id:', cardToDelete.id);
  
      try {
        console.log('DELETE request URL:', `/cardData/${cardToDelete.id}`);
  
        await config.delete(`/cardData/${cardToDelete.id}`);
  
        setCardData(updatedCardData);
        saveCardDataToStorage(updatedCardData);
  
        console.log('Card deleted successfully.');
      } catch (error) {
        console.error('Error deleting data from the database:', error);
      }
    }
  };
  
  

  const handleGoBackAndSaveData = () => {
    navigation.goBack();
    saveCardDataToStorage(cardData);
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon} onPress={handleGoBackAndSaveData} />
        <Text style={styles.title}>Card</Text>
      </View>
      <View style={[styles.content]}>
      {cardData.length > 0 ? (
        <FlatList data={cardData} renderItem={renderItem} keyExtractor={(item) => item.number} />
        ) : (
          <Text style={styles.noItemsText}>Card data is empty</Text>
        )}
        
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? 'darkorange' : 'orange',
          },
        ]}
        onPress={() => navigation.navigate('AddCard', { onSave: handleSaveCard })}
      >
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
};

export default PaymentScreen;