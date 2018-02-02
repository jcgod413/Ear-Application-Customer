import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import FadeIn from "react-native-fade-in-image";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const HomeScreen = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <FadeIn>
        <Image
          source={require("../../assets/images/noProfile.png")}
          style={styles.avatar}
        />
      </FadeIn>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name={"ios-paper-outline"} color={"#4a4a4a"} size={25} />
          <Text style={styles.buttonText}>지난 예약</Text>
        </TouchableOpacity>
        <View style={styles.splitter} />
        <TouchableOpacity style={styles.button}>
          <Ionicons name={"ios-construct"} color={"#6a6a6a"} size={25} />
          <Text style={styles.buttonText}>설정</Text>
        </TouchableOpacity>
      </View>
    </View>

    <TouchableOpacity style={styles.reservationGroup}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.reservationText}>나의 예약</Text>
        <Text style={styles.reservationCount}>0</Text>
      </View>
      <Ionicons
        name={"ios-arrow-forward-outline"}
        color={"#4a4a4a"}
        size={25}
      />
    </TouchableOpacity>
    <View style={styles.reservationList} />
    <TouchableOpacity
      style={styles.reservationButton}
      onPress={props.reservation}
    >
      <Text style={styles.reservationButtonText}>예약하기</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 54,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#ffffff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    height: 72,
    width: 72,
    borderRadius: 36,
    marginRight: 15
  },
  buttonGroup: {
    marginLeft: 34,
    flexDirection: "row"
  },
  button: {
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonText: {
    fontSize: 14,
    color: "rgba(39, 39, 39, 0.87)",
    marginTop: 6,
    fontWeight: "bold"
  },
  splitter: {
    width: 1,
    height: 41,
    backgroundColor: "rgba(0, 0, 0, 0.16)",
    marginLeft: 20,
    marginRight: 20
  },
  reservationGroup: {
    width: width - 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 28,
    paddingTop: 10,
    paddingBottom: 10
  },
  reservationText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000"
  },
  reservationCount: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4990e2",
    marginLeft: 10
  },
  reservationList: {
    width: width - 40,
    height: 270,
    backgroundColor: "#aaa",
    marginTop: 30
  },
  reservationButton: {
    width: width - 40,
    height: 52,
    borderRadius: 5,
    backgroundColor: "#4990e2",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20
  },
  reservationButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  }
});

export default HomeScreen;
