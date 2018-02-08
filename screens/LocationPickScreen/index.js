import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const LocationPickScreen = props => (
  <View style={styles.container}>
    <Text>LocationPickScreen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: "white"
  }
});

export default LocationPickScreen;
