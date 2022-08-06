import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { addToCartAC, ItemType } from "../../redux/reducers/cartReduser";
import { useAppSelector } from "../../redux/store";

type MenuItemsPropsType = {
  restaurantName: string;
  hideCheckbox?: boolean;
  foods: ItemType[];
};

export default function MenuItems({
  foods,
  restaurantName,
  hideCheckbox = false,
}: MenuItemsPropsType) {
  const dispatch = useDispatch();
  const selectItem = (item: ItemType, checkboxValue: boolean) =>
    dispatch(addToCartAC({ item, restaurantName, checkboxValue }));
  const items = useAppSelector((state) => state.cart.selectedItems.items);
  const isFoodInCart = (food: ItemType, items: ItemType[]) =>
    !!items.find((item) => item.title === food.title);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.container}>
            {!hideCheckbox && (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                innerIconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, items)}
              />
            )}
            <View style={{ ...styles.foodInfo }}>
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
