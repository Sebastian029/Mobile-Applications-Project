import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    screen:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        paddingTop:10
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
        paddingTop:20,
        paddingLeft:20,
        gap:25,
   },
   backTitleText:{
    color:'#223263',
    fontSize:20,
    fontWeight:'bold',
    },

    shoeImage:{
        marginLeft:'auto',
        marginRight:'auto',
        width:'100%',
        resizeMode: 'contain',
    },
    specifications:{
            padding:10
    },
    shoeName:{
        color:'#223263',
        fontSize:25,
        fontWeight:'bold',
    },
    shoePrice:{
        color:'orange',
        fontSize:22,
        fontWeight:'bold',
    },
    title:{
        color:'#223263',
        fontSize:16,
        fontWeight:'bold',
        paddingTop:10,
        paddingBottom:20
    },
    specification:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%'
    },
    specLeft:{
        color:'#223263',
        fontSize:14,
        fontWeight:'bold',
        paddingVertical:5
    },
    specRight:{
        color:'gray',
        fontSize:14,
        paddingVertical:5,
    },
    productReview:{
        color:'orange',
        fontSize:22,
        fontWeight:'bold',
        marginLeft:'auto',
        marginRight:'auto',
        paddingTop:20
    }

})


export default styles;