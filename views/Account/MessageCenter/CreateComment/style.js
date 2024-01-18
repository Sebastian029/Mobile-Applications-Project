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
    fontSize: 18, // Adjust font size as needed
    color:'#223263',
    fontWeight:'bold',
  },

  content:{
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    flex:0.95,
  },
  header: {
    fontSize: 18,
    color:'#223263',
    fontWeight:'bold',
    paddingVertical:5
  },
  input:{
    minHeight:'30%',
    maxHeight:'60%',
    textAlignVertical:'top',
    padding:5,
    borderWidth:1,
    borderColor:'lightgray',
    borderRadius:5
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
    borderBottom:10
  },
  buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'#223263',
    letterSpacing:1
  },

  
  
  })
  
  


export default styles;