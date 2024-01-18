import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  screen:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    display:'flex',
    flexDirection:'column',
    
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
    
  },

  basicIcon: {
    fontSize: 22,
    color: 'gray',
  },
  title: {
    marginLeft: 10, 
    fontSize: 20, 
    color:'#223263',
    fontWeight:'bold',
  },
  
  content:{
    width:'80%',
    maxHeight:'75%',
    marginLeft:'auto',
    marginRight:'auto'
  },

  header:{
    fontSize:16,
    fontWeight:'bold',
    color:'#223263',
    paddingTop:10
  },
  input:{
    color:'gray',
    paddingLeft:10
  },



  button:{
    width:'80%',
    height:70,
    backgroundColor:'#F99C1C',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    marginLeft:'auto',
    marginRight:'auto',
    marginVertical:10
},
buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'#223263',
    letterSpacing:1

},
  
  
  })
  
  

export default styles;