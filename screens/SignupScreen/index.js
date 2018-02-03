import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  Dimensions,
  StatusBar,
  Picker,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SimplePicker from "react-native-simple-picker";

const { width, height } = Dimensions.get("window");

const SignupScreen = props => (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    <StatusBar barStyle={"dark-content"} />
    <View style={styles.header}>
      <Text style={styles.title}>회원가입</Text>
      <TouchableOpacity
        style={styles.close}
        onPress={() => props.navigation.goBack()}
      >
        <Ionicons name={"md-close"} color={"#4a4a4a"} size={24} />
      </TouchableOpacity>
    </View>
    <ScrollView>
      <View style={styles.body1}>
        <TextInput
          placeholder="이름을 입력하세요"
          style={styles.textInput}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
        <View style={styles.pickerContainer}>
          <View style={styles.picker}>
            <Text style={styles.pickerText}>거주시</Text>
            <Ionicons
              name={"ios-arrow-down"}
              style={styles.pickerIcon}
              color={"#bbb"}
              size={24}
            />
          </View>
          <View style={styles.picker}>
            <Text style={styles.pickerText}>거주구</Text>
            <Ionicons
              name={"ios-arrow-down"}
              style={styles.pickerIcon}
              color={"#bbb"}
              size={24}
            />
          </View>
        </View>
        <TextInput
          placeholder="이메일을 입력하세요 (선택)"
          style={styles.textInput}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
      </View>
      <View style={styles.body2}>
        <TextInput
          placeholder="휴대전화번호"
          style={styles.textInput}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
        <TextInput
          placeholder="인증번호"
          style={styles.textInput}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
        <TextInput
          placeholder="비밀번호"
          style={styles.textInput}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
        <TextInput
          placeholder="비밀번호 재확인"
          style={styles.textInput}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
      </View>
      <View style={styles.body3}>
        <Text style={styles.agreeText}>개인정보 수집이용 동의 (필수)</Text>
        <Text style={styles.moreText}>내용보기</Text>
      </View>

      <View style={{ flex: 1 }} />
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => {
          this._onPressButton("signup");
        }}
      >
        <Text style={styles.signupText}>가입하기</Text>
      </TouchableOpacity>
    </ScrollView>
  </KeyboardAvoidingView>
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
  body1: {
    width,
    alignItems: "center",
    marginTop: 24
  },
  body2: {
    width,
    alignItems: "center",
    marginTop: 11
  },
  body3: {
    width,
    alignItems: "flex-start",
    marginTop: 17,
    marginLeft: 33,
    marginBottom: 50
  },
  textInput: {
    height: 60,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    width: width - 40,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAFA",
    fontSize: 24
  },
  pickerContainer: {
    flexDirection: "row",
    marginHorizontal: 20
  },
  picker: {
    flex: 1,
    height: 60,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    width: width - 40,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    flexDirection: "row"
  },
  pickerText: {
    fontSize: 24,
    color: "#bbb"
  },
  pickerIcon: {
    marginLeft: 46
  },
  agreeText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24.0,
    color: "rgba(0, 0, 0, 0.38)"
  },
  moreText: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.38)",
    marginTop: 13,
    textDecorationLine: "underline"
  },
  signupButton: {
    height: 52,
    backgroundColor: "#4990e2",
    alignItems: "center",
    justifyContent: "center"
  },
  signupText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  }
});

export default SignupScreen;
