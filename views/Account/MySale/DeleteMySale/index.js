
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DeleteMySaleScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
      <Text>DeleteAddress</Text>
      <Button
        title="Cancel"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Delete"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default DeleteMySaleScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
