import { View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { GOOGLE_PLACES_API_KEY } from "@env";

type SearchBarPropsType = {
  city: string;
  setCity: (city: string) => void;
};

export default function SearchBar({ city, setCity }: SearchBarPropsType) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.textInputContainer}>
        <View style={styles.renderLeftButton}>
          <Ionicons name="location-sharp" size={24} />
        </View>
        <TextInput style={styles.textInput} placeholder={"Search"} value={city} onChangeText={setCity} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.renderRightButton}>
          <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
          <Text>Search</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        query={{key: 'AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4'}}
        onPress={(data)=>{
          console.log(data)
        }}
        styles={{
          textInput: styles.textInput,
          textInputContainer: styles.textInputContainer,
        }}
        renderLeftButton={() => (
          <View style={styles.renderLeftButton}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.renderRightButton}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  textInput: {
    width: "65%",
    height: 46,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginTop: 7,
    fontWeight: "700",
  },
  textInputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  renderLeftButton: {
    marginLeft: 10,
  },
  renderRightButton: {
    flexDirection: "row",
    marginRight: 8,
    backgroundColor: "white",
    padding: 9,
    borderRadius: 30,
    alignItems: "center",
  },
});
