import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNav from "./Tab";

import LoginScreen from '../views/Login';
import RegisterScreen from '../views/Register';
import AdminPanelScreen from '../views/Admin';
import AdminProductScreen from '../views/Admin/ProductAdmin';
import AdminDeleteScreen from '../views/Admin/DeleteAdmin';

const Stack = createNativeStackNavigator();

export default function AuthStackNav(){
  return (
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Register" component={RegisterScreen} /> 
        <Stack.Screen name="TabNav" component={TabNav} /> 
        <Stack.Screen name="AdminPanel" component={AdminPanelScreen} /> 
        <Stack.Screen name="AdminProduct" component={AdminProductScreen} /> 
        <Stack.Screen name="AdminDelete" component={AdminDeleteScreen} /> 
        
       
      </Stack.Navigator>
  );
}
