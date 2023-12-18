import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    screen:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
    },

    topBar:{
        marginTop:45,
        width:'100%',
        alignItems:'center',
        borderBottomWidth:0.2,
        borderColor:'gray',
        paddingBottom:10,
        paddingLeft:10

    },
    searchInput:{
       backgroundColor:'white',
       width:'90%',
       height:40,
       justifyContent:'space-evenly',
       paddingLeft:40,
    },
    searchIcon:{
        fontSize:22,
        color:'orange',
        position:'absolute',
    },
    searchText:{
        color:'gray',
        fontWeight:'bold',
    },


    titleText:{
        color:'#223263',
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:10,
        paddingTop:10
    },

    productView:{
        margin:5,
        padding:5,
        borderWidth:1,
        borderColor:'orange',
        borderRadius:5,
        maxWidth:130,
        maxHeight:180,
        overflow:'hidden'
    },
    productIcon:{
        width:100,
        height:100,
        marginLeft:'auto',
        marginRight:'auto',
        resizeMode: 'contain'
    },
    productName:{
        color:'#223263',
        fontSize:14,
        fontWeight:'bold',
    },
    productPrice:{
        fontSize:12,
        color:'orange',
        fontWeight:'bold'
    },
    productDiscountedPrice:{
        fontSize:10,
        color:'gray',
        textDecorationLine: 'line-through'
    },

})


export default styles;