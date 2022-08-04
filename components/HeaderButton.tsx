import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TabType } from "./HeaderTabs";

type HeaderButtonPropsType = {
  title: TabType;
  activeTab: TabType;
  setActiveTab: (activeTab: TabType) => void;
};

export default function HeaderButton(props: HeaderButtonPropsType) {
  return (
    <TouchableOpacity
      style={styles(props).button}
      onPress={() => props.setActiveTab(props.title)}
    >
      <Text style={styles(props).buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = ({ activeTab, title }: HeaderButtonPropsType) =>
  StyleSheet.create({
    button: {
      backgroundColor: activeTab === title ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    },
    buttonText: {
      color: activeTab === title ? "white" : "black",
      fontSize: 15,
      fontWeight: "900",
    },
  });
