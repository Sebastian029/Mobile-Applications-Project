import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from '../views/Explore/index';
import SortScreen from '../views/Explore/sort'

const Stack = createNativeStackNavigator();

export default function ExploreStackNav(){
  return (
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Explore">
        <Stack.Screen name="Explore" component={HomeScreen} /> 
        <Stack.Screen name="Sort" component={SortScreen} /> 
      </Stack.Navigator>
  );
}
