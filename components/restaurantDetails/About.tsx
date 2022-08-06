import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function About({ route }: any) {
  const { name, image, price, rating, categories, reviwes } = route.params;
  const formattedCategories = categories
    .map((cat: any) => cat.title)
    .join(" \u00B7 ");
  const description = `${formattedCategories} \u00B7 ${price} \u00B7 🎫 \u00B7 ${rating} ⭐ (${reviwes})`;
  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180,
  },
  title: {
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    fontSize: 15,
    fontWeight: "400",
    marginTop: 10,
    marginHorizontal: 15,
  },
});
