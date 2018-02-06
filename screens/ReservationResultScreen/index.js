import React from "react";
import { View, Text, Switch, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const ReservationResultScreen = props => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>예약 일시</Text>
      <Text style={styles.contents}>
        {props.selectedDateText +
          "  " +
          (props.startHour < 10 ? "0" : null) +
          props.startHour +
          ":" +
          (props.startMinutes < 10 ? "0" : null) +
          props.startMinutes +
          " - " +
          (props.endHour < 10 ? "0" : null) +
          props.endHour +
          ":" +
          (props.endMinutes < 10 ? "0" : null) +
          props.endMinutes}
      </Text>
      <Text style={styles.title}>예약 장소</Text>
      <Text style={styles.contents}>장소</Text>
      <Text style={styles.title}>예약 목적</Text>
      <Text style={styles.contents}>{props.checkedPurpose}</Text>
      <Text style={styles.title}>추가사항</Text>
      <Text style={styles.contents}>{props.extraMessage}</Text>
    </View>

    <View style={styles.notiContainer}>
      <Text style={styles.notiText}>예약 확정 알람받기</Text>
      <Switch
        style={styles.notiSwitch}
        value={props.noti}
        onValueChange={props.notiSwitched}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    backgroundColor: "white"
  },
  infoContainer: {
    flex: 1,
    width,
    backgroundColor: "#f2f2f2",
    paddingTop: 14,
    paddingLeft: 25,
    paddingBottom: 32
  },
  title: {
    fontSize: 14,
    color: "rgba(34, 34, 34, 0.4)",
    marginTop: 13
  },
  contents: {
    fontSize: 16,
    color: "#222222",
    marginTop: 6
  },
  notiContainer: {
    width: width - 40,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  notiText: {
    fontSize: 20,
    color: "#222222",
    marginTop: 25,
    marginLeft: 28
  },
  notiSwitch: {
    marginTop: 22,
    marginBottom: 24
  }
});

export default ReservationResultScreen;
