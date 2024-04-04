import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

  screen:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    display:'flex',
    flexDirection:'column',
    paddingTop:15

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

  title: {
    marginLeft: 10, 
    fontSize: 20, 
    color:'#44355B',
    fontWeight:'bold',
  },

  topText:{
    fontSize:20,
    fontWeight:'bold',
    color:'#44355B',
    padding:20
  },
  content:{
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    minHeight:'10%',
    maxHeight:'50%'
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
    fontSize:20,
    fontWeight:'bold',
    maxWidth:'90%'
  },
  productPrice:{
    fontSize:18,
    color:'#44355B',
    fontWeight:'bold'
  },
  productDiscountedPrice:{
    fontSize:15,
    color:'gray',
    textDecorationLine: 'line-through'
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
    color:'#223263',
    letterSpacing:1

  },

  pieces:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginLeft:'auto',


  },
  basicIcon:{
    fontSize:18,
    color:'gray',
    padding:5,
    fontWeight:'bold'
  },
  itemTop:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    maxWidth:'100%'


  },
  deleteIcon:{
    fontSize:25,
    color:'gray',
    padding:5,
  },


  summary:{
    paddingVertical: 10,
    borderColor: "#9098b1",
    borderWidth: 1,
    borderRadius: 3,
    margin: 10

  },
  specification:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto'
  },
  spec:{
    color:'#44355B',
    fontSize:14,
    paddingVertical:5
  },

  specAdr:{
    color:'#44355B',
    fontSize:14,
    textAlign: "right"
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