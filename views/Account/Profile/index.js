
import { Text, View, Image, TextInput, FlatList, Pressable, Button} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
const images = {
  sport: require('../../../assets/exploreImages/sport.png'),}


const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
    <View style={styles.Ekran}>
    <View>
          <AntDesign name="sport" style={styles.basicIcon} onPress={()=>navigation.goBack()}/>
          <Text>Profile</Text>
     </View>
    </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

 {/* <Text>Profile</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.goBack()}
      /> */}