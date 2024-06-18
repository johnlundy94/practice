import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LoginScreen from "./components/LoginScreen";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <LoginScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
