import React, { useState, useEffect } from 'react';

import { View, Text,  StyleSheet, Pressable, FlatList, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config';
import styles from './style';
import { CommonActions } from '@react-navigation/native';

  const CheckOutScreen = ({ navigation, route }) => {

    const [cardNumber, setCardNumber] = useState('');
    const [addressStreet, setAddressStreet] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const { totalPrice, itemsCount, basicPrice, shippingPrice } = route.params;
    const [totalPriceCheck, setTotalPriceCheck] = useState(totalPrice);
    const [itemsCountCheck, setItemsCountCheck] = useState(itemsCount);
    const [basicPriceCheck, setBasicPriceCheck] = useState(basicPrice);
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
  


  
    const createOrder = async () => {
      try {
        
          const storedUserData = await AsyncStorage.getItem('userData');
          const parsedUserData = JSON.parse(storedUserData);
          if (parsedUserData && parsedUserData.id) {
            const userId = parsedUserData.id;
          }
        const cartItemsString = await AsyncStorage.getItem('CartItem');
        if (cartItemsString) {
          const cartItems = JSON.parse(cartItemsString);
  
          // Utwórz strukturę zamówienia
          const orderData = {
            orderID: 'AAAA2137', // Możesz użyć odpowiedniej logiki do generowania unikalnego ID zamówienia
            date: new Date().toLocaleDateString(),
            status: 'Packing',
            items: itemsCountCheck,
            price: basicPriceCheck,
            totalPrice: totalPriceCheck,
            boot: cartItems.map((item) => ({
              idp: item.id,
              name: item.title,
              price: item.price,
              quantity: item.quantity,
              img: { uri: item.img.uri },
            })),
            address: `${addressStreet}, ${addressCity}`,
            shipping: shippingPriceCheck,
          };
          
          const existingOrdersString = await AsyncStorage.getItem('orderData');
        const existingOrders = existingOrdersString ? JSON.parse(existingOrdersString) : [];
        const updatedOrders = [...existingOrders, orderData];
        await AsyncStorage.setItem('orderData', JSON.stringify(updatedOrders));

          // Wysyłka danych zamówienia na serwer JSON
          await config.post('/orderData',{...orderData, userid: userId});
         
          
          // // Opcjonalnie: Wyczyść koszyk po zrealizowanym zamówieniu
          await AsyncStorage.removeItem('CartItem');
  
          

          
        }
      } catch (error) {
        console.log(error);
      }
    };
    const onPressCreate =()=> {
      createOrder();

      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: 'CartHome' }],
      }));
      navigation.navigate('Home');
    
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
          {/* <Text style={styles.summaryText}>Discount Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Code"
            onChangeText={handleInputChange}
            value={text}
          /> */}
        </View>
 
      
      
      <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? 'darkorange' : 'orange',
            },
          ]}
          onPress={onPressCreate} // Użyj funkcji anonimowej tutaj
       >
        <Text style={styles.buttonText}>Pay</Text>
      </Pressable>
      
    </View>
  );
};

export default CheckOutScreen;
