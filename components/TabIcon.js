import React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TabIcon = ({ routeName, focused }) => {
  const iconColor = focused ? 'orange' : 'gray'; 

  switch (routeName) {
    case 'Home':
      return <AntDesign name="home" style={[styles.icon, { color: iconColor }]} />;
    case 'Explore':
      return <AntDesign name="search1" style={[styles.icon, { color: iconColor }]} />;
    case 'Cart':
      return <AntDesign name="shoppingcart" style={[styles.icon, { color: iconColor }]} />;
    case 'Account':
      return <AntDesign name="user" style={[styles.icon, { color: iconColor }]} />;
    default:
      return <AntDesign name="unknowfile1" style={[styles.icon, { color: iconColor }]} />;
  }
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
});

export default TabIcon;
