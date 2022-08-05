import { View, Text, StyleSheet } from "react-native";
import React from "react";
import About from "../components/restaurantDetails/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "../components/restaurantDetails/MenuItems";

export default function RestaurantDetails({route}: any) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={styles.divider} />
      <MenuItems />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
  },
});
