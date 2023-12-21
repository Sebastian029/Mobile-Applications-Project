import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OrderDetail({navigation}){

    const items =[
        {
            id: '1',
            type:'sport',
            img: 'NewBalanceBB550',
            name:'NewBalance iuo',
            price:100,
            discountedPrice:150,
            size:40, brand:'Nike',
            condition:'Good',
            description:'des',
            review:'rev1'
        },
        {
            id: '2',
            type:'sport',
            img: 'NewBalanceu574',
            name:'Adidas dasd',
            price:110,
            discountedPrice:160,
            size:40, brand:'Nike',
            condition:'Good',
            description:'des',
            review:'rev1'
        }]



    const images = {
        sport: require('../../../../assets/exploreImages/sport.png'),
        socks: require('../../../../assets/exploreImages/socks.png'),
        elegant: require('../../../../assets/exploreImages/elegant.png'),
        slippers: require('../../../../assets/exploreImages/slippers.png'),
        winter: require('../../../../assets/exploreImages/winter.png'),
        worker: require('../../../../assets/exploreImages/worker.png'),
        NikeAirZoom: require('../../../../assets/productImages/NikeAirZoom.png'),
        AdidasCampus: require('../../../../assets/productImages/AdidasCampus.png'),
        AdidasSuperstar: require('../../../../assets/productImages/AdidasSuperstar.png'),
        NewBalanceBB550: require('../../../../assets/productImages/NewBalanceBB550.png'),
        NewBalanceu574: require('../../../../assets/productImages/NewBalanceu574.png'),
        NIkeMarshmallow: require('../../../../assets/productImages/NIkeMarshmallow.png'),
        ReebokNylon: require('../../../../assets/productImages/ReebokNylon.png'),
        ReebokRoyal: require('../../../../assets/productImages/ReebokRoyal.png'),
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.productView}>
                <Image source={images[item.img]} style={styles.productIcon}/>
                <View style={styles.singleProductView}>
                    <View style={styles.itemTop}>
                        <Text style={styles.productName}>{item.name}</Text>
                    </View>
                    <Text style={styles.productPrice}>{item.price}$</Text>
                    <Text style={styles.productDiscountedPrice}>{item.discountedPrice}$</Text>
                    <View style={styles.pieces}>
                        <Text style={styles.basicIcon}>{item.quantity}</Text>
                    </View>
                </View>
            </View>
        );
    };


    return (

        <SafeAreaView style={styles.screen}>
            <View style={[styles.topBar]}>
                <AntDesign name="left" style={styles.basicIcon}  onPress={() => navigation.goBack()}/>
                <Text style={styles.title}>Order</Text>
            </View>

            <View style={styles.content}>
                {items.length > 0 ? (
                    <FlatList
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <Text style={styles.noItemsText}>Cart is empty</Text>
                )}
            </View>

            <Text style={styles.title}>Shipping details</Text>
            <View style={styles.summary}>
                <View style={styles.specification}>
                    <Text style={styles.spec}>Expected delivery date:</Text>
                    <Text style={styles.spec}>22-12-2023</Text>
                </View>

                <View style={styles.specification}>
                    <Text style={styles.spec}>Shipping</Text>
                    <Text style={styles.spec}>Poczta Polska</Text>
                </View>

                <View style={styles.specification}>
                    <Text style={styles.spec}>Address</Text>
                    <View>
                        <Text style={styles.specAdr}>Podraje 2, 28-136</Text>
                        <Text style={styles.specAdr}>Nowy Korczyn</Text>
                    </View>
                </View>

            </View>

            <Text style={styles.title}>Payment details</Text>
            <View style={styles.summary}>
                <View style={styles.specification}>
                    <Text style={styles.spec}>Items (2)</Text>
                    <Text style={styles.spec}>310$</Text>
                </View>

                <View style={styles.specification}>
                    <Text style={styles.spec}>Shipping</Text>
                    <Text style={styles.spec}>40$</Text>
                </View>

                <View style={styles.specification}>
                    <Text style={styles.spec}>Total Discounts</Text>
                    <Text style={styles.spec}>100$</Text>
                </View>

                <View style={styles.specification}>
                    <Text style={[styles.spec, {fontWeight:'bold'}]}>Total price</Text>
                    <Text style={[styles.spec, {fontWeight:'bold'}]}>250$</Text>
                </View>
            </View>

            {/*<Pressable onPress={handleCheckout} style={styles.button}>
                <Text style={styles.buttonText}>Check out</Text>
            </Pressable>*/}


        </SafeAreaView>
    );
}