import { Text, View, Image, TextInput, FlatList, Pressable} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { ExploreContext } from './context';


import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';


  export default function HomeScreen({navigation}){
    
    // dummy data
    const images = {
      sport: require('../../assets/exploreImages/sport.png'),
      socks: require('../../assets/exploreImages/socks.png'),
      elegant: require('../../assets/exploreImages/elegant.png'),
      slippers: require('../../assets/exploreImages/slippers.png'),
      winter: require('../../assets/exploreImages/winter.png'),
      worker: require('../../assets/exploreImages/worker.png'),
      NikeAirZoom: require('../../assets/productImages/NikeAirZoom.png'),
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
        {id: '1',type:'sport', img: 'sport', name:'Nike abc', price:220, discountedPrice:300, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '2',type:'elegant',  img: 'sport', name:'Adidas abc', price:190, discountedPrice:200, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '3',type:'sport',  img: 'sport', name:'New Balance abc', price:30, discountedPrice:50, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '4',type:'sport',  img: 'sport', name:'NewBalance dfds', price:150, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '5',type:'sport',  img: 'sport', name:'NewBalance iuo', price:150, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '6',type:'sport',  img: 'sport', name:'Adidas dasd', price:1510, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '7',type:'sport',  img: 'sport', name:'Adidas def', price:30, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '8',type:'sport',  img: 'sport', name:'Nike def', price:99, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '9',type:'socks',  img: 'slippers', name:'NewBalance def def', price:150, discountedPrice:100, size:40, brand:'Nike', condition:'Good', description:'des', review:'rev1'},
        {id: '10',type:'sport',  img: 'NikeAirZoom', name:'Nike Air Zoom', price:299, discountedPrice:499, size:40, brand:'Nike', condition:'Good', description:'Produkt bogow', review:'rev1'},
      ]

    const { sortName, setSortName } = useContext(ExploreContext);
    const [searchBar, setSearchBar] = useState('');
    const [filteredBoots, setFilteredBoots] = useState([]);
    const [selectedBoots, setSelectedBoots] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const [sortedData, setSortedData] = useState([...selectedBoots]);
    const [filterBy,setFilterBy] = useState('');

    const sortDataByName = () => {
      const sorted = [...selectedBoots].sort((a, b) => a.name.localeCompare(b.name));
      setSortedData(sorted);
    };
 
    const sortDataByPrice = (desc) => {
      const sorted = [...selectedBoots].sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;
        if(desc)
          return priceA - priceB;
        else
          return priceB - priceA;
      });
      setSortedData(sorted);
    };

    const sortData = () => {  
      console.log(sortName);
      if(sortName == 'PriceLowest')
           sortDataByPrice(true);
        else if (sortName == 'PriceHighest')
           sortDataByPrice(false);
        else
          sortDataByName(); 
    }
  
    useEffect(() => {
      sortData();
    }, [sortName]); 

    

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
        <Pressable style={styles.productView} onPress={() => navigation.navigate('Product', { selectedItem: item})}>
          <Image source={images[item.img]} style={styles.productIcon}/>
          <View style={styles.singleProductView}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>New Price: {item.price}$</Text>
            <Text style={styles.productDiscountedPrice}>{item.discountedPrice}$</Text>
            </View>
        </Pressable>
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
      setSelectedBoots(filteredItems);
      setFilteredBoots(filteredItems);
    }, [searchBar]);

    useEffect(() => {
      if(selectedItemName === '' ){
        setContentView('default');
      }else{
        setSearchBar(selectedItemName);
        sortData();
        setContentView('selectedItem');
      }
    }, [selectedItemName]); 


    // changing content 
    const [contentView, setContentView] = useState('default');
    const renderContent = () => {
      switch (contentView) {
        case 'default':
          return (
            <View style={{width:'100%'}}>
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
                    data={sortedData}
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
          <AntDesign name="filter" style={styles.basicIcon} onPress={()=>navigation.navigate('Sort')}/>
        </View>

        <View style={styles.content}>
          {renderContent()}
        </View>

      </SafeAreaView>
  );
  }