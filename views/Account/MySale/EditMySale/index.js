import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable, TouchableOpacity, Image, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import styles from './style';

const EditMySaleScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
 
  const [profileImage, setProfileImage] = useState(null);
  const [id, setId] = useState(null);
  const [userid, setUserid] = useState(null);

  useEffect(() => {
    console.log("mySale from route.params:", route.params?.mySale);
  
    if (route.params?.mySale) {
      const { id, userid, title, category, brand, size, condition, description, price, img } = route.params.mySale;
      setUserid(userid);
      setId(id)
      setTitle(title);
      setCategory(category);
      setBrand(brand);
      setSize(size);
      setCondition(condition);
      setDescription(description);
      setPrice(price);
      setProfileImage(img);
    }
  }, [route.params?.mySale]);

  const onSave = () => {
    // Add your logic to save the edited mySale data
    const editedSellProduct = {
      id : id,
      userid: userid,
      title: title,
      category: category,
      brand: brand,
      size: size,
      condition: condition,
      description: description,
      price: price,
      img:  profileImage  ,
    };
    if (!title || !category || !brand || !size || !condition || !description || !price) {
      Alert.alert('Error', 'All fields must be filled out.');
      return;
    }

    if(!profileImage){
      Alert.alert('Error', 'No item image');
      return;
    }


  const categoryRegex = /^[a-zA-Z\s]+$/;
  if (!categoryRegex.test(category)) {
    Alert.alert('Error', 'Invalid category name');
    return;
  }

  const brandRegex = /^[a-zA-Z0-9\s]+$/;
  if (!brandRegex.test(brand)) {
    Alert.alert('Error', 'Invalid brand name');
    return;
  }

  const sizeRegex = /^[0-9]+$/;
  if (!sizeRegex.test(size)) {
    Alert.alert('Error', 'Only number are available in shoe size');
    return;
  }

  const conditionRegex = /^[a-zA-Z\s]+$/;;
  if (!conditionRegex.test(condition)) {
    Alert.alert('Error', 'Phone number should be in the format +489123456789.');
    return;
  }

  const descriptionRegex = /^.{0,255}$/;
  if (!descriptionRegex.test(description)) {
    Alert.alert('Error', 'Invalid description');
    return;
  }

  const priceRegex = /^\d+(\.\d{1,2})?$/;
  if (!priceRegex.test(price)) {
    Alert.alert('Error', 'Only number are available in shoe price');
    return;
  }
    // Pass the edited mySale data to the onSave callback
    route.params.onSave(editedSellProduct);

    // Navigate back
    navigation.goBack();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <View style={[styles.screen]}>
      <View style={[styles.topBar]}>
        <AntDesign name="left" style={styles.basicIcon} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Edit Product</Text>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={pickImage}>
          {profileImage ? (
            <Image source={profileImage } style={styles.profileImage} />
          ) : (
            <View style={styles.profileImagePlaceholder}>
              <AntDesign name="plus" size={24} color="white" />
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>

      <View style={styles.row}>
        <Text style={styles.leftText}>Title</Text>
        <TextInput
            style={styles.dataText}
            placeholder="Title"
            value={title}
            onChangeText={(text) => setTitle(text)}
            multiline={true}
          />
      </View>

      <View style={styles.row}>
        <Text style={styles.leftText}>Category</Text>
        <TextInput
          style={styles.dataText}
          placeholder="Category"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.leftText}>Brand</Text>
        <TextInput
          style={styles.dataText}
          placeholder="Brand"
          value={brand}
          onChangeText={(text) => setBrand(text)}
        />
      </View>


        <View style={styles.row}>
          <Text style={styles.leftText}>Size</Text>
          <TextInput
            style={styles.dataText}
            placeholder="Size"
            value={size}
            onChangeText={(text) => setSize(text)}
          />
        </View>


        <View style={styles.row}>
          <Text style={styles.leftText}>Condition</Text>
          <TextInput
            style={styles.dataText}
            placeholder="Condition"
            value={condition}
            onChangeText={(text) => setCondition(text)}
          />
        </View>


        <View style={styles.row}>
        <Text style={styles.leftText}>Description</Text>
        <TextInput
          style={styles.dataText}
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
          multiline={true}
        />
        </View>


        <View style={styles.row}>
        <Text style={styles.leftText}>Price</Text>
        <TextInput
          style={styles.dataText}
          placeholder="Price"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />
        </View>


        {/* <View style={styles.row}>
        <Text style={styles.leftText}>Parcel</Text>
        <TextInput
          style={styles.dataText}
          placeholder="Parcel"
          value={parcel}
          onChangeText={(text) => setParcel(text)}
        />

        </View> */}


        {/* <View style={styles.row}>
          <Text style={styles.leftText}>Pieces</Text>
          <TextInput
            style={styles.dataText}
            placeholder="Pieces"
            value={pieces}
            onChangeText={(text) => setPieces(text)}
          />
      </View> */}

      </ScrollView>
      <View style={[styles]}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? 'darkorange' : 'orange',
            },
          ]}
          onPress={onSave}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EditMySaleScreen;
