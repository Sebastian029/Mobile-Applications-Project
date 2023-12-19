import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import styles from './style';

  export default function HomeScreen({navigation}){
    // dummy data
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
  
    const data = [
      { id: '1', img: 'sport', name: 'Sport Shoes' },
      { id: '2', img: 'socks', name: 'Socks' },
      { id: '3', img: 'elegant', name: 'Elegant Shoes' },
      { id: '4', img: 'slippers', name: 'Slippers' },
      { id: '5', img: 'winter', name: 'Winter Boots' },
      { id: '6', img: 'worker', name: 'Worker Shoes' },
    ];

      const boots =[
        {id: '1',type:'sport', img: 'sport', name:'Nike abc abc abc abc abc', price:220, discountedPrice:300, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '2',type:'elegant',  img: 'sport', name:'Adidas abc', price:190, discountedPrice:200, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '3',type:'sport',  img: 'ReebokRoyal', name:'New Balance abc', price:30, discountedPrice:50, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '4',type:'sport',  img: 'ReebokNylon', name:'NewBalance dfds', price:150, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '5',type:'sport',  img: 'NewBalanceBB550', name:'NewBalance iuo', price:150, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '6',type:'sport',  img: 'NewBalanceu574', name:'Adidas dasd', price:1510, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '7',type:'sport',  img: 'NIkeMarshmallow', name:'Adidas def', price:30, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '8',type:'sport',  img: 'AdidasSuperstar', name:'Nike def', price:99, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '9',type:'socks',  img: 'AdidasCampus', name:'NewBalance def def', price:150, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '10',type:'sport',  img: 'NikeAirZoom', name:'Nike Air Zoom', price:299, discountedPrice:499, size:40, brand:'Nike', condition:'Good', description:'Produkt bogow', review:'rev1'},
      ]

    const [newData, setNewData] = useState([]);
    const [newData2, setNewData2] = useState([]);

  useEffect(() => {
    const getRandomItems = (arr, count) => {
      const shuffled = arr.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
    const selectedItems = getRandomItems(boots, 5);
    setNewData(selectedItems);
    const selectedItems2 = getRandomItems(boots, 5);
    setNewData2(selectedItems2);
  }, []); 

    const renderInRow = ({ item }) => {
      return (
        <Pressable style={styles.productView} onPress={() => navigation.navigate('Product', { selectedItem: item})}>
          <Image source={images[item.img]} style={styles.productIcon} />
          <View style={styles.singleProductView}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}$</Text>
            <Text style={styles.productDiscountedPrice}>{item.discountedPrice}$</Text>
            </View>
        </Pressable>
      );
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