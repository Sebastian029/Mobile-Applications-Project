import { Text, View, Image, TextInput, FlatList, Pressable} from 'react-native';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';



import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';


  export default function HomeScreen({navigation}){
    
    // dummy data
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

    const boots =[
      {id: '1', img: 'sport', name:'Nike abc', price:'300$', discountedPrice:'300$'},
      {id: '2', img: 'sport', name:'Adidas abc', price:'250$', discountedPrice:'200$'},
      {id: '3', img: 'sport', name:'NewBalance abc', price:'100$', discountedPrice:'50$'},
      {id: '4', img: 'sport', name:'NewBalance def', price:'150$', discountedPrice:'100$'},
      {id: '5', img: 'sport', name:'NewBalance def def def def def def def def def def', price:'150$', discountedPrice:'100$'},
    ]
    
    const [searchBar, setSearchBar] = useState('');
    const [filteredBoots, setFilteredBoots] = useState([]);
    const [selectedBoots, setSelectedBoots] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const [sortBy,setSortBy] = useState('');

    const goToFilterView = () =>{
      
      navigation.navigate('Filter');
    }

    // flat list rendering methods
    const renderItem = ({ item }) => {
      return (
        <View style={styles.productIconView}>
          <Image source={images[item.img]} style={styles.productIcon} />
          <Text style={styles.productText}>{item.name}</Text>
        </View>
      );
    };

    const renderItemHint = ({ item }) => {
      return (
        <Pressable onPress={() => selectItemFromHint(item.name)}>
          <Text style={styles.hintText}>{item.name}</Text>
        </Pressable>
      );
    };

    const renderProductList = ({ item }) => {
      return (
        <View style={styles.productView}>
          <Image source={images[item.img]}/>
          <View style={styles.singleProductView}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>New Price: {item.price}</Text>
            <Text style={styles.productDiscountedPrice}>{item.discountedPrice}</Text>
            </View>
        </View>
      );
    };
    

    
    // onPress handlers
    const clearSearchBar = () => {
      setSearchBar('');
      if(searchBar === '')
      setContentView('default');
    }
    const handleSearchInputChange = (text) => {
      setSearchBar(text);
      if (text !== '') {
        setContentView('foundItems'); 
      } else {
        setContentView('default');
      }
    };

    const selectItemFromHint = (name) => {
      setSelectedItemName(name);
      setContentView('selectedItem');
      setSearchBar(selectedItemName);
    };

    const backToHome = () =>{
      setContentView('default');
      setSearchBar('');
    }

    // use effects to handle filtering items
    useEffect(() => {
      const filteredItems = boots.filter((boot) =>
        boot.name.toLowerCase().includes(searchBar.toLowerCase())
      );
      setFilteredBoots(filteredItems);
    }, [searchBar]);

    useEffect(() => {
      const filteredItems = boots.filter((boot) =>
        boot.name.toLowerCase().includes(searchBar.toLowerCase())
      );
      setSelectedBoots(filteredItems);
    }, [searchBar]);

    useEffect(() => {
      if(selectedItemName === '' ){
        setContentView('default');
      }else{
        setSearchBar(selectedItemName);
        setContentView('selectedItem');
      }
    }, [selectedItemName]); 


    // changing content 
    const [contentView, setContentView] = useState('default');
    const renderContent = () => {
      switch (contentView) {
        case 'default':
          return (
            <View>
              <View style={styles.titleBar}>
                <Text style={styles.titleText}>Man Fashion</Text>
                <AntDesign name="down" style={styles.basicIcon}/>
              </View>

              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
              />
            </View>
          );
          case 'foundItems':
            if (filteredBoots.length > 0) {
              return (
                <FlatList
                  data={filteredBoots}
                  renderItem={renderItemHint}
                  keyExtractor={(item) => item.id}
                />
              );
            }
          case 'notFound':
            return (
              <View style={styles.notFoundView}>
                <Image source={require('../../assets/exploreImages/cross.png')}/>
                <Text style={styles.titleText}>Product Not Found</Text>
                <Pressable onPress={backToHome} style={styles.backButton}>
                  <Text>Back To Home</Text>
               </Pressable>
             </View>
            )

          case 'selectedItem':
          return(
            <FlatList
                  data={selectedBoots}
                  renderItem={renderProductList}
                  keyExtractor={(item) => item.id}
                />
          )
          default:
            return null;
      }
    };
    
    


    return (
      <SafeAreaView style={styles.screen}>
        
        <View style={styles.topBar}>
          <View style={styles.searchInput}>
            <AntDesign name="search1" style={styles.searchIcon} />
            <TextInput placeholder='Search Product' value={searchBar} onChangeText={handleSearchInputChange} onSubmitEditing={() => selectItemFromHint(searchBar)} style={styles.searchText}/>
          </View>

          <AntDesign name="close" style={styles.basicIcon} onPress={clearSearchBar}/>
          <AntDesign name="filter" style={styles.basicIcon} onPress={goToFilterView}/>
        </View>

        <View style={styles.content}>
          {renderContent()}
        </View>

      </SafeAreaView>
  );
  }