import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
      <Text>Payment</Text>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Add"
        onPress={() => navigation.navigate('Add Card')}
      />
      <Button
        title="Delete"
        onPress={() => navigation.navigate('Delete')}
      />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
