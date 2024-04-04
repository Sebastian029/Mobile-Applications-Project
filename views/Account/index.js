import * as React from "react";
import { StyleSheet, View, Text, Pressable,Image, Alert } from "react-native";
import styles from "./style";
import {AntDesign} from "@expo/vector-icons";
const AccountScreen = ({navigation}) => {

  const handleLogout=() => {
    Alert.alert(
      'Confirmation',
      'Are you sure to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ],
      { cancelable: false }
    );

    
  }

  return (
    <View >
      <View style={[styles.topBar]}>
        <Text style={styles.title}>Account</Text>
      </View>
      <View style={styles.account}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <View style={styles.row}>
            <AntDesign name="user" style={styles.basicIcon}/>
            <Text style={styles.tekst}>Profile</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Order')}>
          <View style={styles.row}>
            <AntDesign name="profile" style={styles.basicIcon}/>
            <Text style={styles.tekst}>Order</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Payment')}>
          <View style={styles.row}>
            <AntDesign name="creditcard" style={styles.basicIcon}/>
            <Text style={styles.tekst}>Payment</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Address')}>
            <View style={styles.row}>
                <AntDesign name="contacts" style={styles.basicIcon}/>
                <Text style={styles.tekst}>Address</Text>
            </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('My Sale')}>
            <View style={styles.row}>
                <AntDesign name="wallet" style={styles.basicIcon}/>
                <Text style={styles.tekst}>My sale</Text>
            </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Info')}>
            <View style={styles.row}>
                <AntDesign name="info" style={styles.basicIcon}/>
                <Text style={styles.tekst}>Info about App</Text>
            </View>
        </Pressable>

        <Pressable onPress={() => handleLogout()}>
         <View style={[styles.row, {justifyContent:'center'}]}>
                <Text style={styles.tekst}>Log Out</Text>
            </View>
        </Pressable>
      </View>
    </View>
  );
};



export default AccountScreen;
