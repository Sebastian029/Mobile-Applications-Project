
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DeleteAddressScreen = ({ navigation }) => {
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

export default DeleteAddressScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
