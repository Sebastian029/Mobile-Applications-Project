import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DeleteScreen = ({ navigation, route }) => {
  const { card, onDelete } = route.params;

  const handleDelete = () => {
    // Wywołaj funkcję onDelete przekazaną przez parametr routingu
    if (onDelete) {
      onDelete(card);
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


export default DeleteScreen;

const styles = StyleSheet.create({
  Ekran:{
marginTop:50,

  }

})
