import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import config from '../../../config';

const PaymentScreen = ({ navigation }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Odczytaj dane z AsyncStorage po załadowaniu komponentu
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
  }, []); // Pusta zależność oznacza, że useEffect zostanie uruchomiony tylko raz po zamontowaniu komponentu

  const saveCardDataToStorage = async (cardData) => {
    try {
      await AsyncStorage.setItem('cardData', JSON.stringify(cardData));
    } catch (error) {
      console.error('Error saving card data to AsyncStorage:', error);
    }
  };

  const renderItem = ({ item }) => (
    <Pressable style={styles.card}>
      <AntDesign
        name="closecircleo"
        style={styles.exitIcon}
        onPress={() => navigation.navigate('DeleteCard', { card: item, onDelete: handleDeleteCard })}
      />
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

  const handleSaveCard = async (newCard) => {
    // Dodaj nową kartę do stanu
    setCardData([...cardData, newCard]);
    // Zapisz dane karty do AsyncStorage
    saveCardDataToStorage([...cardData, newCard]);

    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      const parsedUserData = JSON.parse(storedUserData);
      if (parsedUserData && parsedUserData.id) {
        const userId = parsedUserData.id;
        // Dodaj nową kartę do bazy danych
        await config.post(`/cardData`, { ...newCard, userid: userId });
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

      try {
        // Usuń dane z bazy danych
        await config.delete(`/cardData/${cardToDelete.id}`);

        // Aktualizuj stan i zapisz dane karty do AsyncStorage
        setCardData(updatedCardData);
        saveCardDataToStorage(updatedCardData);
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
        <FlatList data={cardData} renderItem={renderItem} keyExtractor={(item) => item.number} />
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