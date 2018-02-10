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

const IntroScreen = props => (
  <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <ImageBackground
      source={require("../../assets/images/splash.png")}
      resizeMode={Image.resizeMode.stretch}
      style={styles.background}
    >
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.buttonText1}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => props.navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText2}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  background: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonGroup: {
    marginTop: 250
  },
  button1: {
    width: 320,
    height: 52,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  buttonText1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#002f8d"
  },
  button2: {
    width: 320,
    height: 52,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 23
  },
  buttonText2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff"
  },
});

export default IntroScreen;
