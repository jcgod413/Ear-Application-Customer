import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const ExtraMessageScreen = props => (
  <View style={styles.container}>
    <Text>ExtraMessageScreen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ExtraMessageScreen;
