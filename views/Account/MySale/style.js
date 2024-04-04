import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
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
    justifyContent: 'flex-start', 
    paddingLeft: 30,
    paddingTop: 45,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    paddingBottom: 10,
    backgroundColor: 'white',
    
  },

  basicIcon: {
    fontSize: 22,
    color: 'gray',
  },
  title: {
    marginLeft: 10, 
    fontSize: 20, 
    color:'#44355B',
    fontWeight:'bold',
  },

  content:{
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    height:'75%',
    paddingBottom:10
},


productView:{
    paddingLeft:20,
    dispaly:'flex',
    flexDirection:'row',
    gap:10,
    paddingVertical:10,
    width:'100%'
},
singleProductView:{
    flex:1,
},
  productIcon:{
  width:100,
  height:100,
  resizeMode: 'contain'
},
productName:{
  color:'#44355B',
  fontSize:18,
  fontWeight:'bold',
  maxWidth:'60%'
},
productPrice:{
  fontSize:18,
  color:'#44355B',
  fontWeight:'bold'
},
basicIcon:{
  fontSize:25,
  color:'gray',
  padding:5,
},
itemTop:{
  display:'flex',
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems:'center',
  maxWidth:'100%',
},
iconL:{
  justifyContent: 'space-between',
  flexDirection:'row',
},

button:{
  width:'80%',
  height:70,
  backgroundColor:'#F99C1C',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:8,
  marginLeft:'auto',
  marginRight:'auto',
  borderBottom:10
},
buttonText:{
  fontSize:18,
  fontWeight:'bold',
  color:'white',
  letterSpacing:1
},
noItemsText:{
  color:'#44355B',
  fontSize:22,
  paddingVertical:5,
  textAlign:'center',
  marginTop:10
}

  
  
  })
  
  


export default styles;