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
    marginLeft: 10, // Adjust margin as needed
    fontSize: 20, // Adjust font size as needed
    color:'#223263',
    fontWeight:'bold',
  },

  mainBox:{
    width:'90%',
    minHeight:'70%',
    marginLeft:'auto',
    marginRight:'auto',
    paddingTop:20,
  },
  cardDetail:{
    fontSize:18,
    fontWeight:'bold',
    color:'#223263',
    paddingVertical:10
  },
  cardDetailName:{
    fontSize:18,
    fontWeight:'bold',
    color:'#223263',
  },
  cardDetailInput:{
    fontSize:15,
    padding:5
  },

  button:{
    width:'90%',
    height:70,
    backgroundColor:'#F99C1C',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    marginLeft:'auto',
    marginRight:'auto',
  },
  buttonText:{
      fontSize:18,
      fontWeight:'bold',
      color:'#223263',
      letterSpacing:1

  },

  
  
  })
  
  


export default styles;