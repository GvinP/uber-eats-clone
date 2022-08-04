import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import HeaderButton from "./HeaderButton";

export type TabType = "Delivery" | "Pickup";

type HeaderTabsPropsType = {
  activeTab: TabType;
  setActiveTab: (activeTab: TabType) => void;
};

export default function HeaderTabs({
  activeTab,
  setActiveTab,
}: HeaderTabsPropsType) {
  return (
    <View style={styles.container}>
      <HeaderButton
        title="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
