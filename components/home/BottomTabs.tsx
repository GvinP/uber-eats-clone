import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View style={styles.container}>
      <Icon icon={"home"} text={"Home"} />
      <Icon icon={"search"} text={"Browse"} />
      <Icon icon={"shopping-bag"} text={"Grocery"} />
      <Icon icon={"receipt"} text={"Orders"} />
      <Icon icon={"user"} text={"Account"} />
    </View>
  );
}

type IconPropsType = {
  icon: any;
  text: string;
};

const Icon = ({ icon, text }: IconPropsType) => (
  <TouchableOpacity>
    <FontAwesome5 name={icon} size={25} style={styles.icon} />
    <Text>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  icon: {
    marginBottom: 3,
    alignSelf: "center",
  },
});
