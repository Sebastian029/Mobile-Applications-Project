import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import styles from './style';

  export default function ProductScreen({navigation, route}){
    const { selectedItem} = route.params;

    return (
      
      <ScrollView style={styles.screen}>
      
        <Pressable style={styles.backBar} onPress={navigation.goBack}>
            <AntDesign name="left" style={styles.backIcon} />
            <Text style={styles.backTitleText}>Back to products</Text>
        </Pressable>

        <View>
          <Image source={selectedItem.img} style={styles.shoeImage}/>
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


        </View>

      </ScrollView>
  );
  }