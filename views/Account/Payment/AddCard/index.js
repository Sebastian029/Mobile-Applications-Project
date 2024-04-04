import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const AddCardScreen = ({ navigation, route }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const onSave = async () => {
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber)) {
      alert('Please enter a valid 16-digit card number.');
      return;
    }
  
    const cardHolderRegex = /^[a-zA-Z\s]+$/;
    if (!cardHolderRegex.test(cardHolder)) {
      alert('Please enter a valid card holder name (only letters and spaces allowed).');
      return;
    }
  
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
const currentDate = new Date();

if (!expiryDateRegex.test(expiryDate)) {
  alert('Please enter a valid expiration date (format MM/YYYY).');
  return;
}

const [inputMonth, inputYear] = expiryDate.split('/');
const expiryDateObject = new Date(Number(inputYear), Number(inputMonth) - 1, 1);

if (expiryDateObject < currentDate) {
  alert('Card expired.');
  return;
}
  
    const newCard = {
      number: cardNumber,
      cardHolder: cardHolder,
      expiryDate: expiryDate,
    };
  
    try {
      const storedCardData = await AsyncStorage.getItem('cardData');
    
      if (storedCardData) {
        const storedCards = JSON.parse(storedCardData);
    
        const duplicateCard = storedCards.find((storedCard) => storedCard.number === cardNumber);
    
        if (duplicateCard) {
          alert('Please enter a different card number than the ones stored.');
          return;
        }
      }
  
  
      route.params.onSave(newCard);
  
      navigation.navigate('SucessCard');
    } catch (error) {
      console.error('Error saving card data to AsyncStorage:', error);
      alert('An error occurred while saving card data. Please try again.');
    }
  };
  

  const formattedCardNumber = cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();

  return (
    <View style={[styles.screen]}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Add Card</Text>
      </View>

      <View style={styles.mainBox}>

        <View style={styles.cardDetail}>
          <Text style={styles.cardDetailName}>Card Number</Text>
          <TextInput
            style={styles.cardDetailInput}
           placeholder="XXXX XXXX XXXX XXXX"
        value={formattedCardNumber}
        onChangeText={(text) => {
          const cleanedText = text.replace(/\s/g, '');
          setCardNumber(cleanedText);
        }}
        keyboardType="numeric"
          />
        </View>

        <View style={styles.cardDetail}>
          <Text style={styles.cardDetailName}>Card Holder</Text>
          <TextInput
            style={styles.cardDetailInput}
            placeholder="FirstName LastName"
            value={cardHolder}
            onChangeText={(text) => setCardHolder(text)}
            textContentType="name"
            />
        </View>


        <View style={styles.cardDetail}>
          <Text style={styles.cardDetailName}>Expiration Date</Text>
          <TextInput
            style={styles.cardDetailInput}
            placeholder="MM/YYYY"
            value={expiryDate}
            onChangeText={(text) => setExpiryDate(text)}
            
          />
        </View>
      </View>

      <View style={[styles]}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? '#31263E' : '#31263E',
            },
          ]}
          onPress={onSave}
        >
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddCardScreen;

