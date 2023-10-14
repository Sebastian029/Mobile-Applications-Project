import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    screen:{
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    },

    topBox:{
        backgroundColor:'lightgreen ',
        width:'100%',
        height:'25%',
        flex:4,
        alignItems:'center',
        justifyContent:'center'
        
    },

    logoBox:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center', 
        width:100,
        height:100,
        backgroundColor:'orange',
        borderRadius:35,
        padding:10
    },

    firstText:{
        color:'navy',
        fontSize:20,
        fontWeight:'bold',
        paddingTop:15
    },

    secondText:{
        color:'gray',
        fontSize:15,
        paddingTop:15,
        paddingBottom:5
    },


    logo:{
        width:70,
        height:70,
    },


    mainBox:{
       // backgroundColor:'yellow',
        alignItems:'center',
        flex:3
        
    },

    inputBox:{
        backgroundColor:'white',
        width:'80%',
        height:40,
        margin:5,
        justifyContent:'center',
       // alignItems:'center',
       paddingLeft:40,
        borderWidth:1,
        borderRadius:5,
        borderColor:'lightgray'

    },

    textInput:{
      fontSize:18,
      color:'gray'
    },

    icon:{
      fontSize:22,
      color:'gray',
      position:'absolute',
      paddingLeft:10

    },


    button:{
        backgroundColor:'orange',
        width:'80%',
        height:50,
        margin:10,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        
        
    },

    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },

    signText:{
        color:'orange',
        fontSize:15

    }
   


  

    
   
})


export default styles;