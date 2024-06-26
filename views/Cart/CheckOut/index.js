import React, { useState, useEffect } from 'react';
import uuid from 'react-native-uuid';

import { View, Text,  StyleSheet, Pressable, FlatList, TextInput, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config';
import styles from './style';
import { CommonActions } from '@react-navigation/native';
const generateID= () =>{
  const tmpId = uuid.v4();
  return tmpId.substring(0, 8);
}

  const CheckOutScreen = ({ navigation, route }) => {
    const [generate, setGenerate] = useState();
    const [cardNumber, setCardNumber] = useState('');
    const [addressStreet, setAddressStreet] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const { totalPrice, itemsCount, basicPrice, shippingPrice } = route.params;
    const [totalPriceCheck, setTotalPriceCheck] = useState(totalPrice);
    const [itemsCountCheck, setItemsCountCheck] = useState(itemsCount);
    const [basicPriceCheck, setBasicPriceCheck] = useState(basicPrice);
    const [shippingPriceCheck, setShippingPriceCheck] = useState(shippingPrice);
    const [orderID, setOrderID] = useState(generateID());    
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

      if(!cardNumber){
          Alert.alert('Error', 'Please select a card.');
          return;
      }

      if(!addressCity || !addressStreet){
        Alert.alert('Error', 'Please select an address.');
        return;
      }

      const cartItemsString = await AsyncStorage.getItem('CartItem');
      console.log('Cart Items:', JSON.parse(cartItemsString));

      const storedUserData = await AsyncStorage.getItem('userData');
      console.log('Cart Items:', JSON.parse(cartItemsString));
      const parsedUserData = JSON.parse(storedUserData);
      let userId = parsedUserData.id;

      
      if (cartItemsString) {
        const cartItems = JSON.parse(cartItemsString);
        
        const orderData = {
          orderID: orderID, 
          date: new Date().toLocaleDateString(),
          status: 'Packing',
          items: itemsCountCheck,
          price: basicPriceCheck,
          totalPrice: totalPriceCheck,
          boot: cartItems.map((item) => ({
            idp: item.id,
            name: item.title,
            price: item.price,
            img: { uri: item.img.uri },
          })),
          address: `${addressStreet}, ${addressCity}`,
          shipping: shippingPriceCheck,
        };

        const existingOrdersString = await AsyncStorage.getItem('orderData');
        const existingOrders = existingOrdersString ? JSON.parse(existingOrdersString) : [];
        const updatedOrders = [...existingOrders, orderData];
        await AsyncStorage.setItem('orderData', JSON.stringify(updatedOrders));

        const owners = new Set(cartItems.map((item) => item.userid));
        console.log('tutaj1');
        for (const ownerId of owners) {
          const message = {
            title: 'Add comment to your purhase ' + orderID ,
            detail: 'Thank you for your shopping. Comment on the product you purchased.',
            userid: userId,
            type: 'Comment',
          };
          console.log('tutaj2');
          await config.post('/message', { ...message, sellid: ownerId });
        }
        console.log('tutaj3');
        await config.post('/orderData',{...orderData, userid: userId});
        


        deleteBought();
        await AsyncStorage.removeItem('CartItem');
          navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'CartHome' }],
          }));
          navigation.navigate('CartHome');
          }
          Alert.alert('Success', 'Sucesfully bought boots.')
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBought = async () => {
    try {
      const cartItemsString = await AsyncStorage.getItem('CartItem');
     
  
      if (cartItemsString ) {
        const storedBootsData = await AsyncStorage.getItem('bootsData');
        const cartItems = JSON.parse(cartItemsString);
        const updatedBootsData = JSON.parse(storedBootsData);
  
        const updatedBootsDataFiltered = updatedBootsData.filter(bootItem => {
          return !cartItems.some(cartItem => cartItem.id === bootItem.id);
        });
        await AsyncStorage.setItem('bootsData', JSON.stringify(updatedBootsDataFiltered));
  
        const owners = new Set(cartItems.map(item => item.id));
  
        for (const ownerId of owners) {
          await config.delete(`/boots/${ownerId}`);
        }
  
      } else {
        console.log('No items found in the cart or bootsData.');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  
  

  

    const onPressCreate = async ()  => {
      createOrder();
      
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
              {addressCity&&addressStreet? <Text style={styles.buttonText}>{addressCity} {addressStreet} {}</Text>:<Text style={styles.buttonText}>Choose Address</Text>}


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
          onPress={onPressCreate} 
       >
        <Text style={styles.buttonText}>Pay</Text>
      </Pressable>
      
    </View>
  );
};

export default CheckOutScreen;
