// components/SearchBar.js

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({ placeholder = "Search to add products", onChange }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Left Arrow Icon */}

      <Icon name="arrow-back" size={24} style={styles.icon} />

      {/* TextInput for Search */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        onChangeText={onChange}
      />

      {/* Right Search Icon */}

      <Icon name="search" size={24} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff", // White background
    borderRadius: 12, // Rounded corners
    borderWidth: 1, // Border width
    borderColor: "#ccc", // Light gray border color
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
    maxWidth: 340,
    shadowColor: "#000", // Shadow for elevation effect
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2, // Elevation for Android shadow
  },
  icon: {
    color: "#888",
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 0, // Aligns input with icons
  },
});

export default SearchBar;
