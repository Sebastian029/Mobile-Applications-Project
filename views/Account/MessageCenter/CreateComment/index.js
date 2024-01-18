import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarComment from './StarComment';

import styles from './style';
import config from '../../../../config';

const CreateCommentScreen = ({ navigation, route }) => {
  const [userData, setUserData] = useState([]);
  const [star, setStar] = useState(0);
  const [content, setContent] = useState('');
 const  [sellId, setSellId] = useState('');

  useEffect(() => {
    if (route.params?.sellData) {
      const { sellData } = route.params;
      console.log(sellData);
      setSellId(sellData);
    }
    
    const getUserDataFromStorage = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      } catch (error) {
        console.error('Error reading user data from AsyncStorage:', error);
      }
    };
    getUserDataFromStorage();

    
  }, [route.params?.sellData]);

  const createcomment = async () => {
    const userName = userData.firstName;
    const userLast = userData.lastName;
    const userId = userData.id;
    
    const reviewData = {
      user: `${userName} ${userLast}`,
      stars: star,
      content: content,
      userid: sellId,
    };
    
    await config.post('/reviews', reviewData);
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Add Comment</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.header}>Please write Overall level of satisfaction with your shipping / Delivery Service</Text>
        <StarComment onStarChange={(value) => setStar(value)} />
        <Text style={styles.header}> Write Your Review</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your review here"
          multiline={true}
          onChangeText={(text) => setContent(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? 'darkorange' : 'orange',
            },
          ]}
          onPress={createcomment}
        >
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateCommentScreen;
