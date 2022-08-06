import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { addToCartAC, ItemType } from "../../redux/reducers/cartReduser";
import { useAppSelector } from "../../redux/store";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
];

type MenuItemsPropsType = {
  restaurantName: string;
};

export default function MenuItems({ restaurantName }: MenuItemsPropsType) {
  const dispatch = useDispatch();
  const selectItem = (item: any, checkboxValue: boolean) =>
    dispatch(addToCartAC({ item, restaurantName, checkboxValue }));
  const items = useAppSelector((state) => state.cart.selectedItems.items);
  const isFoodInCart = (food: ItemType, items: ItemType[]) =>
    !!items.find((item) => item.title === food.title);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <Text>{JSON.stringify(items)}</Text> */}
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.container}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              innerIconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, items)}
            />
            <View style={styles.foodInfo}>
              <Text style={styles.title}>{food.title}</Text>
              <Text style={styles.description}>{food.description}</Text>
              <Text style={styles.price}>{food.price}</Text>
            </View>
            <Image source={{ uri: food.image }} style={styles.image} />
          </View>
          <Divider width={0.5} style={styles.divider} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  foodInfo: {
    width: 200,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
  description: {},
  price: {},
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  divider: {
    marginHorizontal: 20,
  },
});
