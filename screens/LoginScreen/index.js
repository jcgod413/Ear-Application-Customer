import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  Dimensions,
  StatusBar,
  TouchableHighlight
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const LoginScreen = props => (
  <View style={styles.container}>
    <StatusBar barStyle={"dark-content"} />
    <View style={styles.header}>
      <Text style={styles.title}>로그인</Text>
      <TouchableHighlight
        style={styles.close}
        onPress={() => props.navigation.goBack()}
      >
        <Ionicons name={"md-close"} color={"#4a4a4a"} size={24} />
      </TouchableHighlight>
    </View>
    <View>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#b5b5b5"
        placeholder="휴대전화번호를 입력하세요"
        autoCapitalize={"none"}
        autoCorrect={false}
        keyboardType="numeric"
        autoFocus={true}
      />
      <View style={styles.line} />

      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholderTextColor="#b5b5b5"
        placeholder="비밀번호를 입력하세요"
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={true}
      />
      <View style={styles.line} />
    </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>비밀번호를 잊으셨나요?</Text>
      <TouchableHighlight
        style={styles.signinButton}
        onPress={() => {
          this._onPressButton("signin");
        }}
      >
        <Text style={styles.signinText}>로그인</Text>
      </TouchableHighlight>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: "#f5f5f5",
    justifyContent: "flex-start"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  title: {
    width: 74,
    height: 30,
    marginTop: 25,
    marginLeft: 20,
    fontWeight: "800",
    fontSize: 28,
    letterSpacing: 0,
    textAlign: "left",
    color: "#4a4a4a"
  },
  close: {
    marginTop: 14,
    marginRight: 24
  },
  inputView: {
    alignSelf: "stretch"
  },
  inputLabel: {
    width: 53,
    height: 16,
    fontSize: 14,
    marginBottom: 7,
    letterSpacing: 0,
    color: "#4a4a4a"
  },
  textInput: {
    width,
    height: 45,
    fontSize: 24,
    letterSpacing: 0,
    textAlign: "left",
    textAlignVertical: "top",
    color: "#4a4a4a",
    marginTop: 26,
    marginBottom: 4,
    marginHorizontal: 20
  },
  line: {
    width: width - 40,
    height: 2,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.06)",
    marginHorizontal: 20,
    marginVertical: 5
  },
  footer: {
    flex: 1,
    marginTop: 3,
    alignSelf: "stretch",
    flexDirection: "column"
  },
  signinButton: {
    height: 52,
    borderRadius: 5,
    backgroundColor: "#4990e2",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 23,
    marginLeft: 20,
    marginRight: 20
  },
  signinText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  footerText: {
    height: 19,
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    alignSelf: "stretch",
    marginTop: 14,
    color: "#4a4a4a",
    textDecorationLine: "underline"
  }
});

export default LoginScreen;
