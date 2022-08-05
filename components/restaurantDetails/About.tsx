import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Traditional Georgian Cuisine",
  image: "https://winesgeorgia.com/wp-content/uploads/2020/07/Foods1.jpeg",
  price: "$$",
  reviwes: "1500",
  rating: 4.5,
  categories: [{ title: "Georgian" }, { title: "Comfort Food" }],
};

const { name, image, price, rating, categories, reviwes } = yelpRestaurantInfo;
// const formattedCategories = categories.map((cat) => cat.title).join(" \u00B7 ");
// const description = `${formattedCategories} \u00B7 ${price} \u00B7 🎫 \u00B7 ${rating} ⭐ (${reviwes})`;

export default function About({ route }: any) {
  const formattedCategories = route.params.categories.map((cat:any) => cat.title).join(" \u00B7 ");
  const description = `${formattedCategories} \u00B7 ${route.params.price} \u00B7 🎫 \u00B7 ${route.params.rating} ⭐ (${route.params.reviwes})`;
  return (
    <View>
      <Image source={{ uri: route.params.image }} style={styles.image} />
      <Text style={styles.title}>{route.params.name}</Text>
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
