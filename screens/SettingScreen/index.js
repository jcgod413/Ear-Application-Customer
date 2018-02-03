import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SettingScreen = props => (
  <View style={styles.container}>
    <Text>Setting Screen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SettingScreen;
