// App.js
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Card from './Card';
import SearchSection from './SearchSection';
import ProductTag from './ProductTag'

const SearchRecommendation = () => {
  const cards = [
    { id: 1, title: 'Card 1', width: 150, height: 200 },
    { id: 2, title: 'Card 2', width: 180, height: 220 },
    { id: 3, title: 'Card 3', width: 130, height: 180 },
    { id: 4, title: 'Card 4', width: 160, height: 210 },
    { id: 5, title: 'Card 5', width: 200, height: 230 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {cards.map((card) => (
          <ProductTag
            key={card.id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: 'green',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingHorizontal: 10,
    backgroundColor:'#fff'
  },
});

export default SearchRecommendation;
