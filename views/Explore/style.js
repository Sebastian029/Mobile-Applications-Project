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
        width:'60%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

    },

    titleText:{
        color:'#223263',
        fontSize:25,
        fontWeight:'bold',
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
    },

    productText:{
        paddingTop:5,
        textAlign:'center',
        color:'gray'
    }
    

})


export default styles;