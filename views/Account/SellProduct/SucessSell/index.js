import React, { useState, useEffect } from 'react';

import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native';

const SucessSellScreen = ({ navigation }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handlePress = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000); 
    navigation.navigate('My Sale');
  };

  return (
    <View style={styles.notFoundView}>
    <Image source={require('../../../../assets/exploreImages/success.png')}/>
    <Text style={styles.titleText}>Success!</Text>
    <View>
<Text style={styles.upperText}>You successfully added a new your sell</Text>
</View>
   <Pressable style={styles.backButton} 
   onPress={handlePress}
   disabled={isButtonDisabled}>
      <Text style={styles.buttonText}>Back to your My Sale</Text>
   </Pressable>
 </View>
  );
};

export default SucessSellScreen;

const styles = StyleSheet.create({
  screen:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
},
notFoundView:{
  paddingTop:'10%',
  display:'flex',
  flexDirection:'column',
  gap:15,
  justifyContent:'center',
 alignItems:'center',
 marginTop:'40%'
},
backButton:{
   
  width:'80%',
  height:60,
  backgroundColor:'#31263E',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:8,
  marginLeft:'auto',
  marginRight:'auto',
  borderBottom:10

},

buttonText:{
	fontSize:16,
	color:'white',
	fontWeight:'bold',
	letterSpacing:1
},
upperText:{
	fontSize:12,
	color:'gray',
	textAlign:'center'
},
titleText:{
  fontSize:25,
  color:'#44355B',
  fontWeight:'bold',
}

})