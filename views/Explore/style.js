import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    screen:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },

    topBar:{
        marginTop:20,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderBottomWidth:0.2,
        borderColor:'gray',
        paddingBottom:10

    },

    searchInput:{
       backgroundColor:'white',
       width:'60%',
       height:40,
       justifyContent:'space-evenly',
       paddingLeft:40,
    },

    searchIcon:{
        fontSize:22,
        color:'orange',
        position:'absolute',
        paddingTop:5
    },

    basicIcon:{
        fontSize:22,
        color:'gray',
    },


    titleBar:{
        margin:'5%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

    },

    searchText:{
        color:'#223263',
        fontWeight:'bold',
    },

    titleText:{
        color:'#223263',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        
    },


    content:{
        flex:1,
        padding:20,
        width:'100%',
    },

    productIconView:{
        flex:1,
        paddingBottom:30,
    },

    productIcon:{
        width:100,
        height:100,
        resizeMode: 'contain'
    },

    productText:{
        paddingTop:5,
        textAlign:'center',
        color:'gray'
    },

    hintText:{
        color:'gray',
        fontWeight:'bold',
        fontSize:18,
        paddingVertical:5
    },
    notFoundView:{
        paddingTop:'10%',
        display:'flex',
        flexDirection:'column',
        gap:20,
        justifyContent:'center',
       alignItems:'center',
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

   productView:{
        paddingLeft:20,
        dispaly:'flex',
        flexDirection:'row',
        gap:20,
        paddingVertical:20
   },

   productName:{
    color:'#223263',
    fontSize:20,
    fontWeight:'bold'
   },
   
   productPrice:{
    fontSize:18,
    color:'orange',
    fontWeight:'bold'
   },

   productDiscountedPrice:{
    fontSize:15,
    color:'gray',
    textDecorationLine: 'line-through'
   },

   backIcon:{
        fontSize:25,
        color:'gray'
   },

   backBar:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        height:80,
        paddingTop:30,
        paddingLeft:20,
        gap:15,
        borderBottomWidth:1,
        borderColor:'gray'
   },


   
   backItem:{
        color:'#223263',
        fontSize:22,
        fontWeight:'bold',
        paddingLeft:10,
        paddingVertical:20,
        borderColor:'gray',
        borderWidth:0.2 
   },

   filterByText:{
    color:'#223263',
    fontSize:18,
    fontWeight:'bold',
    marginLeft:'auto',
    paddingRight:20
   },

   filterByView:{
    display:'flex',
    flexDirection:'row',
    marginLeft:'auto',
    paddingRight:20
   },
   mainIcon:{
    paddingTop:100,
    marginLeft:'auto',
    marginRight:'auto',
    fontSize:150,
    color:'darkorange'
   }


  
    

})


export default styles;