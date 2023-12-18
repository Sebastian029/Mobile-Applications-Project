import React, { createContext, useContext, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import HomeScreen from '../views/Home/index';
import ProductScreen from '../views/Product';
import ReviewsScreen from '../views/Reviews'


const Stack = createNativeStackNavigator();


export default function HomeStackNav(){
  return (
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Product" component={ProductScreen} /> 
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
      </Stack.Navigator>
 
  );
}
