import React, { useState } from 'react';

import { View, Text,  StyleSheet, Pressable, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';





 


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
    ]);
  
    const renderItem = ({ item }) => (
      <Pressable >
        <AntDesign name="CloseOutlined" style={styles.exitIcon}  onPress={() => navigation.navigate('DeleteCard', { card: item, onDelete: handleDeleteCard })}/>
        <Text>{item.number}</Text>
        <Text>CARD HOLDER</Text>
        <Text>{item.cardHolder}</Text>
        <Text>CARD SAVE</Text>
        <Text>{item.expiryDate}</Text>
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
       <View style={styles.cialo} >
       <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.number}
      />

       </View>
      
      <View style={[styles]}>
      
      
      <Pressable
  style={({ pressed }) => [
    styles.button,
    {
      backgroundColor: pressed ? 'darkorange' : 'orange',
    },
  ]}
   onPress={() => navigation.navigate('AddCard', { onSave: handleSaveCard })} // Użyj funkcji anonimowej tutaj
>
  <Text style={styles.buttonText}>Add</Text>
</Pressable>
    </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
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
