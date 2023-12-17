import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MessageCenterScreen = ({ navigation }) => {
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

export default MessageCenterScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
