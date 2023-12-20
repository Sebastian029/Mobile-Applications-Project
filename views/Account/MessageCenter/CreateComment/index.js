
import React, { useEffect, useState, useRef } from 'react';
import { View, Text,  StyleSheet, Pressable, FlatList, Image, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import StarComment from './StarComment';

  const CreateCommentScreen = ({ navigation  }) => {

    
  return (
    <View style={[styles.screen]}>
    <View style={[styles.topBar]}>
    
    <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
    <Text style={styles.title}>Add Comment</Text>
      </View>
       <View style={styles.cialo} >
      

       </View>
      
      <View style={[styles]}>
      
      <Text> Please write Overall level of satisfaction with your shipping / Delivery Service</Text>
      <Text> Write Your Review</Text>
      <StarComment/>
      <TextInput
          style={styles.input}
          placeholder="Write your review here"
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

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
  },
  buttonSmall:{
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
  },
  buttonText: {
    color:'#223263',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSmallText: {
    color:'#223263',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cialo:{
   
    
  },
screen:{
  width:'100%',
  height:'100%',
  backgroundColor:'white',
  display:'flex',
  flexDirection:'column',
  
},

topBar: {
  width: '100%' ,
  flexDirection: 'row',
  justifyContent: 'flex-start', // Align items to the left
  paddingLeft: 30,
  paddingTop: 45,
  borderBottomWidth: 0.2,
  borderColor: 'gray',
  paddingBottom: 10,
  backgroundColor: 'white',
  
},
Back: {
  backgroundColor: 'blue',
  height: 40,
  justifyContent: 'center',
  
 
},
basicIcon: {
  fontSize: 22,
  color: 'gray',
},
exitIcon: {
  fontSize: 22,
  color: 'red',
},
title: {
  marginLeft: 10, // Adjust margin as needed
  
 
  fontSize: 20, // Adjust font size as needed
  color:'#223263',

  fontWeight:'bold',

},
buttonContainer: {
  flex: 1,
  justifyContent: 'center',
},



})
