
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../screens/home-screen';


const optionScreen = {
    headerShown: false,
    tabBarShowLabel: false
}

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({})}>
            <Tab.Screen name="Home" component={HomeScreen} options={optionScreen} />
            <Tab.Screen name="Explore" component={HomeScreen} options={optionScreen} />
            <Tab.Screen name="Cart" component={HomeScreen} options={optionScreen} />
            <Tab.Screen name="Account" component={HomeScreen} options={optionScreen} />
        </Tab.Navigator>
    );
}
