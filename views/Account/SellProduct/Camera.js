import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    StyleSheet,
    Pressable,
    TouchableOpacity,
    Image,
    Platform, Alert
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import styles from './style';
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from 'expo-file-system';

const ProductPicture = ({ navigation, route }) => {
    const [productImage, setProductImage] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const cameraRef = useRef(null);


    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    useEffect(() => {
        // Request camera and media library permissions on component mount
        requestPermissions();
    }, []);

    const requestPermissions = async () => {
        const permission = await MediaLibrary.requestPermissionsAsync();
    };
    const takePicture = async () => {

            const  {uri}  = await cameraRef.current.takePictureAsync();
            const temporaryUri = `${FileSystem.cacheDirectory}expo-image-${Date.now()}.jpg`;
            await FileSystem.moveAsync({ from: uri, to: temporaryUri});
            const asset = await MediaLibrary.createAssetAsync(temporaryUri)


        navigation.goBack();
        }

    return (
        <View style={[styles.screen]}>
            <View style={[styles.topBar]}>
                <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
                <Text style={styles.title}>Add SellProduct</Text>
            </View>
            <View style={styles.cameraContainer}>
                <Camera style={styles.camera} type={type} ref={ cameraRef }/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonCam} onPress={toggleCameraType}>
                    <Text style={styles.text}>Flip Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCam} onPress={takePicture}>
                    <Text style={styles.text}>Take Picture</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductPicture;

