import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import StarRating from '../../components/StarRating';

import styles from './style';

  export default function ReviewsScreen({navigation, route}){
    const { filteredReviews } = route.params;

    const renderItem = ({ item }) => {
      return (
        <View style={{ marginBottom: 10}}>
          <Text style={styles.username}>{item.user}</Text>
          <StarRating stars={item.stars}/>
          <Text style={styles.opinion}>{item.content}</Text>
        </View>
      );
    };

    const renderReviews = () => {
      if (filteredReviews.length === 0) {
        return (
          <View style={styles.noReviewsBox}> 
            <Text style={styles.noReviewsText}>No reviews available</Text>
            <AntDesign name="frowno" color={'orange'} size={45}/>
          </View>
        );
      } else {
        return (
          <FlatList
            data={filteredReviews}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ padding: 15 }}
          />
        );
      }
    };

    return (  
      <View style={styles.screen}>

        <Pressable style={styles.backBar} onPress={navigation.goBack}>
            <AntDesign name="left" style={styles.backIcon} />
            <Text style={styles.backTitleText}>Back</Text>
        </Pressable>

      
        {renderReviews()}

      </View>
  );
  }