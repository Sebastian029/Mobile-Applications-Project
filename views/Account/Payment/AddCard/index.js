import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AddCardScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
      <Text>AddCard</Text>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Save"
        onPress={() => navigation.goBack()}
      />
      
    </View>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
