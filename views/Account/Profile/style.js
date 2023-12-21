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
        marginLeft: 10, // Adjust margin as needed
        fontSize: 20, // Adjust font size as needed
        color:'#223263',
        fontWeight:'bold',
      },
      cameraContainer: {
        flex: 1,
      },
      camera: {
        flex: 1,
      },
      cameraToggleButton: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 8,
      },
      cameraToggleText: {
        color: 'white',
        fontSize: 16,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
      },
      button: {
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width:300,
      },
      buttonText: {
        color:'#223263',
        fontSize: 18,
        fontWeight: 'bold',
      },
      imageContainer: {
        alignItems: 'center',
        marginTop: 20,
      },
      profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60, 
        overflow: 'hidden',
      },
      profileImagePlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 60,
        overflow: 'hidden',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:2,
        borderColor:'orange'
      },
      basicIcon:{
        fontSize:22,
        color:'gray',
    }, 

    topContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'start',
        paddingLeft:30,
        paddingVertical:20
    },
    welcomeView:{
        paddingTop:20,
        paddingLeft:'10%'
    },
    welcomeText:{
        color:'#223263',
        fontSize: 18,
        fontWeight: 'bold',
    },

    row:{
        display:'flex',
        flexDirection:'row',
        gap:15,
        paddingVertical:10,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    icon:{
        fontSize:26,
        color:'orange',
    },
    leftText:{
        color:'#223263',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dataText:{
        marginLeft:'auto',
        color:'gray',
        paddingRight:10,
    }
    



        

})
export default styles;