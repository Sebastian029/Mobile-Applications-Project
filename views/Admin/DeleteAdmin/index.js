import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";

const AdminDeleteScreen = ({ navigation, route }) => {
  const { mySale, onDelete } = route.params;

  const handleDelete = () => {
    if (onDelete) {
      onDelete(mySale); // Przekazanie wartości 3 jako checkValue
    }

    navigation.goBack();
  };

  return (
    <View style={styles.notFoundView}>
      <Image source={require("../../../assets/exploreImages/warning.png")} />
      <Text style={styles.titleText}>Warning!</Text>
      <View>
        <Text style={styles.upperText}>
          Are you sure about sending the product back for repair?
        </Text>
        <Text style={styles.upperText}>Changes will be irreversible</Text>
      </View>
      <Pressable
        style={[styles.backButton, { backgroundColor: "#D9CA44" }]}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>Return</Text>
      </Pressable>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
    </View>
  );
};

// ... reszta kodu

export default AdminDeleteScreen;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  notFoundView: {
    paddingTop: "10%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40%",
  },
  backButton: {
    width: "80%",
    height: "15%",
    backgroundColor: "#31263E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  upperText: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
  titleText: {
    fontSize: 25,
    color: "#44355B",
    fontWeight: "bold",
  },
});
