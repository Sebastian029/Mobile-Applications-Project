import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const EditMySaleScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [parcel, setParcel] = useState('');
  const [pieces, setPieces] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    console.log("mySale from route.params:", route.params?.mySale);
  
    if (route.params?.mySale) {
      const { title, category, brand, size, condition, description, price, parcel, pieces, img } = route.params.mySale;
      setTitle(title);
      setCategory(category);
      setBrand(brand);
      setSize(size);
      setCondition(condition);
      setDescription(description);
      setPrice(price);
      setParcel(parcel);
      setPieces(pieces);
      setProfileImage(img);
    }
  }, [route.params?.mySale]);

  const onSave = () => {
    // Add your logic to save the edited mySale data
    const editedSellProduct = {
      title: title,
      category: category,
      brand: brand,
      size: size,
      condition: condition,
      description: description,
      price: price,
      parcel: parcel,
      pieces: pieces,
      img:  profileImage  ,
    };

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
        <Text style={styles.title}>Edit SellProduct</Text>
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
      <View style={styles.cialo}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Category"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Brand"
          value={brand}
          onChangeText={(text) => setBrand(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Size"
          value={size}
          onChangeText={(text) => setSize(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Condition"
          value={condition}
          onChangeText={(text) => setCondition(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Parcel"
          value={parcel}
          onChangeText={(text) => setParcel(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pieces"
          value={pieces}
          onChangeText={(text) => setPieces(text)}
        />
      </View>
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
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EditMySaleScreen;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    borderRadius: 60,
  },
  profileImagePlaceholder: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    borderRadius: 60,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  buttonText: {
    color: '#223263',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cialo: {},
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingTop: 45,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  basicIcon: {
    fontSize: 22,
    color: 'gray',
  },
  exitIcon: {
    fontSize: 22,
    color: 'red',
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    color: '#223263',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
