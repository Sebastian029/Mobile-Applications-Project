import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  screen:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    display:'flex',
    flexDirection:'column',
  },
  productView:{
    paddingLeft:10,
    dispaly:'flex',
    flexDirection:'row',
    paddingVertical:10,
    width:'100%'
},
singleProductView:{
    flex:1,
    paddingLeft:20,
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
  topBar: {
    width: '100%' ,
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    paddingLeft: 20,
    paddingRight:20,
    paddingTop: 60,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    paddingBottom: 10,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'space-between',
  },
  itemTop:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    maxWidth:'100%'
    
    
},

  basicIcon: {
    fontSize: 22,
    color: 'gray',
  },
  title: {
    marginLeft: 10, 
    fontSize: 25, 
    color:'#44355B',
    fontWeight:'bold',
  },

  content:{
    height:'85%',
    paddingBottom:20,
    
  },

  card:{
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    padding:20,
    margin:10,
    borderWidth:1,
    borderColor:'lightgray'
  },
  heading:{
    color:'#44355B',
    fontWeight:'bold',
    paddingBottom:5,
    fontSize:18
  },
  cardInformation:{
    color:'gray'
  },

  buttonBox:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingTop:10
  },
  buttonSmall:{
    width:'35%',
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  buttonSmallText:{
    color:'white',
    fontWeight:'bold',
    fontSize:16
  },

  button:{
    width:'80%',
    height:70,
    backgroundColor:'#31263E',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    marginLeft:'auto',
    marginRight:'auto',
    borderBottom:10,
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