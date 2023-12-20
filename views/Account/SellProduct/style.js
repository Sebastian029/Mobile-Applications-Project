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
    justifyContent: 'flex-start', // Align items to the left
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
  content:{
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    minHeight:'10%',
    maxHeight:'50%'
},



  
  
  })
  
  


export default styles;