// SearchScreen.js
import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/Product/SearchBar";
import SearchResultItem from "../components/Product/SearchResultItem";
import SearchRecommendation from "../components/Product/SearchRecommandation";

const SearchScreen = () => {
  const [isActive, setIsActive] = useState(false);
  const onChange = (e) => {
    if (e.length > 0) setIsActive(true);
    else setIsActive(false);
  };
  return (
    <View style={styles.container}>
      <SearchBar onChange={onChange} />
      {/* Optional: You can include SearchRecommendations here if needed */}
      {!isActive && (
        <View>
          <SearchRecommendation />
        </View>
      )}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {isActive && (
          <View>
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  scrollContainer: {
    height: 100,
    alignItems: "center",
  },
  resultHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SearchScreen;
