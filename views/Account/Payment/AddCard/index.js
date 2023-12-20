import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './style';

const AddCardScreen = ({ navigation, route }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const onSave = () => {
    // Add your logic to save the card data
    const newCard = {
      number: cardNumber,
      cardHolder: cardHolder,
      expiryDate: expiryDate,
    };

    // Pass the new card data to the onSave callback
    route.params.onSave(newCard);

    // Navigate back
    //navigation.goBack();
    navigation.navigate('SucessCard');
  };

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
            placeholder="_ _ _ _ _  _ _ _ _ _  _ _ _ _ _  _ _ _ _ _"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
          />
        </View>

        <View style={styles.cardDetail}>
          <Text style={styles.cardDetailName}>Card Holder</Text>
          <TextInput
            style={styles.cardDetailInput}
            placeholder="Name LastName"
            value={cardHolder}
            onChangeText={(text) => setCardHolder(text)}
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
              backgroundColor: pressed ? 'darkorange' : 'orange',
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

