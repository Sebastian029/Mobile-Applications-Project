import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const StarComment = () => {
  const [filledStars, setFilledStars] = useState(0);

  const handleStarPress = (index) => {
    setFilledStars((prevStars) => (index === prevStars ? index - 1 : index));
  };

  const renderStars = () => {
    const totalStars = 5;
    const starIcons = [];

    for (let i = 0; i < totalStars; i++) {
      starIcons.push(
        <Pressable key={i} onPress={() => handleStarPress(i + 1)}>
          <AntDesign
            name={i < filledStars ? 'star' : 'staro'}
            color={i < filledStars ? 'orange' : 'gray'}
            size={24}
            style={{paddingBottom:10}}
          />
        </Pressable>
      );
    }

    return starIcons;
  };

  return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
};

export default StarComment;
