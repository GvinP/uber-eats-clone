import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ItemType } from "../../redux/reducers/cartReduser";
import { Divider } from "react-native-elements";

export default function OrderItem(props: ItemType) {
  return (
    <View style={styles.orederContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  orederContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    opacity: 0.7,
  },
});
