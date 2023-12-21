
import React, { useEffect, useState, useRef } from 'react';
import { View, Text,  StyleSheet, Pressable, FlatList, Image, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import StarComment from './StarComment';

import styles from './style'


  const CreateCommentScreen = ({ navigation  }) => {

    
  return (
    <View style={[styles.screen]}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
        <Text style={styles.title}>Add Comment</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.header}>Please write Overall level of satisfaction with your shipping / Delivery Service</Text>
        <StarComment/>
        <Text style={styles.header}> Write Your Review</Text>
        <TextInput
            style={styles.input}
            placeholder="Write your review here"
            multiline={true}
          />
      </View>

      <View style={[styles]}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? 'darkorange' : 'orange',
            },
            ]}
            onPress={() => navigation.navigate('Message Center')}
          >
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateCommentScreen;