import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import config from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';

  export default function HomeScreen({navigation}){

    const images = {
      sport: require('../../assets/exploreImages/sport.png'),
      socks: require('../../assets/exploreImages/socks.png'),
      elegant: require('../../assets/exploreImages/elegant.png'),
      slippers: require('../../assets/exploreImages/slippers.png'),
      winter: require('../../assets/exploreImages/winter.png'),
      worker: require('../../assets/exploreImages/worker.png'),
    };
  
    const data = [
      { id: '1', img: 'sport', name: 'Sport Shoes' },
      { id: '2', img: 'socks', name: 'Socks' },
      { id: '3', img: 'elegant', name: 'Elegant Shoes' },
      { id: '4', img: 'slippers', name: 'Slippers' },
      { id: '5', img: 'winter', name: 'Winter Boots' },
      { id: '6', img: 'worker', name: 'Worker Shoes' },
    ];

      

    const [newData, setNewData] = useState([]);
    const [newData2, setNewData2] = useState([]);
    const [boots, setBoots] = useState([]);
    const [userData,setUserData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const storedBootsData = await AsyncStorage.getItem('bootsData');
          if (storedBootsData) {
            const parsedBootsData = JSON.parse(storedBootsData);
  
            // Move the logic that depends on fetched data inside this block
            const getRandomItems = (arr, count) => {
              const shuffled = arr.sort(() => 0.5 - Math.random());
              return shuffled.slice(0, count);
            };
  
            const selectedItems = getRandomItems(parsedBootsData, 5);
            setNewData(selectedItems);
            const selectedItems2 = getRandomItems(parsedBootsData, 5);
            setNewData2(selectedItems2);
  
            setBoots(parsedBootsData); // Update state after setting newData and newData2
          }
        } catch (error) {
          console.error('Error reading boots data from AsyncStorage:', error);
        }
      };
  
      fetchData();

      const getUserDataFromStorage = async () => {
        try {
          const storedUserData = await AsyncStorage.getItem('userData');
          if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
          setUserData(parsedUserData);
         
          }
        } catch (error) {
          console.error('Error reading user data from AsyncStorage:', error);
        }
      };
      
      getUserDataFromStorage();

    }, []);

    const renderInRow = ({ item }) => {
  // Assuming that the logged-in user's ID is stored in a variable called 'loggedInUserId'
  

  // Check if the product's userid is not equal to the logged-in user's ID
  if (item.userid !== userData.id) {
    return (
      <Pressable style={styles.productView} onPress={() => navigation.navigate('Product', { selectedItem: item })}>
        <Image source={item.img.uri ? { uri: item.img.uri } : { uri: item.img }} style={styles.productIcon} />
        <View style={styles.singleProductView}>
          <Text style={styles.productName}>{item.title}</Text>
          <Text style={styles.productPrice}>{item.price}$</Text>
          {/* <Text style={styles.productDiscountedPrice}>{item.discountedPrice}$</Text> */}
        </View>
      </Pressable>
    );
  } else {
    // If the product's userid is equal to the logged-in user's ID, return null (don't render the product)
    return null;
  }
};

    const renderCategories = ({ item }) => {
      return (
        <View style={styles.productView}>
          <Image source={images[item.img]} style={[styles.productIcon, {width:40, height:40}]} />
          <View style={styles.singleProductView}>
            <Text style={styles.productName}>{item.name}</Text>
            </View>
        </View>
      );
    };


    return (
      
      <SafeAreaView style={styles.screen}>

        <Pressable style={styles.topBar} onPress={() =>navigation.navigate('Explore')}>
          <View style={styles.searchInput}>
            <AntDesign name="search1" style={styles.searchIcon} />
            <Text style={styles.searchText}>Search Product</Text>
          </View>
        </Pressable>


        <View style={{ alignSelf: 'flex-row' }}>
        <Text style={styles.titleText}>Bestsellers</Text>
        <FlatList
                    data={newData}
                    renderItem={renderInRow}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
      </View>

      <View style={{ alignSelf: 'flex-row' }}>
        <Text style={styles.titleText}>Category</Text>
        <FlatList
                    data={data}
                    renderItem={renderCategories}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
      </View>


      <View style={{ alignSelf: 'flex-row' }}>
        <Text style={styles.titleText}>Mega Sale</Text>
        <FlatList
                    data={newData2}
                    renderItem={renderInRow}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
      </View>



  

      </SafeAreaView>
  );
  }