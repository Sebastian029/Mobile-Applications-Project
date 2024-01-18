import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from './style';

  export default function ProductScreen({navigation, route}){
    const { selectedItem} = route.params;

    const reviewsHandler = () => {
      select = selectedItem.userid;
  navigation.navigate('Reviews', {  select});
  };


const AddToCart = async () => {
  try {
    const existingItemsString = await AsyncStorage.getItem('CartItem');
    const existingItems = existingItemsString ? JSON.parse(existingItemsString) : [];

    const itemExistsIndex = existingItems.findIndex(item => item.id === selectedItem.id);

    if (itemExistsIndex !== -1) {
    } else {
      const newItemWithQuantity = { ...selectedItem, quantity: 1 };
      existingItems.push(newItemWithQuantity);
    }

    await AsyncStorage.setItem('CartItem', JSON.stringify(existingItems));
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }


  navigation.dispatch(CommonActions.reset({
    index: 0,
    routes: [{ name: 'Home' }],
  }));
  navigation.navigate('Cart');
};

    return (
      
      <ScrollView style={styles.screen}>
      
        <Pressable style={styles.backBar} onPress={navigation.goBack}>
            <AntDesign name="left" style={styles.backIcon} />
            <Text style={styles.backTitleText}>Back to products</Text>
        </Pressable>

        <View>
          <Image source={{uri: selectedItem.img.uri}} style={styles.shoeImage}/>
        </View>
        
        <View style={styles.specifications}>
          <Text style={styles.shoeName}>{selectedItem.titlee}</Text>
          <Text style={styles.shoePrice}>${selectedItem.price}</Text>
          <Text style={styles.title}>Specification</Text>

          <View style={styles.specification}>
            <Text style={styles.specLeft}>Size</Text>
            <Text style={styles.specRight}>{selectedItem.size}</Text>
          </View>

          <View style={styles.specification}>
           <Text style={styles.specLeft}>Brand</Text>
           <Text style={styles.specRight}>{selectedItem.brand}</Text>
          </View>

          <View style={styles.specification}>
            <Text style={styles.specLeft}>Condition</Text>
            <Text style={styles.specRight}>{selectedItem.condition}</Text>
          </View>

          <View style={styles.specification}>
            <Text style={styles.specLeft}>Description</Text>
            <Text style={styles.specRight}>{selectedItem.description}</Text>
          </View>


          <Pressable onPress={() => reviewsHandler()}>
            <Text style={styles.productReview}>See user reviews</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => AddToCart()}>
            <Text style={styles.buttonText}>Add To Cart</Text>
          </Pressable>


        </View>

      </ScrollView>
  );
  }