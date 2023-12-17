import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import styles from './style';

  export default function ProductScreen({navigation, route}){
    const { selectedItem, data } = route.params;


    const images = {
      sport: require('../../assets/exploreImages/sport.png'),
      socks: require('../../assets/exploreImages/socks.png'),
      elegant: require('../../assets/exploreImages/elegant.png'),
      slippers: require('../../assets/exploreImages/slippers.png'),
      winter: require('../../assets/exploreImages/winter.png'),
      worker: require('../../assets/exploreImages/worker.png'),
      NikeAirZoom: require('../../assets/productImages/NikeAirZoom.png'),
    };

    return (
      
      <ScrollView style={styles.screen}>
      
      <Pressable style={styles.backBar} onPress={navigation.goBack}>
           <AntDesign name="left" style={styles.backIcon} />
           <Text style={styles.backTitleText}>Back</Text>
           
        </Pressable>

        <View>
          <Image source={images[selectedItem.img]} style={styles.shoeImage}/>
        </View>

        <View style={styles.specifications}>
          <Text style={styles.shoeName}>{selectedItem.name}</Text>
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


          <Text style={styles.productReview}>See product reviews</Text>
        </View>

      </ScrollView>
  );
  }