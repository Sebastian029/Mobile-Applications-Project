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
        justifyContent: 'flex-start', // Align items to the left
        paddingLeft: 30,
        paddingTop: 45,
        borderBottomWidth: 0.2,
        borderColor: 'gray',
        paddingBottom: 10,
        backgroundColor: 'white',
        alignItems:'center'
        
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
        backgroundColor:'lightgray',
        padding:10,
        borderWidth:2,
        borderColor:'navy',
        marginTop: -1
      },
      infoText:{
        color:'#223263',
        fontWeight:'500'
      }
      

        

})
export default styles;