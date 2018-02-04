import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import LinedText from "../../components/LinedText";
import TimePicker from "react-native-simple-time-picker";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";

const { width, height } = Dimensions.get("window");

const DatePickScreen = props => (
  <View style={styles.container}>
    <Text style={styles.category}>희망일</Text>
    <View style={styles.pickerContainer}>
      <Ionicons name={"md-calendar"} color={"#8a8a8a"} size={32} />
      <View style={{ width: 28 }} />
      <LinedText text={props.selectedDateText} onPress={props.pressedDate} />
      <View style={{ width: 28 }} />
      <Ionicons name={"ios-arrow-down"} color={"#8a8a8a"} size={24} />
    </View>
    {props.dateMode === "Date" ? (
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          onDayPress={props.pickDate}
          hideExtraDays={true}
          markedDates={{
            [props.selectedDate]: {
              selected: true,
              selectedColor: "#4990e2"
            }
          }}
        />
      </View>
    ) : null}
    <Text style={styles.category}>희망시간</Text>
    <View style={styles.pickerContainer}>
      <Ionicons name={"md-calendar"} color={"#8a8a8a"} size={32} />
      <View style={{ width: 28 }} />
      <LinedText text={props.startTimeText} onPress={props.pressedStartTime} />
      <Text style={styles.text}>부터</Text>
      <LinedText text={props.endTimeText} onPress={props.pressedEndTime} />
      <Text style={styles.text}>까지</Text>
    </View>
    {props.dateMode === "StartTime" ? (
      <TimePicker
        selectedHours={props.startHour}
        selectedMinutes={props.startMinutes}
        onChange={props.pickStartTime}
      />
    ) : null}
    {props.dateMode === "EndTime" ? (
      <TimePicker
        selectedHours={props.endHour}
        selectedMinutes={props.endMinutes}
        onChange={props.pickEndTime}
      />
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: "#fafafa"
  },
  calendar: {
    width: 300,
    height: 300,
    backgroundColor: "#f2f2f2"
  },
  calendarContainer: {
    width,
    height: 300,
    alignItems: "center",
    backgroundColor: "#f2f2f2"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.7)",
    marginLeft: 3,
    marginRight: 18
  },
  category: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.3)",
    marginTop: 18,
    marginLeft: 80
  },
  pickerContainer: {
    flexDirection: "row",
    marginLeft: 28,
    marginTop: 8,
    alignItems: "center"
  }
});

export default DatePickScreen;
