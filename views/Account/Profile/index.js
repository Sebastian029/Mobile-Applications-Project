import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { Camera ,CameraType} from 'expo-camera';

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const getUserDataFromStorage = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      } catch (error) {
        console.error('Error reading user data from AsyncStorage:', error);
      }
    };

    getUserDataFromStorage();

    const requestCameraPermission = async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    };

    requestCameraPermission();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      setProfileImage(photo.uri);
    }
  };

  const toggleCameraType = () => {
    // Toggle between front and back camera
    setCameraType((prevType) =>
      prevType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <View style={styles.topBar}>
          <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Profile</Text>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={pickImage}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <View style={styles.profileImagePlaceholder}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View>
          {userData && (
            <View>
              <Text>Hi! {userData.firstName}</Text>
              <Text>{userData.email}</Text>
            </View>
          )}
        </View>

        <View>
          {userData && (
            <View>
              <Text>Full Name: {userData.firstName} {userData.lastName}</Text>
              <Text>Your Email: {userData.email}</Text>
              <Text>Phone Number: {userData.phoneNumber}</Text>
              <Text>Birthday: {userData.birthday}</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
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
  
  cialo:{
   
    
  },
screen:{
  width:'100%',
  height:'100%',
  backgroundColor:'white',
  display:'flex',
  flexDirection:'column',
  
},
imageContainer: {
  alignItems: 'center',
  marginTop: 20,
},
profileImage: {
  width: 120,
  height: 120,
  borderRadius: 60, // połowa szerokości/średnicy, aby uzyskać efekt okrągłego zdjęcia
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
Back: {
  backgroundColor: 'blue',
  height: 40,
  justifyContent: 'center',
  
 
},
basicIcon: {
  fontSize: 22,
  color: 'gray',
},
exitIcon: {
  fontSize: 22,
  color: 'red',
},
title: {
  marginLeft: 10, // Adjust margin as needed
  
 
  fontSize: 20, // Adjust font size as needed
  color:'#223263',

  fontWeight:'bold',

},
buttonContainer: {
  flex: 1,
  justifyContent: 'center',
},



})

