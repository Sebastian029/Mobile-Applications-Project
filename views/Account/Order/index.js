import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Pressable} from 'react-native';
import styles from './style';
import {AntDesign} from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderScreen = ({ navigation }) => {

    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        // Odczytaj dane z AsyncStorage po załadowaniu komponentu
        const fetchData = async () => {
          try {
            const storedOrderData = await AsyncStorage.getItem('orderData');
            if (storedOrderData) {
              setOrderData(JSON.parse(storedOrderData));
            }
          } catch (error) {
            console.error('Error reading order data from AsyncStorage:', error);
          }
        };
    
        fetchData();
      }, []); // Pusta zależność oznacza, że useEffect zostanie uruchomiony tylko raz po zamontowaniu komponentu
    
      

    const renderItem = ({ item }) => (
        <Pressable style={styles.order} onPress={() => navigation.navigate('OrderDetail',{selectedItem: item})}>
            <Text style={styles.leftText}> {item.orderID}</Text>
            <View style={styles.row}>
                <Text style={styles.leftText}>Order date:</Text>
                <Text style={styles.rightText}>{item.date}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.leftText}>Order status:</Text>
                <Text style={styles.rightText}>{item.status}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.leftText}>Items:</Text>
                <Text style={styles.rightText}>{item.items}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.leftText}>Total price:</Text>
                <Text style={styles.rightText}>{item.totalPrice}$</Text>
            </View>

        </Pressable>
    );

    return (
        <View style={[styles.screen]}>
            <View style={[styles.topBar]}>
                <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
                <Text style={styles.title}>My orders</Text>
            </View>

            <FlatList
                data={orderData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    );
};

export default OrderScreen;

