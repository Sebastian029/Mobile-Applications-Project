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
    paddingLeft: 30,
    paddingTop: 45,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    paddingBottom: 10,
    backgroundColor: 'white',
    
  },

  content:{
    height:'75%',
    paddingBottom:20
  },

  basicIcon: {
    fontSize: 25,
    color: 'gray',
  },
  title: {
    marginLeft: 10, 
    fontSize: 20, 
    color:'#223263',
    fontWeight:'bold',
  },

  card:{
    width:'80%',
    backgroundColor:'#F99C1C',
    marginLeft:'auto',
    marginRight:'auto',
    marginVertical:20,
    borderRadius:5,
    borderWidth:2,
    borderColor:'navy'
  },
  exitIcon:{
    fontSize:20,
    color:'red',
    marginLeft:'auto',
    padding:10
  },
  cardNumber:{
    textAlign:'center',
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    letterSpacing:1,
    
    paddingBottom:20
  },
  cardBottom:{
    display:'flex',
    flexDirection:'row',
    gap:30,
    padding:10
  },
  cardDetailTop:{
    marginLeft:'auto',
    color:'white',
    opacity:0.8

  },
  cardDetailBottom:{
    marginLeft:'auto',
    color:'white',
    fontWeight:'bold'
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
    borderBottom:101
  },
  buttonText:{
      fontSize:18,
      fontWeight:'bold',
      color:'#223263',
      letterSpacing:1

  },
  noItemsText:{
    color:'orange',
    fontSize:22,
    paddingVertical:5,
    textAlign:'center',
    marginTop:10
  }
  

  
  
  })
  
  


export default styles;