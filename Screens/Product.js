import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import SearchSection from "../components/Product/SearchSection";
import ProductList from "../components/Product/ProductList";
import InfoCard from "../components/Product/InfoCard";

const ProductScreen = () => {
  const [productData, setProductData] = useState([]);
  const fetchProductData = async () => {
    try {
      const data = await axios.get(
        "https://run.mocky.io/v3/55483640-263b-46e2-b181-4bf0b237fea6"
      );
      console.log(data);
      setProductData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <SearchSection
        title="Snacks and Drinks"
        subtitle="Select any product to add"
      />
      <ProductList />
      <InfoCard />
    </ScrollView>
  );
};

export default ProductScreen;
