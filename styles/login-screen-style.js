import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    screen:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        backgroundColor:'white'
    },

    mainBox:{
        flexDirection:'column',
        gap:10,
        alignItems:'center',
       //backgroundColor:'red'
    },

    topBox:{
        //backgroundColor:'green',
        width:'100%',
        height:'25%',
        alignItems:'center',
        justifyContent:'center',
        flex:1
        
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

    logo:{
        width:70,
        height:70,
    },

    firstText:{
        color:'navy',
        fontSize:20,
        fontWeight:'bold',
        paddingTop:10,
        paddingBottom:20
    },

    secondText:{
        color:'gray',
        fontSize:15,
        paddingTop:15,
    },

    bottomBox:{
        width:'100%',
        alignItems:'center',
       // backgroundColor:"pink"
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
        fontWeight:'bold',
    },

    signText:{
        color:'orange',
        fontSize:15

    }

    
})


export default styles;