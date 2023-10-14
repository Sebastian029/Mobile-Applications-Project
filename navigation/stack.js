import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import RegisterScreen from '../screens/register-screen';
import LoginScreen from '../screens/login-screen';
import MainScreen from '../screens/main-screen';


const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Login">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
  );
}

export default HomeStack;