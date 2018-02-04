import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const PurposePickScreen = props => (
  <View style={styles.container}>
    <Text>PurposePickScreen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PurposePickScreen;
