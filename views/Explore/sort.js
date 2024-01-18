import { Text, View, Image, TextInput, Pressable } from 'react-native';
import React, { useEffect, useState, useContext} from 'react';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { ExploreContext } from './context';



import styles from './style';




  export default function FilterScreen({navigation}){

    const { sortName, setSortName } = useContext(ExploreContext);

    const goBack =(sortNameParam) => {
        setSortName(sortNameParam);
        navigation.goBack();
      
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