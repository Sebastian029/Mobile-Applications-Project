import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';


  export default function HomeScreen({navigation}){

    const images = {
      sport: require('../../assets/exploreImages/sport.png'),
      socks: require('../../assets/exploreImages/socks.png'),
      elegant: require('../../assets/exploreImages/elegant.png'),
      slippers: require('../../assets/exploreImages/slippers.png'),
      winter: require('../../assets/exploreImages/winter.png'),
      worker: require('../../assets/exploreImages/worker.png'),
    };
  
    const data = [
      { id: '1', img: 'sport', name: 'Sport Shoes' },
      { id: '2', img: 'socks', name: 'Socks' },
      { id: '3', img: 'elegant', name: 'Elegant Shoes' },
      { id: '4', img: 'slippers', name: 'Slippers' },
      { id: '5', img: 'winter', name: 'Winter Boots' },
      { id: '6', img: 'worker', name: 'Worker Shoes' },
    ];
 
    const renderItem = ({ item }) => {
      return (
        <View style={styles.productIconView}>
          <Image source={images[item.img]} style={styles.productIcon} />
          <Text style={styles.productText}>{item.name}</Text>
        </View>
      );
    };
    
    


    return (
      
      <SafeAreaView style={styles.screen}>
        
      <View style={styles.topBar}>
        <View style={styles.searchInput}>
          <AntDesign name="search1" style={styles.searchIcon}/>
          <TextInput placeholder='Search Product'/>
        </View>

        <AntDesign name="hearto" style={styles.basicIcon}/>
      </View>

      <View style={styles.titleBar}>
          <Text style={styles.titleText}>Man Fashion</Text>
          <AntDesign name="down" style={styles.basicIcon}/>
      </View>

      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      </View>
  

      </SafeAreaView>
  );
  }