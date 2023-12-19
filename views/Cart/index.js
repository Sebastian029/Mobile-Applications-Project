import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

  export default function HomeScreen({navigation}){
    const images = {
      sport: require('../../assets/exploreImages/sport.png'),
      socks: require('../../assets/exploreImages/socks.png'),
      elegant: require('../../assets/exploreImages/elegant.png'),
      slippers: require('../../assets/exploreImages/slippers.png'),
      winter: require('../../assets/exploreImages/winter.png'),
      worker: require('../../assets/exploreImages/worker.png'),
      NikeAirZoom: require('../../assets/productImages/NikeAirZoom.png'),
      AdidasCampus: require('../../assets/productImages/AdidasCampus.png'),
      AdidasSuperstar: require('../../assets/productImages/AdidasSuperstar.png'),
      NewBalanceBB550: require('../../assets/productImages/NewBalanceBB550.png'),
      NewBalanceu574: require('../../assets/productImages/NewBalanceu574.png'),
      NIkeMarshmallow: require('../../assets/productImages/NIkeMarshmallow.png'),
      ReebokNylon: require('../../assets/productImages/ReebokNylon.png'),
      ReebokRoyal: require('../../assets/productImages/ReebokRoyal.png'),
    };

    const [items, setItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(0);
    const [basicPrice, setBasicPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(0);

  const saveItemsToStorage = async () => {
    try {
      await AsyncStorage.setItem('storedItems', JSON.stringify(items));
    } catch (e) {
      console.log(e);
    }
  };

  const loadItemsFromStorage = async () => {
    try {
      const serializedItems = await AsyncStorage.getItem('storedItems');
      if (serializedItems !== null) {
        setItems(JSON.parse(serializedItems));
      }
    } catch (e) {
      console.log(e);
    }
  };


  const getItem = async () => {
    try {
      const serializedItem = await AsyncStorage.getItem('CartItem');
      if (serializedItem !== null) {
        const newItem = JSON.parse(serializedItem);
        const itemExists = items.some(existingItem => existingItem.id === newItem.id);
        if (!itemExists) {
          const newItemWithQuantity = { ...newItem, quantity: 1 };
          setItems(prevItems => [...prevItems, newItemWithQuantity]);

        } 
        if (itemExists) {
          await AsyncStorage.removeItem('CartItem');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadItemsFromStorage();
    countTotal();
    return () => {
      saveItemsToStorage(items);
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getItem();
      countTotal();
    },[items])
  );

  const changeQuantity = (item, num) => {
    if(num>0 || (item.quantity>1 && num <0)){
      setItems(prevItems =>
        prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + num } : i
        )
      );
    }
  };

  const deleteItem = (itemToDelete) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemToDelete.id));
  };

  

  const countTotal = () =>{
    let count = 0;
    let tmpPrice = 0;
    let shipping = 10;
    let tmpDisc = 0;
    let basic = 0;
    
    
    items.forEach(item =>{
      count += item.quantity;
      basic += (item.discountedPrice  * item.quantity);

      tmpPrice += (item.price * item.quantity);
      tmpDisc += ((item.discountedPrice - item.price) * item.quantity);
      

    })
    if(tmpPrice>200 || count <=0)
      shipping=0;

    setBasicPrice(basic);
    setShippingPrice(shipping);
    setItemsCount(count);
    setTotalDiscountedPrice(tmpDisc);
    setTotalPrice(basic-tmpDisc + shipping);
  }
  

    const renderItem = ({ item }) => {
      return (
        <View style={styles.productView}>
          <Image source={images[item.img]} style={styles.productIcon}/>
          <View style={styles.singleProductView}>
            <View style={styles.itemTop}>
              <Text style={styles.productName}>{item.name}</Text>
              <AntDesign name="delete" style={styles.deleteIcon} onPress={() => deleteItem(item)}/>
            </View>
            <Text style={styles.productPrice}>{item.price}$</Text>
            <Text style={styles.productDiscountedPrice}>{item.discountedPrice}$</Text>
            <View style={styles.pieces}>
              <AntDesign name="minus" style={styles.basicIcon} onPress={()=>changeQuantity(item, -1)}/>
              <Text style={styles.basicIcon}>{item.quantity}</Text>
              <AntDesign name="plus" style={styles.basicIcon} onPress={()=>changeQuantity(item, 1)}/>
            </View>
            </View>
        </View>
      );
    };
  

    return (
      
      <SafeAreaView style={styles.screen}>
        <View>
           <Text style={styles.topText}> Your Cart</Text>
        </View>

        <View style={styles.content}>
          {items.length > 0 ? (
          <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    />
          ) : (
            <Text style={styles.noItemsText}>Cart is empty</Text>
          )}
        </View>

        <View style={styles.summary}>
            <View style={styles.specification}>
                <Text style={styles.spec}>Items ({itemsCount})</Text>
                <Text style={styles.spec}>{basicPrice}$</Text>
             </View>

             <View style={styles.specification}>
                <Text style={styles.spec}>Shipping</Text>
                <Text style={styles.spec}>{shippingPrice}$</Text>
             </View>

             <View style={styles.specification}>
                <Text style={styles.spec}>Total Discounts</Text>
                <Text style={styles.spec}>{totalDiscountedPrice}$</Text>
             </View>

             <View style={styles.specification}>
                <Text style={[styles.spec, {fontWeight:'bold'}]}>Total price</Text>
                <Text style={[styles.spec, {fontWeight:'bold'}]}>{totalPrice}$</Text>
             </View>
        </View>

        <Pressable onPress={console.log('cart')} style={styles.button}>
                  <Text style={styles.buttonText}>Check out</Text>
         </Pressable>

      
      </SafeAreaView>
  );
  }