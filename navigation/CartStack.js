import React, { createContext, useContext, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from '../views/Cart/index';
import CheckOutScreen from '../views/Cart/CheckOut';
import PaymentChooseScreen from '../views/Cart/ChooseCard';
import ChooseAddressScreen from '../views/Cart/ChooseAddress';
import OrderScreen from '../views/Account/Order/index'
const Stack = createNativeStackNavigator();


export default function CartStackNav(){
  return (
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="CheckOut" component={CheckOutScreen} /> 
        <Stack.Screen name="PaymentChoose" component={PaymentChooseScreen} /> 
        <Stack.Screen name="ChooseAddress" component={ChooseAddressScreen} /> 
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
 
  );
}
