
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SucessAddressScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
      <Text>SucessAddress</Text>
      <Button
        title="back to address"
        onPress={() => navigation.navigate('Address')}
      />
    </View>
  );
};

export default SucessAddressScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
