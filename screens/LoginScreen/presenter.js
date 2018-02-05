import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const LoginScreen = props => (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    <StatusBar barStyle={"dark-content"} />
    <View style={styles.header}>
      <Text style={styles.title}>로그인</Text>
      <TouchableOpacity
        style={styles.close}
        onPressOut={() => props.navigation.goBack()}
      >
        <Ionicons name={"md-close"} color={"#4a4a4a"} size={24} />
      </TouchableOpacity>
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
        onChangeText={props.changePhone}
      />
      {props.phone ? (
        <View style={[styles.line, styles.active]} />
      ) : (
        <View style={[styles.line, styles.inactive]} />
      )}
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholderTextColor="#b5b5b5"
        placeholder="비밀번호를 입력하세요"
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={props.changePassword}
        returnKeyType={"send"}
        onSubmitEditing={props.submit}
      />
      {props.password ? (
        <View style={[styles.line, styles.active]} />
      ) : (
        <View style={[styles.line, styles.inactive]} />
      )}
    </View>
    <Text style={styles.footerText}>비밀번호를 잊으셨나요?</Text>
    <View style={{ flex: 1 }} />
    <View style={styles.footer}>
      <TouchableOpacity
        style={[
          styles.signinButton,
          props.isInputed ? styles.activeButton : styles.inactiveButton
        ]}
        onPressOut={props.submit}
      >
        {props.isSubmitting ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text
            style={[
              styles.signinText,
              props.isInputed ? null : styles.inactiveButtonText
            ]}
          >
            로그인
          </Text>
        )}
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
);

LoginScreen.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  phone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changePhone: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

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
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1
  },
  active: {
    borderColor: "#4990e2"
  },
  inactive: {
    borderColor: "rgba(0, 0, 0, 0.06)"
  },
  activeButton: {
    backgroundColor: "#4990e2"
  },
  inactiveButton: {
    backgroundColor: "#d8d8d8"
  },
  inactiveButtonText: {
    color: "#9b9b9b"
  },
  footer: {
    marginTop: 3,
    alignSelf: "stretch",
    flexDirection: "column"
  },
  signinButton: {
    height: 52,
    alignItems: "center",
    justifyContent: "center"
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
