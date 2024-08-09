import { StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import HeadText from "./HeadText";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";

const data = [1, 2, 3, 4, 5, 6, 7];

const ProductList = ({category,imageUri,text}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetail");
      }}
    >
      <HeadText headingText={category}  />
      <View style={styles.gridContainer}>
        {data.map((item) => (
          <Card key={item} imageSource={imageUri} text={text}/>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default ProductList;
