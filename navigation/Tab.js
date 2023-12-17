import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

import DrawerNav from "./Drawer";
import TabIcon from '../components/TabIcon' 
import HomeScreen from '../views/Home';

import ExploreStackNav from './ExploreStack';
import AccountStack from './AccountStack';

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
               return <Text style={{ color: focused ? 'orange' : 'gray' }}>{route.name}</Text>;
           },
           tabBarHideOnKeyboard:true,
        }
        )}>
            <Tab.Screen name="Home" component={HomeScreen} options={optionScreen} />
            <Tab.Screen name="Explore" component={ExploreStackNav} options={optionScreen} />
            <Tab.Screen name="Cart" component={HomeScreen} options={optionScreen} />
            <Tab.Screen name="Account" component={AccountStack} options={optionScreen} />
            <Tab.Screen name="DrawerNav" component={DrawerNav} options={optionScreen} />
        </Tab.Navigator>
    );
}
