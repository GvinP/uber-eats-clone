import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../redux/store";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetails/MenuItems";

export default function OrderComplited() {
  const { items, restaurantName } = useAppSelector(
    (state) => state.cart.selectedItems
  );
  const total = items.reduce(
    (acc, item) => acc + +item.price.replace("$", ""),
    0
  );

  const totalUsd = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  const animation = useRef<LottieView | null>(null);
  const animationCooking = useRef<LottieView | null>(null);
  useEffect(() => {
    animation.current?.play();
    animationCooking.current?.play();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        ref={animation}
        source={require("../assets/animations/check-mark.json")}
        style={styles.greenMark}
        speed={0.5}
        loop={false}
      />
      <View>
        <Text style={styles.text}>
          Your order at {restaurantName} has been placed for {totalUsd}
        </Text>
      </View>
      <MenuItems
        restaurantName={restaurantName}
        hideCheckbox={true}
        foods={items}
      />
      <LottieView
        ref={animationCooking}
        source={require("../assets/animations/cooking.json")}
        style={styles.cooking}
        autoPlay
        speed={0.5}
        loop
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  greenMark: {
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    marginHorizontal: 20,
  },
  cooking: {
    height: 200,
    backgroundColor: "#eee",
    alignSelf: "center",
    marginBottom: 10,
  },
});
