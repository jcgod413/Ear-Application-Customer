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
import Reservation from "../../components/Reservation";

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
        <Text style={styles.reservationCount}>1</Text>
      </View>
    </View>
    <ScrollView>
      <Reservation
        status={"complete"}
        dDay={"D-0"}
        center={"서초 수화통역센터"}
        translator={"임윤철 수화통역사"}
        dateTime={"2018년 1월 12일 12:00 - 15:00"}
        location={"서울대학병원 이비인후과"}
        purpose={"의료"}
        extraMessage={"정기 진료입니다."}
      />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e4e4e4"
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
    color: "white"
  },
  titleContainer: {
    marginLeft: 20,
    marginTop: 13,
    flexDirection: "row"
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
