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
    color:'#44355B',
    fontSize:20,
    fontWeight:'bold',
    },

    shoeImage:{
        marginLeft:'auto',
        marginRight:'auto',
        width:'100%',
        height:250,
        resizeMode: 'contain',
    },
    specifications:{
            padding:10
    },
    shoeName:{
        color:'#44355B',
        fontSize:25,
        fontWeight:'bold',
    },
    shoePrice:{
        color:'#44355B',
        fontSize:22,
        fontWeight:'bold',
        paddingLeft:20
    },
    title:{
        color:'#44355B',
        fontSize:16,
        fontWeight:'bold',
        paddingVertical:10,
        paddingLeft:20
        
    },
    specification:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'95%',
        
    },
    specLeft:{
        color:'#44355B',
        fontSize:14,
        fontWeight:'bold',
        paddingVertical:5,
        paddingLeft:20
    },
    specRight:{
        color:'gray',
        fontSize:14,
        paddingVertical:5,
    },
    button:{
        margin:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:60,
        backgroundColor:'#31263E',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:5,
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        letterSpacing:1,
    }

})


export default styles;