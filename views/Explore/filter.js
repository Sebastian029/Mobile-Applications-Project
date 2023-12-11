import { Text, View, Image, TextInput, Pressable } from 'react-native';
import React, { useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';



import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';



  export default function FilterScreen({navigation})
  {
    

    const goBack = async (sortName) => {
      try{
        await AsyncStorage.setItem("sortName", sortName);
        console.log(sortName);
      }catch(e){
        console.log(e);
      }
    }

 

    return (
      
      
      <View style={styles.screen}>

        <View style={styles.backBar}>
           <AntDesign name="left" style={styles.backIcon} />
           <Text style={styles.titleText}>Sort By</Text>
        </View>

        <View style={{width:'100%', padding:10}}>
          <Pressable onPress={()=>goBack('PriceLowest')}>
            <Text style={styles.backItem}>Price: lowest first</Text>
          </Pressable>
          
          <Pressable onPress={() => goBack('PriceHighest')}>
            <Text style={styles.backItem}>Price: highest first</Text>
          </Pressable>
        </View>


      </View>

  );
  }