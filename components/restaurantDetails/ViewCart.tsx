import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../redux/store";
import firebase from "../../firebase";
import OrderItem from "./OrderItem";
import { useAppNavigation } from "../../screens/Types";
import LottieView from "lottie-react-native";

export default function ViewCart() {
  const navigation = useAppNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const animation = useRef<LottieView | null>(null);
  const { items, restaurantName } = useAppSelector(
    (state) => state.cart.selectedItems
  );

  useEffect(() => {
    return () => {
      setLoading(false);
      animation.current?.reset();
    };
  }, []);
  useEffect(() => {
    animation.current?.play();
    // return ()=>setLoading(false)
  }, [loading]);
  const total = items.reduce(
    (acc, item) => acc + +item.price.replace("$", ""),
    0
  );

  const totalUsd = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const addOrderToFirebase = () => {
    const db = firebase.firestore();
    db.collection("orders").add({
      item: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setModalVisible(false);
    navigation.navigate("OrderComplited");
  };

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
            onPress={addOrderToFirebase}
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
              onPress={() => {
                setLoading(true);
                // animation.current?.play();
                setTimeout(() => {
                  setModalVisible(true);
                  setLoading(false);
                }, 2000);
              }}
            >
              <Text style={styles.buttonText}>View Cart</Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUsd}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {loading && (
        <View style={styles.loadingContainer}>
          <LottieView
            ref={animation}
            source={require("../../assets/animations/scanner.json")}
            style={styles.loading}
            // autoPlay
            speed={3}
            loop
          />
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
  loadingContainer: {
    // flex: 1,
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  loading: {
    position: "absolute",
    height: 200,
    alignSelf: 'center',
    // opacity: 0.8,
    // backgroundColor: "transparent",
    // left: 40,
    top: 80,
  },
});
