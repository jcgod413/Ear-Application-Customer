import React from "react";
import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const LoginScreen = props => (
  <View style={styles.container}>
    <Text>Login Screen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LoginScreen;
