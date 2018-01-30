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
      <Image
        source={require("../../assets/images/logo-white.png")}
        resizeMode={Image.resizeMode.cover}
        style={styles.logo}
      />
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>회원가입</Text>
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
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 296,
    height: 205
  },
  buttonGroup: {
    marginTop: 41
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20,
    width: 320,
    height: 52,
    justifyContent: 'center',
  }
});

export default IntroScreen;
