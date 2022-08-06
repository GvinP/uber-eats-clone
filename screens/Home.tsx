import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs, { TabType } from "../components/home/HeaderTabs";
import { StatusBar } from "expo-status-bar";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  RestaurantType,
  localRestaurants,
} from "../components/home/RestaurantItems";
import { YELP_API_KEY } from "@env";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";
import SafeAreaView from "react-native-safe-area-view";

export default function Home({navigation}:any) {
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
      .then((json) =>
        setRestuarantData(
          json.businesses.filter((business: any) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar city={city} setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restuarantData={restuarantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs />
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
