import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const StarRating = ({ stars }) => {
  const renderStars = () => {
    const totalStars = 5;
    const filledStars = stars;

    const starIcons = [];



    
    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        starIcons.push(
            <AntDesign name="star" color={'orange'} size={20}/>
        );
      } else {
        starIcons.push(
            <AntDesign name="staro" color={'gray'} size={20}/>
        );
      }
    }

    return starIcons;
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {renderStars()}
    </View>
  );
};

export default StarRating;
