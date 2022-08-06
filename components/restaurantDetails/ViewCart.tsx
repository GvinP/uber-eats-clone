import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { useAppSelector } from "../../redux/store";
import { Divider } from "react-native-elements";
import OrderItem from "./OrderItem";

export default function ViewCart({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);
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

  const checkoutModalContent = () => (
    <View style={styles.modalContainer}>
      <View style={styles.modalCheckoutContainer}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        {items.map((item, index) => (
          <OrderItem {...item} key={index} />
        ))}
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>Subtotal:</Text>
          <Text>{totalUsd}</Text>
        </View>
        <View style={styles.modalCheckoutButtonContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.modalCheckoutButton}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
            <Text
              style={{
                position: "absolute",
                right: 20,
                color: "white",
                fontSize: 15,
                top: 17,
              }}
            >
              {!!total && totalUsd}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {!!items.length && (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.viewCartButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.buttonText}>View Cart</Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUsd}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subtotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
  modalCheckoutButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  modalCheckoutButton: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 330,
    zIndex: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  viewCartButton: {
    marginTop: 20,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    marginRight: 30,
  },
});
