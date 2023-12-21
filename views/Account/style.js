import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

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

  account: {
    borderColor: "#ebf0ff",
    borderWidth: 1,
    marginTop:15,
    marginHorizontal:5,
    borderRadius: 6,
    padding: 5
  },

  row:{
    display:'flex',
    flexDirection:'row',
    gap:15,
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    marginVertical: 6,
    alignItems:'start',
    borderColor: "#9098b1",
    borderWidth: 1,
    borderRadius: 15,
    padding: 20
  },

  tekst: {
    color:'#223263',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default styles;