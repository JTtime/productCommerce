// components/Card.js

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aIgaCNXVAgIaIk6KWLPwWNee79n0VyTCEw&s'
const Card = ({ imageSource = imageUrl, text = "Munchies" }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imagecard}>
        <Image source={{uri:imageSource}} style={styles.image} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 130,
    width: 100,
    margin: 10,
    justifyContent:'space-between'
  },
  imagecard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    height:100,
    paddingHorizontal:10,
    paddingVertical:20
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    
  },
  text: {
    fontSize: 16,
    fontWeight:'600',
    padding: 10,
    color: "#333",
    textAlign: "center",
  },
});

export default Card;
