import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

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

  const handleSaveCard = (newCard) => {
    // Dodaj nową kartę do stanu
    setCardData([...cardData, newCard]);
  };

  const handleDeleteCard = (cardToDelete) => {
    // Znajdź indeks karty do usunięcia
    const index = cardData.findIndex((card) => card.number === cardToDelete.number);

    if (index !== -1) {
      // Utwórz kopię stanu i usuń kartę
      const updatedCardData = [...cardData];
      updatedCardData.splice(index, 1);

      // Uaktualnij stan
      setCardData(updatedCardData);
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