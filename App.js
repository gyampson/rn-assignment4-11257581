import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./components/LoginScreen";
import SearchComponent from "./components/SearchComponent";
import Home from "./components/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.navigationContainer}>
      <Stack.Navigator style={styles.login}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
