
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HeadText = ({ headingText = "SNACKS & DRINKS" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{headingText}</Text>
      <View style={styles.bar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    padding:10,
    width:'100%'
  },
  heading: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily:'serif',
    fontStyle:'normal',
    color:'black',
    marginRight:8 ,
  },
  bar: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginRight:30
  },
});



export default HeadText;