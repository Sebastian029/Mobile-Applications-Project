import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    screen:{
        width:'100%',
        height:'100%',
        backgroundColor:'white'        
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
        alignItems:'center',
        
      },
   
      title: {
        width:'80%',
        marginLeft:'auto',
        marginRight:'auto',
        fontSize: 20, 
        color:'#223263',
        fontWeight:'bold',
        paddingVertical:10
      },

      infoBox:{
        width:'80%',
        marginLeft:'auto',
        marginRight:'auto',
        padding:10,
        borderRadius:5,
        borderWidth:2,
        borderColor:'lightgray',
        margin:10
      },
      infoTitle:{
        color:'#223263',
        fontWeight:'500',
        fontSize:20,
        paddingBottom:5
      },
      infoText:{
        color:'gray',
        fontWeight:'400',
        fontSize:16,
        paddingBottom:10
      },
      basicIcon:{
        fontSize:22,
        color:'gray',
      },
      addCommentButton:{
        width:'50%',
        marginRight:'auto',

        borderRadius:5,
        padding:5
      },
      addCommentButtonText:{
          color:'#223263',
          fontWeight:'500',
          textAlign:'center'
      }

      


      

        

})
export default styles;