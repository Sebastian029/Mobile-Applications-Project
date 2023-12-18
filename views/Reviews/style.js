import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    screen:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        paddingTop:10,
        paddingHorizontal:10
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
    

    username:{
        color:'#223263',
        fontSize:18,
        fontWeight:'bold',
    },
    opinion:{
        color:'gray',
        fontSize:14,
        paddingTop:5
    },
    noReviewsBox:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:20,
        width:'100%',
        height:'80%'
    },
    noReviewsText:{
        color:'#223263',
        fontSize:25,
        fontWeight:'bold',
    }

})


export default styles;