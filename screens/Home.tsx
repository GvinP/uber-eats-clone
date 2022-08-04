import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs, { TabType } from "../components/HeaderTabs";
import { StatusBar } from "expo-status-bar";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  RestaurantType,
  localRestaurants,
} from "../components/RestaurantItems";
import { YELP_API_KEY } from "@env";

export default function Home() {
  const [restuarantData, setRestuarantData] =
    useState<Array<RestaurantType>>(localRestaurants);
  const [city, setCity] = useState<string>("");
  const [activeTab, setActiveTab] = useState<TabType>("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${
      city || "Hollywood"
    }`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestuarantData(json.businesses.filter((business:any) =>business.transactions.includes(activeTab.toLowerCase()))));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar city={city} setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {/* <Text>{JSON.stringify(restuarantData)}</Text> */}
        <RestaurantItems restuarantData={restuarantData} />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  header: {
    backgroundColor: "white",
    padding: 15,
  },
});
