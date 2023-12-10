import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../views/Home';



const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  
  return (
    
    <Drawer.Navigator initialRouteName='HomeScreen'>
      <Drawer.Screen name="Drawer_1" component={HomeScreen} />
      <Drawer.Screen name="Drawer_2" component={HomeScreen} />
    </Drawer.Navigator>
  
  );
}