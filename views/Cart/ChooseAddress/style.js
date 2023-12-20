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
    alignItems:'center'
    
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
    height:'75%',
    paddingBottom:20,
    
  },

  card:{
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    padding:20,
    margin:10,
    borderWidth:1,
    borderColor:'lightgray'
  },
  heading:{
    color:'#223263',
    fontWeight:'bold',
    paddingBottom:5,
    fontSize:18
  },
  cardInformation:{
    color:'gray'
  },

  buttonBox:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingTop:10
  },
  buttonSmall:{
    width:'35%',
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  buttonSmallText:{
    color:'#223263',
    fontWeight:'bold',
    fontSize:16
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
    borderBottom:10,
},
buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'#223263',
    letterSpacing:1

},


  
  
  })
  
  


export default styles;