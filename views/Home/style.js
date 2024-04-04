import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    screen:{
        marginTop :40,
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


    titleText:{
        color:'#44355B',
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:10,
        paddingTop:10
    },

    productView:{
        margin:5,
        padding:10,
        borderWidth:1,
        borderColor:'#44355B',
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
        color:'#44355B',
        fontSize:14,
        fontWeight:'bold',
    },
    productPrice:{
        fontSize:15,
        color:'#44355B',
        fontWeight:'bold'
    },
    

})


export default styles;