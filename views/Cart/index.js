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


  const saveItemsToStorage = async () => {
    try {
      await AsyncStorage.setItem('storedItems', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving items to AsyncStorage:', error);
    }
  };

  const loadItemsFromStorage = async () => {
    try {
      const serializedItems = await AsyncStorage.getItem('storedItems');
      if (serializedItems !== null) {
        setItems(JSON.parse(serializedItems));
      }
    } catch (error) {
      console.error('Error loading items from AsyncStorage:', error);
    }
  };


  const getItem = async () => {
    try {
      const serializedItem = await AsyncStorage.getItem('CartItem');
      if (serializedItem !== null) {
        const newItem = JSON.parse(serializedItem);
        const itemExists = items.some(existingItem => existingItem.id === newItem.id);
  
        if (!itemExists) {
          // Dynamically adding 'quantity' property with a default value to newItem
          const newItemWithQuantity = { ...newItem, quantity: 1 };
  
          setItems(prevItems => [...prevItems, newItemWithQuantity]);
          console.log('Item added to array with default quantity');
        } else {
          console.log('Item already exists in array');
        }
  
        if (itemExists) {
          await AsyncStorage.removeItem('CartItem');
          console.log('Item removed from AsyncStorage');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadItemsFromStorage();
    return () => {
      saveItemsToStorage(items);
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getItem();
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
          <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                  />
        </View>

        <View style={styles.summary}>
          <Text>Items</Text>
          <Text>Items</Text>
          <Text>Items</Text>
        </View>

        <Pressable onPress={console.log('cart')} style={styles.button}>
                  <Text style={styles.buttonText}>Check out</Text>
         </Pressable>

      
      </SafeAreaView>
  );
  }