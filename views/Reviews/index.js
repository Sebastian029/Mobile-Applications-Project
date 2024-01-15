import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';
import config from '../../config'
import StarRating from '../../components/StarRating';
const ReviewsScreen = ({ navigation, route }) => {
  const { select } = route.params;
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    // Fetch reviews data from JSON server
    const fetchData = async () => {
      try {
        const responseOrder = await config.get(`/reviews`);
        const getResponseOrder = responseOrder.data;
       // console.log(getResponseOrder);
        console.log(select)
        // Filtruj recenzje na podstawie userid
        const filteredReviews = getResponseOrder.filter(item => item.userid === select);
        
        setReviewsData(filteredReviews);
        console.log(filteredReviews);
      } catch (error) {
        console.error('Error fetching reviews data:', error);
      }
    };
  
    fetchData();
  }, [select.userid])

  

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.username}>{item.user}</Text>
        {/* Użyj komponentu StarRating do wyświetlania gwiazdek */}
        <StarRating stars={item.stars} />
        <Text style={styles.opinion}>{item.content}</Text>
      </View>
    );
  };

  const renderReviews = () => {
    if (!reviewsData) {
      return (
        <View style={styles.noReviewsBox}>
          <Text style={styles.noReviewsText}>No reviews available</Text>
          <AntDesign name="frowno" color={'orange'} size={45} />
        </View>
      );
    } else {
      return (
        <FlatList
          data={reviewsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
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
};

export default ReviewsScreen;
