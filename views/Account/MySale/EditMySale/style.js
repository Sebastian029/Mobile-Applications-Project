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

  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    borderRadius:30,

  },
  profileImagePlaceholder: {
    width: 200,
    height: 140,
    overflow: 'hidden',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
  },
  cameraPlaceholder: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius:25,
  },
  content:{
    width:'100%',
    marginLeft:'auto',
    marginRight:'auto',
    maxHeight:'55%',
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
  color:'#223263',
  fontSize: 16,
  fontWeight: 'bold',
  flex:1
},
dataText:{
  textAlign:'right',
  marginLeft:'auto',
  color:'gray',
  paddingRight:10,
  flex:2,
  height: '100%'
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
},
buttonText:{
  fontSize:18,
  fontWeight:'bold',
  color:'#223263',
  letterSpacing:1

},



  
  
  })
  
  


export default styles;