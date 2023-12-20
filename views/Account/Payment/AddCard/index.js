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
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Holder"
          value={cardHolder}
          onChangeText={(text) => setCardHolder(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date"
          value={expiryDate}
          onChangeText={(text) => setExpiryDate(text)}
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
          onPress={onSave}
        >
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddCardScreen;

