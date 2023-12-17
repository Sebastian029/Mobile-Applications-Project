import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OrderScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
      <Text>Profile</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
