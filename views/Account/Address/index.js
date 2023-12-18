
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AddressScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
      <Text>Address</Text>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Delete"
        onPress={() => navigation.navigate('DeleteAddress')}
      />
      <Button
        title="Edit"
        onPress={() => navigation.navigate('EditAddress')}
      />
      <Button
        title="Add"
        onPress={() => navigation.navigate('AddAddress')}
      />
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
