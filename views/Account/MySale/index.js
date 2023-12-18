import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MySaleScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
      <Text>My Sale</Text>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Edit"
        onPress={() => navigation.goBack('EditMySale')}
      />
      <Button
        title="Delete"
        onPress={() => navigation.navigate('DeleteMySale')}
      />
      <Button
        title="Sell Product"
        onPress={() => navigation.navigate('Sell Product')}
      />
    </View>
  );
};

export default MySaleScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
