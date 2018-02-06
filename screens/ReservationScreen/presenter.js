import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { monthNames, dayNames, dayNamesShort } from "../../constants";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import DatePickScreen from "../DatePickScreen";
import LocationPickScreen from "../LocationPickScreen";
import PurposePickScreen from "../PurposePickScreen";
import ExtraMessageScreen from "../ExtraMessageScreen";
import ReservationResultScreen from "../ReservationResultScreen";

LocaleConfig.locales["kr"] = {
  monthNames,
  dayNames,
  dayNamesShort
};
LocaleConfig.defaultLocale = "kr";

const { width, height } = Dimensions.get("window");

const progressStyles = {
  backgroundColor: "#4990e2",
  borderRadius: 0.5,
  borderColor: "#444c68"
};

const ReservationScreen = props => (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    <StatusBar barStyle="light-content" />
    <View style={styles.status} />
    <ProgressBarAnimated
      {...progressStyles}
      width={width}
      height={10}
      value={props.step * (100 / props.totalStep)}
      backgroundColorOnComplete="#444c68"
    />
    <View
      style={
        props.step < props.totalStep ? styles.header : styles.completeHeader
      }
    >
      <TouchableOpacity
        style={styles.close}
        onPressOut={() => props.navigation.goBack()}
      >
        <Ionicons name={"md-close"} color={"white"} size={24} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{props.getHeaderTitle(props.step)}</Text>
    </View>

    <View style={{ flex: 1 }}>
      {(() => {
        switch (props.step) {
          case 1:
            return <DatePickScreen {...props} />;
          case 2:
            return <LocationPickScreen {...props} />;
          case 3:
            return <PurposePickScreen {...props} />;
          case 4:
            return <ExtraMessageScreen {...props} />;
          default:
            return <ReservationResultScreen {...props} />;
        }
      })()}
    </View>

    <View style={styles.buttonGroup}>
      {(() => {
        switch (props.step) {
          case 1:
          case 2:
          case 3:
            return (
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.prevButton}
                  onPressOut={props.prev}
                >
                  <Text style={styles.buttonText}>이전</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nextButton}
                  onPressOut={props.next}
                >
                  <Text style={styles.buttonText}>다음</Text>
                </TouchableOpacity>
              </View>
            );
          case 4:
            return (
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.prevButton}
                  onPressOut={props.prev}
                >
                  <Text style={styles.buttonText}>이전</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nextButton}
                  onPressOut={props.next}
                >
                  <Text style={styles.buttonText}>
                    {props.extraMessage ? "완료" : "없어요. 완료할래요."}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          case 5:
            return (
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.nextButton}
                  onPressOut={() => props.navigation.goBack()}
                >
                  <Text style={styles.buttonText}>홈으로</Text>
                </TouchableOpacity>
              </View>
            );
        }
      })()}
    </View>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  status: {
    width,
    height: 22,
    backgroundColor: "#444c68"
  },
  progressGroup: {
    width,
    height: 8
  },
  progress: {
    backgroundColor: "red",
    borderRadius: 0,
    borderColor: "orange"
  },
  complete: {
    backgroundColor: "#b2bbda"
  },
  header: {
    width,
    height: 96,
    backgroundColor: "#444c68"
  },
  completeHeader: {
    width,
    height: 174,
    backgroundColor: "#444c68"
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    lineHeight: 35,
    marginLeft: 20,
    marginTop: 13
  },
  close: {
    width: 24,
    height: 24,
    marginTop: 6,
    marginRight: 15,
    padding: 5,
    alignSelf: "flex-end"
  },
  buttonGroup: {
    width,
    height: 52,
    flexDirection: "row",
    alignSelf: "baseline"
  },
  prevButton: {
    flex: 1,
    backgroundColor: "#22c5a0",
    alignItems: "center",
    justifyContent: "center"
  },
  nextButton: {
    flex: 2,
    backgroundColor: "#4990e2",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  }
});

export default ReservationScreen;
