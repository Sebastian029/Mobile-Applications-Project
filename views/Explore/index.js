import { Text, View, Image, TextInput, FlatList, Pressable} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ExploreContext } from './context';


import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

  export default function HomeScreen({navigation}){

    const [boots, setBoots] = useState([]);
    const { sortName, setSortName } = useContext(ExploreContext);
    const [searchBar, setSearchBar] = useState('');
    const [filteredBoots, setFilteredBoots] = useState([]);
    const [selectedBoots, setSelectedBoots] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const [sortedData, setSortedData] = useState([...selectedBoots]);
    const [filterBy,setFilterBy] = useState('');


    useEffect(() => {
      const fetchData = async () => {
        try {
          const storedBootsData = await AsyncStorage.getItem('bootsData');
          if (storedBootsData) {
            const parsedBootsData = JSON.parse(storedBootsData);

  
            setBoots(parsedBootsData); 
          }
        } catch (error) {
          console.error('Error reading boots data from AsyncStorage:', error);
        }
      };
  
      fetchData();
    }, []);



    const sortDataByName = () => {
      const sorted = [...selectedBoots].sort((a, b) => a.title.localeCompare(b.title));
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

    

    
    

    const renderItemHint = ({ item }) => {
      return (
        <Pressable onPress={() => selectItemFromHint(item.title)}>
          <Text style={styles.hintText}>{item.title}</Text>
        </Pressable>
      );
    };

    const renderProductList = ({ item }) => {
      return (
        <Pressable style={styles.productView} onPress={() => navigation.navigate('Product', { selectedItem: item})}>
          <Image source={{uri: item.img.uri }} style={styles.productIcon}/>
          <View style={styles.singleProductView}>
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}$</Text>
            {/* <Text style={styles.productDiscountedPrice}>{item.discountedPrice}$</Text> */}
            </View>
        </Pressable>
      );
    };
    

    
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

    const selectItemFromHint = (title) => {
      setSelectedItemName(title);
      setContentView('selectedItem');
      setSearchBar(selectedItemName);
    };

    const backToHome = () =>{
      setContentView('default');
      setSearchBar('');
    }


    useEffect(() => {
      const filteredItems = boots.filter((boot) =>
        boot.title.toLowerCase().includes(searchBar.toLowerCase())
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


    const [contentView, setContentView] = useState('default');
    const renderContent = () => {
      switch (contentView) {
        case 'default':
          return (
            <View style={{width:'100%'}}>
              <AntDesign name="search1" style={styles.mainIcon}/>
                <Text style={styles.titleText}>Search for our products!</Text>
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