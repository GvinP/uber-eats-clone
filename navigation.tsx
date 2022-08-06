import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
import OrderComplited from "./screens/OrderComplited";

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
          />
          <Stack.Screen name="OrderComplited" component={OrderComplited} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
