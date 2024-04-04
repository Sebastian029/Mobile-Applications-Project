import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Pressable} from 'react-native';
import styles from './style';
import {AntDesign} from "@expo/vector-icons";

const InfoScreen = ({ navigation }) => {

    

    return (
        <View style={[styles.screen]}>
            <View style={[styles.topBar]}>
                <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
                <Text style={styles.title}>Info about App</Text>
            </View>
            <View style={[styles.textPole]}>
                <Text style={styles.text}>Nasz sklep butów to idealne miejsce dla wszystkich miłośników obuwia, którzy poszukują łatwego i wygodnego sposobu na zakupy. Dodaj swoje karty do płatności oraz adresy do wysyłek. Gdybyś miał jakieś już niepotrzebne buty aplikacja przychodzi z pomocą. Możesz w każdej chwilii wystawić parę zalegających Ci butów.</Text>
            </View>
        

        </View>
    );
};

export default InfoScreen;

