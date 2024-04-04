import React, { createContext, useContext, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import HomeScreen from '../views/Home/index';
import ProductScreen from '../views/Product';



const Stack = createNativeStackNavigator();


export default function HomeStackNav(){
  return (
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="HomeStart">
        <Stack.Screen name="HomeStart" component={HomeScreen} /> 
        <Stack.Screen name="Product" component={ProductScreen} /> 
     
      </Stack.Navigator>
 
  );
}
