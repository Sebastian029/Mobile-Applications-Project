import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DeleteScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
      <Text>Delete</Text>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default DeleteScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
