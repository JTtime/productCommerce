// components/SearchBar.js

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({ placeholder = "Search to add products", onChange }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      

      <Icon name="arrow-back" size={24} style={styles.icon} />

      
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        onChangeText={onChange}
      />

      

      <Icon name="search" size={24} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
    maxWidth: 340,
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    color: "#888",
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 0, 
  },
});

export default SearchBar;
