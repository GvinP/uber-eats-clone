import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function ViewCart({ navigation, restaurantName }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.viewCartButton}>
          <Text style={styles.buttonText}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 90,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  viewCartButton: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
