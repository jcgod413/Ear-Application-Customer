import React from "react";
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ReservationCompletionsListScreen = props => (
  <View style={styles.container} behavior="padding">
    <StatusBar barStyle="light-content" />
    <View style={styles.status} />
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.close}
        onPressOut={() => props.navigation.goBack()}
      >
        <Ionicons name={"md-close"} color={"white"} size={24} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
      <Text style={styles.headerTitle}>지난 예약</Text>
      <Text style={styles.reservationCount}>0</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  status: {
    width,
    height: 22,
    backgroundColor: "#4990e2"
  },
  header: {
    width,
    height: 96,
    backgroundColor: "#4990e2"
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  titleContainer: {
    marginLeft: 20,
    marginTop: 13,
    flexDirection: 'row',
  },
  close: {
    width: 24,
    height: 24,
    marginTop: 6,
    marginRight: 15,
    padding: 5,
    alignSelf: "flex-end"
  },
  reservationCount: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffce4a",
    marginLeft: 10
  }
});

export default ReservationCompletionsListScreen;
