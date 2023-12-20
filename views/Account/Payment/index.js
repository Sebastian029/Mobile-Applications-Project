import React, { useState } from 'react';

import { View, Text,  StyleSheet, Pressable, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';



import styles from './style';

 


  const PaymentScreen = ({ navigation }) => {
    const [cardData, setCardData] = useState([
      {
        number: "5000 0000 1111 4000",
        cardHolder: "Dominik Jaroszek",
        expiryDate: "01/2024",
      },
      {
        number: "9000 0030 1111 4020",
        cardHolder: "Pawel Zaporozy",
        expiryDate: "01/2025",
      },
      {
        number: "1234 0030 1111 4020",
        cardHolder: "Pawel Bialy",
        expiryDate: "01/2025",
      },
      
    ]);
  
    const renderItem = ({ item }) => (
      <Pressable style={styles.card}>
        <AntDesign name="closecircleo" style={styles.exitIcon}  onPress={() => navigation.navigate('DeleteCard', { card: item, onDelete: handleDeleteCard })}/>
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
      // Add the new card to the state
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




  return (
    <View style={[styles.screen]}>

      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
        <Text style={styles.title}>Card</Text>
      </View>

      <View style={{maxHeight:'70%'}}>
       <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.number}
       />
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


