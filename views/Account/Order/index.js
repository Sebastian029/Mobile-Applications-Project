import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Pressable} from 'react-native';
import styles from './style';
import {AntDesign} from "@expo/vector-icons";


const orderData = [
    {
        id: 1,
        orderID: "AAAA2137",
        date: "15-10-2023",
        status: "Packing",
        items: 2,
        totalPrice: 540
    },
    {
        id: 2,
        orderID: "AABB2115",
        date: "15-12-2023",
        status: "Done",
        items: 2,
        totalPrice: 300
    }
];


const OrderScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Pressable style={styles.order} onPress={() => navigation.navigate('OrderDetail')}>
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
                //keyExtractor={(item, index) => index.toString()}
            />

        </View>
    );
};

export default OrderScreen;

