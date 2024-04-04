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
    color:'#44355B',
    fontWeight:'bold',
  },

  order: {
    borderColor: "#ebf0ff",
    borderWidth: 1,
    marginTop:10,
    marginHorizontal:15,
    borderRadius: 6,
    padding: 5
  },
  textPole:{
    marginLeft:20,
    marginRight:20,
    marginTop:10,
    
  },
  text:{
    color:'#44355B',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign:'justify',

  },

  row:{
    
    display:'flex',
    flexDirection:'row',
    gap:15,
    marginVertical:5,
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    alignItems:'start'
  },
  leftText:{

    color:'#44355B',
    fontSize: 16,
    fontWeight: 'bold',
    flex:2
  },
  rightText:{
    textAlign:'right',
    marginLeft:'auto',
    color:'gray',
    paddingRight:10,
    flex:2,
    height: '100%'
  }

})




export default styles;