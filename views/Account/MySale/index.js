import React, { useState } from 'react';

import { View, Text,  StyleSheet, Pressable, FlatList,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


  const MySaleScreen = ({ navigation }) => {
    
    const [mySaleData, setMySaleData] = useState([
      {
        title: "AirPro",
        category: "Dominik",
        brand: "Nike",
        size: "43",
        condition: "good",
        description:"Super Buty w zimie zimno, w lecie grzeją",
        price:"140",
        parcel:"Big",
        pieces:"3",
        img: require('../../../assets/productImages/AdidasSuperstar.png'),
      },
      {
        title: "AirPro",
        category: "Dominik",
        brand: "Nike",
        size: "43",
        condition: "good",
        description:"Super Buty w zimie zimno, w lecie grzeją",
        price:"140",
        parcel:"Big",
        pieces:"3",
        img: require('../../../assets/productImages/NewBalanceBB550.png'),
      },
    ]);
  
    const renderItem = ({ item }) => (
      <Pressable onPress={() => navigation.navigate('ProductSale', { selectedItem: item})}>
        <Image source={item.img} style={{ width: 40, height: 40 }} />
        <Text> {item.title}</Text>
        <Text>{item.price}</Text>
        <AntDesign name="delete" style={styles.basicIcon}  onPress={() => navigation.navigate('DeleteMySale', { mySale: item, onDelete: handleDeleteMySale })}/>
        <AntDesign name="edit" style={styles.basicIcon}  onPress={() =>
    navigation.navigate('EditMySale', {
      mySale: item,
      onSave: (editedMySale) => handleEditMySale(editedMySale, item),
    })}/>
      </Pressable>
    );
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
      const index = mySaleData.findIndex((mySale) => mySale.number === mySaleToDelete.number);
  
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
       <View style={styles.cialo} >
       <FlatList
  data={mySaleData}
  renderItem={renderItem}
  keyExtractor={(item, index) => index.toString()} 
/>

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

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
  },
  buttonSmall:{
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
  },
  buttonText: {
    color:'#223263',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSmallText: {
    color:'#223263',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cialo:{
   
    
  },
screen:{
  width:'100%',
  height:'100%',
  backgroundColor:'white',
  display:'flex',
  flexDirection:'column',
  
},

topBar: {
  width: '100%' ,
  flexDirection: 'row',
  justifyContent: 'flex-start', // Align items to the left
  paddingLeft: 30,
  paddingTop: 45,
  borderBottomWidth: 0.2,
  borderColor: 'gray',
  paddingBottom: 10,
  backgroundColor: 'white',
  
},
Back: {
  backgroundColor: 'blue',
  height: 40,
  justifyContent: 'center',
  
 
},
basicIcon: {
  fontSize: 22,
  color: 'gray',
},
exitIcon: {
  fontSize: 22,
  color: 'red',
},
title: {
  marginLeft: 10, // Adjust margin as needed
  
 
  fontSize: 20, // Adjust font size as needed
  color:'#223263',

  fontWeight:'bold',

},
buttonContainer: {
  flex: 1,
  justifyContent: 'center',
},



})
