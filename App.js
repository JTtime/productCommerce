// App.js

import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProductCategoryScreen from "./Screens/ProductCategory";
import ProductScreen from "./Screens/Product";
import SearchScreen from "./Screens/SearchScreen";
import MyTabs from "./components/NavBar";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <MyTabs />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    paddingTop: 30,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});

export default App;
