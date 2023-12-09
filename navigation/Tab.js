import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../views/Home/home-screen';
import DrawerNav from "./Drawer";
import TabIcon from '../components/TabIcon' 

const optionScreen = {
    headerShown: false,
    tabBarShowLabel: false
}

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, }) => {
                return <TabIcon routeName={route?.name} focused={focused} />;
            }
        })}>
            <Tab.Screen name="Home" component={HomeScreen} options={optionScreen} />
            <Tab.Screen name="Explore" component={HomeScreen} options={optionScreen} />
            <Tab.Screen name="Cart" component={HomeScreen} options={optionScreen} />
            <Tab.Screen name="Account" component={HomeScreen} options={optionScreen} />
            <Tab.Screen name="DrawerNav" component={DrawerNav} options={optionScreen} />
            
        </Tab.Navigator>
    );
}
