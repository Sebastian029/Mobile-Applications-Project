
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EditAddressScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
      <Text>EditAddress</Text>
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

export default EditAddressScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
