import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DeleteAddressScreen = ({ navigation, route }) => {
  const { address, onDelete } = route.params;

  const handleDelete = () => {
    // Wywołaj funkcję onDelete przekazaną przez parametr routingu
    if (onDelete) {
      onDelete(address);
    }

    // Przejdź do poprzedniego ekranu
    navigation.goBack();
  };

  return (
    <View style={styles.Ekran}>
      <Text>Delete</Text>
      <Button title="Delete" onPress={handleDelete} />
      <Text>Delete</Text>
      <Button title="Cancel" onPress={() => navigation.goBack()} />
    </View>
  );
};

// ... reszta kodu


export default DeleteAddressScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
