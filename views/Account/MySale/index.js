import React, { useState } from 'react';

import { View, Text,  StyleSheet, Pressable, FlatList,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './style';

  const MySaleScreen = ({ navigation }) => {
    
    const [mySaleData, setMySaleData] = useState([
      {
        title: "AirPro",
        category: "Dominik",
        brand: "Nike",
        size: "43",
        condition: "good",
        description:"Super Buty w zimie zimno, w lecie grzejąaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        price:"140",
        parcel:"Big",
        pieces:"3",
        img: require('../../../assets/productImages/AdidasSuperstar.png'),
      },
      {
        title: "AirProooooooooooooooooooooooooooo",
        category: "Dominik",
        brand: "Nike",
        size: "43",
        condition: "good",
        description:"Super Buty w zimie zimno, w lecie grzeją",
        price:"140",
        parcel:"Big",
        pieces:"3",
        img: require('../../../assets/productImages/NewBalanceBB550.png'),
      }
      
    ]);
  
    const renderItem = ({ item }) => {
      return (
        <Pressable  style={styles.productView} onPress={() => navigation.navigate('ProductSale', { selectedItem: item})}>
          <Image source={item.img} style={styles.productIcon} />
          <View style={styles.singleProductView}>
            <View style={styles.itemTop}>
              <Text style={styles.productName}>{item.brand} {item.title}</Text>
              <View>
                <AntDesign name="edit" style={styles.basicIcon}  onPress={() =>
                  navigation.navigate('EditMySale', {
                    mySale: item,
                    onSave: (editedMySale) => handleEditMySale(editedMySale, item),
                  })}/>
              </View>
              <AntDesign name="delete" style={styles.basicIcon} onPress={() => navigation.navigate('DeleteMySale', { mySale: item, onDelete: handleDeleteMySale })}/>
            </View>
            <Text style={styles.productPrice}>{item.price}$</Text>
            </View>
        </Pressable>
      );
    };



    /*
    const renderItem = ({ item }) => (
      <Pressable  style={styles.productView} onPress={() => navigation.navigate('ProductSale', { selectedItem: item})}>
        <View style={styles.singleProductView}>
          <Image source={item.img} style={styles.productIcon} />
          <Text>{item.brand} {item.title}</Text>
          <Text>{item.price}</Text>
          <AntDesign name="edit" style={styles.deleteIcon}  onPress={() =>
              navigation.navigate('EditMySale', {
                mySale: item,
                onSave: (editedMySale) => handleEditMySale(editedMySale, item),
              })}/>
          <AntDesign name="delete" style={styles.deleteIcon} onPress={() => navigation.navigate('DeleteMySale', { mySale: item, onDelete: handleDeleteMySale })}/>
        
        </View>
      </Pressable>
    );
              */
    /*
    const renderItem = ({ item }) => {
      return (
      
    
          <View style={styles.singleProductView}>
            <View style={styles.itemTop}>
              <Text style={styles.productName}>{item.brand} {item.title}</Text>
              <AntDesign name="delete" style={styles.deleteIcon} onPress={() => deleteItem(item)}/>
            </View>
            <Text style={styles.productPrice}>{item.price}$</Text>
            </View>
   
      );
    };
    */


    const handleSaveMySale = (newMySale) => {
      // Add the new mySale to the state
      setMySaleData([...mySaleData, newMySale]);
    };

    const handleEditMySale = (editedMySale, originalMySale) => {
      // Find the index of the original mySale in the array
      const index = mySaleData.findIndex((mySale) => mySale === originalMySale);
  
      if (index !== -1) {
        // Create a copy of the mySale data and replace the original mySale with the edited one
        const updatedMySaleData = [...mySaleData];
        updatedMySaleData[index] = editedMySale;
  
        // Update the state
        setMySaleData(updatedMySaleData);
      }
    }

    const handleDeleteMySale = (mySaleToDelete) => {
      // Znajdź indeks karty do usunięcia
      const index = mySaleData.findIndex((mySale) => mySale.title === mySaleToDelete.title);
  
      if (index !== -1) {
        // Utwórz kopię stanu i usuń kartę
        const updatedMySaleData = [...mySaleData];
        updatedMySaleData.splice(index, 1);
  
        // Uaktualnij stan
        setMySaleData(updatedMySaleData);
      }
    };




  return (
    <View style={[styles.screen]}>
    <View style={[styles.topBar]}>
    
    <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
    <Text style={styles.title}>MySale</Text>
      </View>
  
       <View style={styles.content}>
          {mySaleData.length > 0 ? (
           <FlatList
                    data={mySaleData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    />
          ) : (
            <Text style={styles.noItemsText}>Cart is empty</Text>
          )}
        </View>

      
      <View style={[styles]}>
      
      
      <Pressable
  style={({ pressed }) => [
    styles.button,
    {
      backgroundColor: pressed ? 'darkorange' : 'orange',
    },
  ]}
   onPress={() => navigation.navigate('Sell Product', { onSave: handleSaveMySale })} // Użyj funkcji anonimowej tutaj
>
  <Text style={styles.buttonText}>Sell Product</Text>
</Pressable>
    </View>
    </View>
  );
};

export default MySaleScreen;