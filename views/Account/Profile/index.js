import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { Camera ,CameraType} from 'expo-camera';

import config from '../../../config';

import styles from './style';

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
          const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
        if (parsedUserData?.img) {
          setProfileImage(parsedUserData.img.uri);
          console.log(parsedUserData.img.uri);
        }
        }
      } catch (error) {
        console.error('Error reading user data from AsyncStorage:', error);
      }
    };
    
    getUserDataFromStorage();
    
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
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
      console.log('New image URI:', result.uri);
      updateProfileImageInStorage(result.uri);
    }
  };
  

  
  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        let photo = await cameraRef.current.takePictureAsync();
        setProfileImage(photo.uri);
        updateProfileImageInStorage(photo.uri);
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  const toggleCameraType = () => {
    setCameraType((prevType) =>
      prevType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const updateProfileImageInStorage = async (newProfileImage) => {
    try {
      if (userData && userData.id) {
        // Update only the profile image in the database
        try {
          const userId = userData.id;
          // Aktualizuj dane w bazie danych tylko dla obecnie zalogowanego użytkownika
          await config.patch(`/users/${userId}`, { img: { uri: newProfileImage } });
        } catch (error) {
          console.error('Error updating profile image in the database:', error);
        }
  
        // Update the profile image in userData
        const updatedUserData = {
          ...userData,
          img: { uri: newProfileImage },
        };
  
        // Save the updated userData to AsyncStorage
        await AsyncStorage.setItem('userData', JSON.stringify(updatedUserData));
  
        // Update the state to reflect the change
        setUserData(updatedUserData);
      } else {
        console.error('Error updating profile image: userData or userData.id is null');
      }
    } catch (error) {
      console.error('Error updating profile image in AsyncStorage:', error);
    }
  };
  
  
  


  return (
    <SafeAreaView style={styles.screen}>
   
        <View style={styles.topBar}>
          <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Profile</Text>
        </View>

        <View style={styles.topContainer}>
        <TouchableOpacity onPress={pickImage}>
          
  {profileImage ? (
    <Image source={{ uri: profileImage }} style={styles.profileImage} />
  ) : (
    <View style={styles.profileImagePlaceholder}>
      <AntDesign name="plus" size={24} color="white" />
    </View>
  )}
</TouchableOpacity>


          <View style={styles.welcomeView}>
          {userData && (
            <View>
              <Text style={styles.welcomeText}>Hi, {userData.firstName}!</Text>
              <Text style={[styles.welcomeText, {fontSize:15}]}>{userData.email}</Text>
            </View>
          )}
          </View>
        </View>

        
        <View>
          {userData && (
            <View>
              <View style={styles.row}>
                 <AntDesign name="user" style={styles.icon} />
                 <Text style={styles.leftText}>Full Name</Text>
                 <Text style={styles.dataText}>{userData.firstName} {userData.lastName}</Text>
              </View>

              <View style={styles.row}>
                 <AntDesign name="mail" style={styles.icon} />
                 <Text style={styles.leftText}>Your Email</Text>
                 <Text style={styles.dataText}>{userData.email}</Text>
              </View>

              <View style={styles.row}>
                 <AntDesign name="phone" style={styles.icon} />
                 <Text style={styles.leftText}>Phone Number</Text>
                 <Text style={styles.dataText}>{userData.phoneNumber}</Text>
              </View>

              <View style={styles.row}>
                 <AntDesign name="calendar" style={styles.icon} />
                 <Text style={styles.leftText}>Birthday</Text>
                 <Text style={styles.dataText}>{userData.birthday}</Text>
              </View>

              <View style={styles.row}>
                 <AntDesign name="lock" style={styles.icon} />
                 <Text style={styles.leftText}>Password</Text>

                  <TouchableOpacity style={styles.dataText} onPress={togglePasswordVisibility}>
                    <Text style={styles.dataText}>{showPassword ? userData.password : '********'}</Text>
                 </TouchableOpacity>
              </View>

            </View>
          )}
        </View>
 
    </SafeAreaView>
  );
};

export default ProfileScreen;
