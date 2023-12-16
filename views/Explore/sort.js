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
        navigation.goBack();
      }catch(e){
        console.log(e);
      }
    }

 

    return (
      
      
      <View style={styles.screen}>

        <Pressable style={styles.backBar} onPress={navigation.goBack}>
           <AntDesign name="left" style={styles.backIcon} />
           <Text style={styles.titleText}>Sort By</Text>
        </Pressable>

        <View style={{width:'100%', padding:10}}>
        <Pressable onPress={()=>goBack('Alphabetical')}>
            <Text style={styles.backItem}>Alphabetical</Text>
          </Pressable>

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