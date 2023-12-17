import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../views/Account';
import ProfileScreen from '../views/Account/Profile';
import OrderScreen from '../views/Account/Order';
import PaymentScreen from '../views/Account/Payment';
import AddressScreen from '../views/Account/Address';
import MessageCenterScreen from '../views/Account/MessageCenter';
import MySaleScreen from '../views/Account/MySale';
import SellProductScreen from '../views/Account/SellProduct';
import AddCardScreen from '../views/Account/Payment/AddCard';
import DeleteScreen from '../views/Account/Payment/DeleteCard';
const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="AccountStackName">
        <Stack.Screen name="AccountStackName" component={AccountScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="Message Center" component={MessageCenterScreen} />
        <Stack.Screen name="My Sale" component={MySaleScreen} />
        <Stack.Screen name="Sell Product" component={SellProductScreen} />
        <Stack.Screen name="Add Card" component={AddCardScreen} />
        <Stack.Screen name="Delete" component={DeleteScreen} />


      </Stack.Navigator>
  );
};

export default AccountStack;
