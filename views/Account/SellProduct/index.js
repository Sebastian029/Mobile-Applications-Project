import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SellProductScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
      <Text>Sellproduct</Text>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Add"
        onPress={() => navigation.navigate('My Sale')}
      />
    </View>
  );
};

export default SellProductScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
