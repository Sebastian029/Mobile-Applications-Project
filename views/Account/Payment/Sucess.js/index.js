import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SucessCardScreen = ({ navigation }) => {
  return (
    <View style={[styles.Ekran]}>
     
      <Text>Sucess</Text>
      <Button
        title="BacktoCard"
        onPress={() => navigation.navigate('Payment')}
      />
    </View>
  );
};

export default SucessCardScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
