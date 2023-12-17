import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SucessScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
     
      <Text>Delete</Text>
      <Button
        title="BacktoCard"
        onPress={() => navigation.navigate('Payment')}
      />
    </View>
  );
};

export default SucessScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
