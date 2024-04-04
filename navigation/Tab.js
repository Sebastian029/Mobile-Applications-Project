import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

import TabIcon from '../components/TabIcon' 
import HomeScreen from '../views/Home';

import HomeStackNav from './HomeStack';
import AccountStack from './AccountStack';
import CartStackNav from  './CartStack'

const optionScreen = {
    headerShown: false,
}

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator

        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, }) => {
                return <TabIcon routeName={route?.name} focused={focused} />;
            },
            tabBarLabel: ({ focused }) => {
               return <Text style={{ color: focused ? '#44355B' : 'gray', fontWeight:'bold', }}>{route.name}</Text>;
           },
           tabBarHideOnKeyboard:true,
        }
        )}>
            <Tab.Screen name="Home" component={HomeStackNav} options={optionScreen} />
           
            <Tab.Screen name="Cart" component={CartStackNav} options={optionScreen}/>
            <Tab.Screen name="Account" component={AccountStack} options={optionScreen} />
           
        </Tab.Navigator>
    );
}
