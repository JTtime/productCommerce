import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SearchResultItem = ({
  imageUri,
  name = "Snickers Peanut chocolate bar",
  quantity = "22g",
}) => {
  return (
    <View style={{backgroundColor:'#fff', height:60, flexDirection:'row'}}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.text}>
        {name} - {quantity}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    backgroundColor:'grey'
  },
  text: {
    fontSize: 12,
    fontWeight: "300",
    padding: 10,
    color: "#000",
    textAlign: "center",
  },
});
export default SearchResultItem;
