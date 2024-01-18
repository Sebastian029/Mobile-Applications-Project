import React from 'react';
import { Text, View, Image, TextInput, FlatList, Pressable, StyleSheet} from 'react-native';

const DeleteCardScreen = ({ navigation, route }) => {
  const { card, onDelete } = route.params;

  const handleDelete = () => {
    console.log(card);
    if (onDelete) {
      onDelete(card);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.notFoundView}>
      <Image source={require('../../../../assets/exploreImages/redCross.png')}/>
      <Text style={styles.titleText}>Warning!</Text>
      <View>
	<Text style={styles.upperText}>Are you sure wanna delete card?</Text>
  <Text style={styles.upperText}>Changes will be irreversible</Text>
  </View>
      <Pressable style={[styles.backButton, { backgroundColor: '#E22A2A' }]} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
     </Pressable>
     <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Cancel</Text>
     </Pressable>
   </View>
  )
};



export default DeleteCardScreen;

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
  height:'15%',
  backgroundColor:'#F99C1C',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:8
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
  color:'#223263',
  fontWeight:'bold',
}

})