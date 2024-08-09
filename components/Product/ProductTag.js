// components/SimpleCard.js

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductTag = ({ 
  imageSource = "https://via.placeholder.com/50",
  text = "Dairy milk"
}) => {
  return (
    <View style={styles.card}>
      
      <Text style={styles.text}>{text}</Text>

      
      <Image source={{ uri: imageSource }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent:'space-between',
    backgroundColor: "#fff", 
    borderRadius: 8,
    minWidth:150,
    padding: 4, 
    marginHorizontal: 5,
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2, 
    height:50
  },
  text: {
    fontSize: 12,
    color: "#000",
    fontWeight:'700',
    marginRight: 10, 
  },
  image: {
    width: 30, 
    height: 30,
    borderRadius: 4, 
  },
});

export default ProductTag;
