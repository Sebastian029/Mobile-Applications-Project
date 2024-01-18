import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OrderDetail({navigation, route}){
    const { selectedItem} = route.params;
    

    const renderItem = ({ item }) => {
        return (
            <Pressable style={styles.productView} >
                <Image source={item.img} style={styles.productIcon}/>
                <View style={styles.singleProductView}>
                    <View style={styles.itemTop}>
                        <Text style={styles.productName}>{item.name}</Text>
                    </View>
                    <Text style={styles.productPrice}>{item.price}$</Text>
                </View>
            </Pressable>
        );
    };


    return (

        <SafeAreaView style={styles.screen}>
            <View style={[styles.topBar]}>
                <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
                <Text style={styles.title}>Order</Text>
            </View>

            <View style={styles.content}>
                    <FlatList
                        data={selectedItem.boot}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
            </View>

            <Text style={styles.title}>Shipping details</Text>
            <View style={styles.summary}>
                <View style={styles.specification}>
                    <Text style={styles.spec}>Expected delivery date:</Text>
                    <Text style={styles.spec}>{selectedItem.date}</Text>
                </View>

                <View style={styles.specification}>
                    <Text style={styles.spec}>Shipping</Text>
                    <Text style={styles.spec}>Poczta Polska</Text>
                </View>

                <View style={styles.specification}>
                    <Text style={styles.spec}>Address</Text>
                    <View>
                        <Text style={styles.specAdr}>{selectedItem.address}</Text>
                        
                    </View>
                </View>

            </View>

            <Text style={styles.title}>Payment details</Text>
            <View style={styles.summary}>
                <View style={styles.specification}>
                    <Text style={styles.spec}>Items ({selectedItem.items})</Text>
                    <Text style={styles.spec}>{selectedItem.price}$</Text>
                </View>

                <View style={styles.specification}>
                    <Text style={styles.spec}>Shipping</Text>
                    <Text style={styles.spec}>{selectedItem.shipping}$</Text>
                </View>

               

                <View style={styles.specification}>
                    <Text style={[styles.spec, {fontWeight:'bold'}]}>Total price</Text>
                    <Text style={[styles.spec, {fontWeight:'bold'}]}>{selectedItem.totalPrice}$</Text>
                </View>
            </View>


        </SafeAreaView>
    );
}