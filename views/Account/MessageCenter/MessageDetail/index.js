
import React, { useEffect, useState, useRef } from 'react';
import { View, Text,  StyleSheet, Pressable, FlatList,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';


  const MessageDetailScreen = ({ navigation, route }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [detail, setDetail] = useState('');
    const [sellData, setSellData] = useState('');
    useEffect(() => {
      
        if (route.params?.selectedItem) {
          const { title, type, detail, sellid } = route.params.selectedItem;
          console.log(sellid)

          setSellData(sellid);
          
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
    
      
      <View style={styles.infoBox}>
      
      <Text style={styles.infoTitle}> {title}</Text>
      <Text style={styles.infoText}> {detail}</Text>
      {type === 'Comment' && (
        <Pressable
          style={({ pressed }) => [
            styles.addCommentButton,
            {
              backgroundColor: pressed ? 'darkorange' : 'orange',
            },
          ]}
           onPress={() => navigation.navigate('CreateComment', {sellData : sellData})}
        >
          <Text style={styles.addCommentButtonText}>Add Comment</Text>
        </Pressable>
      )}
      </View>
    </View>
  );
};

export default MessageDetailScreen;
