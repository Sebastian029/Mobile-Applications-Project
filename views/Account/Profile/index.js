import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from 'expo-file-system';

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
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
      console.log('New image URI:', result.assets[0].uri);
      updateProfileImageInStorage(result.assets[0].uri);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const updateProfileImageInStorage = async (newProfileImage) => {
    try {
      if (userData && userData.id) {
        try {
          const userId = userData.id;
          await config.patch(`/users/${userId}`, { img: { uri: newProfileImage } });
        } catch (error) {
          console.error('Error updating profile image in the database:', error);
        }
  
        const updatedUserData = {
          ...userData,
          img: { uri: newProfileImage },
        };
  
        await AsyncStorage.setItem('userData', JSON.stringify(updatedUserData));
  
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
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={pickImage}>
                    {profileImage ? (
                        <Image source={{ uri: profileImage }} style={styles.profileImage} />
                    ) : (
                        <View style={styles.profileImagePlaceholder}>
                            <AntDesign name="plus" size={24} color="white" />
                        </View>
                    )}
                    <TouchableOpacity style={styles.cameraPlaceholder}onPress={() => navigation.navigate("ProductPicture")}>
                        <View >
                            <AntDesign name="camerao" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>


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
