import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import RegisterScreen from '../screens/register-screen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
  );
}

export default HomeStack;