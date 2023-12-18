import React, { createContext, useContext, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import HomeScreen from '../views/Explore/index';
import SortScreen from '../views/Explore/sort'
import ProductScreen from '../views/Product';
import ReviewsScreen from '../views/Reviews'
import {ExploreProvider} from '../views/Explore/context'


const Stack = createNativeStackNavigator();


export default function ExploreStackNav(){
  return (
    <ExploreProvider>
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="ExploreStackName">
        <Stack.Screen name="ExploreStackName" component={HomeScreen} /> 
        <Stack.Screen name="Sort" component={SortScreen} /> 
        <Stack.Screen name="Product" component={ProductScreen} /> 
        <Stack.Screen name="Reviews" component={ReviewsScreen} /> 
      </Stack.Navigator>
    </ExploreProvider>
 
  );
}
