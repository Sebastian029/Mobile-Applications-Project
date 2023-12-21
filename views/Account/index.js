import * as React from "react";
import { StyleSheet, View, Text, Pressable,Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "./GlobalStyles";
import styles from "./style";
import {AntDesign} from "@expo/vector-icons";
const AccountScreen = ({navigation}) => {
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
        <Pressable onPress={() => navigation.navigate('Message Center')}>
            <View style={styles.row}>
                <AntDesign name="message1" style={styles.basicIcon}/>
                <Text style={styles.tekst}>Message center</Text>
            </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('My Sale')}>
            <View style={styles.row}>
                <AntDesign name="wallet" style={styles.basicIcon}/>
                <Text style={styles.tekst}>My sale</Text>
            </View>
        </Pressable>
      </View>
    </View>
  );
};



export default AccountScreen;
