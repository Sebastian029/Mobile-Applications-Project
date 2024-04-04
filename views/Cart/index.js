import { Button, StyleSheet, Text, View, Image, Pressable, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';

export default function HomeScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [basicPrice, setBasicPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadItemsFromStorage = async () => {
    try {
      const serializedItems = await AsyncStorage.getItem('CartItem');
      if (serializedItems !== null) {
        const storedItems = JSON.parse(serializedItems);
        
        const filtered = Array.from(new Set(storedItems))
        setItems(filtered);
        countTotal(filtered);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadItemsFromStorage();
    };

    fetchData();
  }, []);

  const countTotal = (items) => {
    let count = 0;
    let tmpPrice = 0;
    let shipping = 10;
    let basic = 0;

    items.forEach((item) => {
      count += item.quantity;
      basic += item.quantity * item.price;
      tmpPrice += item.price * item.quantity;
    });

    if (tmpPrice > 100 || count <= 0) shipping = 0;

    setBasicPrice(basic);
    setShippingPrice(shipping);
    setItemsCount(count);
    setTotalPrice(basic + shipping);
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.productView}
        onPress={() => navigation.navigate('Product', { selectedItem: item })}
      >
        <Image source={{ uri: item.img.uri }} style={styles.productIcon} />
        <View style={styles.singleProductView}>
          <View style={styles.itemTop}>
            <Text style={styles.productName}>{item.title}</Text>
            <AntDesign
              name="delete"
              style={styles.deleteIcon}
              onPress={() => deleteItem(item)}
            />
          </View>
          <Text style={styles.productPrice}>{item.price}$</Text>

        </View>
      </Pressable>
    );
  };

  const deleteItem = async (itemToDelete) => {
    try {
      const serializedItems = await AsyncStorage.getItem('CartItem');
      if (serializedItems !== null) {
        const storedItems = JSON.parse(serializedItems);

        const updatedItems = storedItems.filter((item) => item.id !== itemToDelete.id);

        await AsyncStorage.setItem('CartItem', JSON.stringify(updatedItems));

        setItems(updatedItems);
        countTotal(updatedItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeQuantity = (item, num) => {
    if (num > 0 || (item.quantity > 1 && num < 0)) {
      setItems((prevItems) =>
        prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + num } : i))
      );

      updateQuantityInAsyncStorage(item.id, item.quantity + num);
    }
  };

  const updateQuantityInAsyncStorage = async (itemId, newQuantity) => {
    try {
      const serializedItems = await AsyncStorage.getItem('CartItem');
      if (serializedItems !== null) {
        const storedItems = JSON.parse(serializedItems);

        const updatedItems = storedItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        );

        await AsyncStorage.setItem('CartItem', JSON.stringify(updatedItems));

        countTotal(updatedItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveItemsToStorage = async () => {
    try {
      await AsyncStorage.setItem('CartItem', JSON.stringify(items));
      countTotal(items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckout = async () => {
    if (totalPrice !== 0) {
      navigation.navigate('CheckOut', {
        totalPrice,
        itemsCount,
        basicPrice,
        shippingPrice,
      });
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.topText}> Your Cart</Text>
      </View>

      <View style={styles.content}>
        {items.length > 0 ? (
          <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} />
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
          <Text style={[styles.spec, { fontWeight: 'bold' }]}>Total price</Text>
          <Text style={[styles.spec, { fontWeight: 'bold' }]}>{totalPrice}$</Text>
        </View>
      </View>

      <Pressable onPress={handleCheckout} style={styles.button}>  
        <Text style={styles.buttonText}>Check out</Text>
      </Pressable>
    </SafeAreaView>
  );
}
