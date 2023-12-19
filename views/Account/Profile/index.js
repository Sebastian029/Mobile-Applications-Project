import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { Camera ,CameraType} from 'expo-camera';

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

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
