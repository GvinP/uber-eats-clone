import { View, Text, StyleSheet } from "react-native";
import React from "react";
import About from "../components/restaurantDetails/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

export default function RestaurantDetails({ route, navigation }: any) {
  return (
    <View style={{ position: "relative" }}>
      <About route={route} />
      <Divider width={1.8} style={styles.divider} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
  },
});
