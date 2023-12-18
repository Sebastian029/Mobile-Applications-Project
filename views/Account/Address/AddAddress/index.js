
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AddAddressScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
      <Text>AddAddress</Text>
      <Button
        title="back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="save"
        onPress={() => navigation.navigate('SucessAddress')}
      />
    </View>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
