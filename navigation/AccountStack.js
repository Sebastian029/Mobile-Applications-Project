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
import DeleteCardScreen from '../views/Account/Payment/DeleteCard';
import SucessCardScreen from '../views/Account/Payment/Sucess.js';
import SucessAddressScreen from '../views/Account/Address/SucessAddress/index.js';
import AddAddressScreen from '../views/Account/Address/AddAddress/index.js';
import EditAddressScreen from '../views/Account/Address/EditAddress/index.js';
import DeleteAddressScreen from '../views/Account/Address/DeleteAddress/index.js';
import DeleteMySaleScreen from '../views/Account/MySale/DeleteMySale/index.js';
import EditMySaleScreen from '../views/Account/MySale/EditMySale/index.js';
import ProductSaleScreen from '../views/Account/MySale/ProductSale/index.js';
import MessageDetailScreen from '../views/Account/MessageCenter/MessageDetail/index.js';
import CreateCommentScreen from '../views/Account/MessageCenter/CreateComment/index.js';
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
        <Stack.Screen name="AddCard" component={AddCardScreen} />
        <Stack.Screen name="DeleteCard" component={DeleteCardScreen} />
        <Stack.Screen name="SucessCard" component={SucessCardScreen} />
        <Stack.Screen name="SucessAddress" component={SucessAddressScreen} />
        <Stack.Screen name="AddAddress" component={AddAddressScreen} />
        <Stack.Screen name="EditAddress" component={EditAddressScreen} />
        <Stack.Screen name="DeleteAddress" component={DeleteAddressScreen} />
        <Stack.Screen name="DeleteMySale" component={DeleteMySaleScreen} />
        <Stack.Screen name="EditMySale" component={EditMySaleScreen} />
        <Stack.Screen name="ProductSale" component={ProductSaleScreen} />
        <Stack.Screen name="MessageDetail" component={MessageDetailScreen} />
        <Stack.Screen name="CreateComment" component={CreateCommentScreen} />



      </Stack.Navigator>
  );
};

export default AccountStack;
