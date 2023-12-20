
import React, { useEffect, useState, useRef } from 'react';
import { View, Text,  StyleSheet, Pressable, FlatList,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


  const MessageDetailScreen = ({ navigation, route }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [detail, setDetail] = useState('');
   
    useEffect(() => {
      
        if (route.params?.selectedItem) {
          const { title, type, detail } = route.params.selectedItem;
          setTitle(title);
          setType(type);
          setDetail(detail);
        }
      }, [route.params?.selectedItem]);

  return (
    <View style={[styles.screen]}>
    <View style={[styles.topBar]}>
    
    <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
    <Text style={styles.title}>MySale</Text>
      </View>
       <View style={styles.cialo} >
      

       </View>
      
      <View style={[styles]}>
      
      <Text> {title}</Text>
      <Text> {detail}</Text>
      {type === 'Comment' && (
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? 'darkorange' : 'orange',
            },
          ]}
           onPress={() => navigation.navigate('CreateComment')}
        >
          <Text style={styles.buttonText}>Add Comment</Text>
        </Pressable>
      )}
    </View>
    </View>
  );
};

export default MessageDetailScreen;

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
