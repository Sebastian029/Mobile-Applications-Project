import React, { useState, useEffect } from 'react';

import { View, Text,  StyleSheet, Pressable, FlatList, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './style';

  const CheckOutScreen = ({ navigation, route }) => {

    const [cardNumber, setCardNumber] = useState('');
    const [addressStreet, setAddressStreet] = useState('');
    const [addressCity, setAddressCity] = useState('');


    const { totalPrice, itemsCount, basicPrice, totalDiscountedPrice, shippingPrice } = route.params;
    const [totalPriceCheck, setTotalPriceCheck] = useState(totalPrice);
    const [itemsCountCheck, setItemsCountCheck] = useState(itemsCount);
    const [basicPriceCheck, setBasicPriceCheck] = useState(basicPrice);
    const [totalDiscountedPriceCheck, setTotalDiscountedPriceCheck] = useState(totalDiscountedPrice);
    const [shippingPriceCheck, setShippingPriceCheck] = useState(shippingPrice);

    useEffect(() => {
        
        if (route.params?.card) {
          const { number } = route.params.card;
          setCardNumber(number);
         
        }
      }, [route.params?.card]);

      useEffect(() => {
        
        if (route.params?.address) {
          const { street, city } = route.params.address;
          setAddressStreet(street);
          setAddressCity(city);
        }
      }, [route.params?.address]);

    const [text, setText] = useState('');

    const handleInputChange = (inputText) => {
        setText(inputText);
      };
   




  return (
    <View style={[styles.screen]}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
        <Text style={styles.title}>Check Out</Text>
      </View>
        <View>
            <Text style={styles.summaryText}>Summary</Text>
        </View>
      
      <View style={styles.summary}>
            <View style={styles.frame}>
                <View style={styles.specification}>
                    <Text style={styles.spec}>Items ({itemsCountCheck})</Text>
                    <Text style={styles.spec}>{basicPriceCheck}$</Text>
                 </View>

                 <View style={styles.specification}>
                    <Text style={styles.spec}>Shipping</Text>
                    <Text style={styles.spec}>{shippingPriceCheck}$</Text>
                 </View>

                 <View style={styles.specification}>
                    <Text style={styles.spec}>Total Discounts</Text>
                    <Text style={styles.spec}>{totalDiscountedPriceCheck}$</Text>
                 </View>

                 <View style={styles.specification}>
                    <Text style={[styles.spec, {fontWeight:'bold'}]}>Total price</Text>
                    <Text style={[styles.spec, {fontWeight:'bold'}]}>{totalPriceCheck}$</Text>
                 </View>
            </View>
            <View>
                <Text style={styles.summaryText}>Ship to</Text>
            </View>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                {
                  backgroundColor: pressed ? 'grey' : 'lightgrey',
                },
              ]}
              onPress={() => navigation.navigate('PaymentChoose')}
           >
            {cardNumber? <Text style={styles.buttonText}>{cardNumber}</Text>:<Text style={styles.buttonText}>Choose Card</Text>}

          </Pressable>
          <Pressable
              style={({ pressed }) => [
                styles.button,
                {
                  backgroundColor: pressed ? 'grey' : 'lightgrey',
                },
              ]}
              onPress={() => navigation.navigate('ChooseAddress')}
              >
              {addressCity&&addressStreet? <Text style={styles.buttonText}>{addressCity}{addressStreet}</Text>:<Text style={styles.buttonText}>Choose Address</Text>}


          </Pressable>
          <Text style={styles.summaryText}>Discount Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Code"
            onChangeText={handleInputChange}
            value={text}
          />
        </View>
 
      
      
      <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? 'darkorange' : 'orange',
            },
          ]}
          onPress={() => navigation.navigate('Order')} // Użyj funkcji anonimowej tutaj
       >
        <Text style={styles.buttonText}>Pay</Text>
      </Pressable>
      
    </View>
  );
};

export default CheckOutScreen;
