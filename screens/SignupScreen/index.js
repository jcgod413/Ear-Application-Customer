import React from "react";
import {
  Text,
  View,
  StyleSheet
} from "react-native";

const SignupScreen = props => (
  <View style={styles.container}>
    <Text>Signup Screen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SignupScreen;
