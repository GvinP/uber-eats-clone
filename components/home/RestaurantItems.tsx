import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants: Array<RestaurantType> = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    review_count: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    review_count: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    review_count: 700,
    rating: 4.9,
  },
];

export type RestaurantType = {
  name: string;
  image_url: string;
  categories: string[];
  price: "$$";
  review_count: number;
  rating: number;
};

export type RestaurantItemsType = {
  restuarantData: RestaurantType[];
  navigation: any;
};

export default function RestaurantItems({
  navigation,
  restuarantData,
}: RestaurantItemsType) {
  return (
    <>
      {restuarantData &&
        restuarantData.map((restuarant, index) => (
          <TouchableOpacity
            activeOpacity={1}
            style={{ marginBottom: 30 }}
            onPress={() =>
              navigation.navigate("RestaurantDetails", {
                name: restuarant.name,
                image: restuarant.image_url,
                price: restuarant.price,
                reviwes: restuarant.review_count,
                rating: restuarant.rating,
                categories: restuarant.categories,
              })
            }
            key={index}
          >
            <View style={styles.restaurantItem}>
              <RestaurantImage imageUrl={restuarant.image_url} />
              <RestaurantInfo
                title={restuarant.name}
                rating={restuarant.rating}
              />
            </View>
          </TouchableOpacity>
        ))}
    </>
  );
}

type RestaurantImagePropsType = {
  imageUrl: string;
};

const RestaurantImage = ({ imageUrl }: RestaurantImagePropsType) => (
  <>
    <Image
      source={{
        uri: imageUrl || "https://via.placeholder.com/140x100",
      }}
      style={styles.image}
    />
    <TouchableOpacity style={styles.heartIcon}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

type RestaurantInfoPropsType = {
  title: string;
  rating: number;
};

const RestaurantInfo = ({ title, rating }: RestaurantInfoPropsType) => (
  <View style={styles.restaurantInfo}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.deliveryTime}>35-45 &#183; min</Text>
    </View>
    <View style={styles.rating}>
      <Text>{rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  restaurantItem: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 180,
  },
  heartIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  restaurantInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  deliveryTime: {
    fontSize: 13,
    color: "gray",
  },
  rating: {
    backgroundColor: "#eee",
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
