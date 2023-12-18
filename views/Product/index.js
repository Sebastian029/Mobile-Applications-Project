import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import styles from './style';

  export default function ProductScreen({navigation, route}){
    const { selectedItem} = route.params;


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


    const reviews =[
      {id: 1, name:'Nike Air Zoom', review: [
                                  { id: 1, user:'Sebastian Iwan', stars: 5, content: 'Jeszcze gdy chodziłem do podstawówki, to był tam taki Paweł, i ja jechałem na rowerze, i go spotkałem, i potem jeszcze pojechałem do biedronki na lody, i po drodze do domu wtedy jeszcze, już do domu pojechałem.' },
                                  { id: 2, user:'Dominik Jaroszek', stars: 4,  content: 'Zamówiłem buty, które wyglądały na pół podróby, pół nie podróby a pół nie buty. Sprzedawca w bonusie dorzucił cukier wanilinowy, jak pisze w dołączonej kartce, abym poczuł się choć na chwilę jakbym miał cukier.' },
                                  { id: 3, user:'Blazej Jakubczyk', stars: 3,  content: 'Zamówiłem buty, które wyglądały na pół podróby, pół nie podróby a pół nie buty. Sprzedawca w bonusie dorzucił cukier wanilinowy, jak pisze w dołączonej kartce, abym poczuł się choć na chwilę jakbym miał cukier..' },
                                  { id: 4, user:'Jakub Jordan', stars: 2,  content: 'Zagadkowe połączenie nieodgadnionych butów i słodkiego dodatku było jak tajemniczy prezent, który sprawił, że choć na chwilę, zanurzyłem się w świat absurdu, gdzie wszystko było możliwe - nawet czucie się jak cukier.' }]
                                 },

       {id: 2, name:'New Balance abc', review: [
                                { id: 1, user:'Sebastian Iwan', stars: 5, content: 'This shoe is great!111' },
                                { id: 2, user:'Dominik Jaroszek', stars: 4,  content: 'Very comfortable and stylish.222' },
                                { id: 3, user:'Blazej Jakubczyk', stars: 3,  content: 'I love the quality.333' },
                                { id: 4, user:'Jakub Jordan', stars: 2,  content: 'I love the quality.444' }]
                                 },
      
      
    ]

    const reviewsHandler = () => {
      const selectedName = selectedItem.name; 
      const selectedProduct = reviews.find(product => product.name === selectedName);
    
      if (selectedProduct) {
        const filteredReviews = selectedProduct.review.map(review => ({
          id: review.id,
          user: review.user,
          stars: review.stars,
          content: review.content
        }));
        navigation.navigate('Reviews', { filteredReviews });
      } else {
        navigation.navigate('Reviews', { filteredReviews: [] }); 
      }
    };


    return (
      
      <ScrollView style={styles.screen}>
      
        <Pressable style={styles.backBar} onPress={navigation.goBack}>
            <AntDesign name="left" style={styles.backIcon} />
            <Text style={styles.backTitleText}>Back to products</Text>
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


          <Pressable onPress={() => reviewsHandler()}>
            <Text style={styles.productReview}>See product reviews</Text>
          </Pressable>
        </View>

      </ScrollView>
  );
  }