import React from "react";
import PropTypes from "prop-types";
import FadeIn from "react-native-fade-in-image";
import {
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Rerservation = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text
        style={[
          styles.dDay,
          props.status === "waiting"
            ? styles.waiting
            : props.status === "confirm" ? styles.confirm : styles.complete
        ]}
      >
        {props.dDay}
      </Text>
      <Text style={styles.title}>
        {props.status === "waiting"
          ? "통역사 답변 대기중"
          : props.status === "confirm"
            ? "예약이 확정되었습니다."
            : "완료된 예약입니다."}
      </Text>
    </View>
    <View style={styles.body}>
      {props.status !== "waiting" ? (
        <View style={styles.row}>
          <FadeIn>
            <Image
              source={require("../../assets/images/noProfile.png")}
              style={styles.avatar}
            />
          </FadeIn>
          <View style={styles.textGroup}>
            <Text style={styles.subTitle}>{props.center}</Text>
            <Text style={styles.contents}>{props.translator}</Text>
          </View>
        </View>
      ) : null}
      {props.status !== "waiting" ? <View style={styles.line} /> : null}

      <View style={styles.row}>
        <View style={styles.icon}>
          <Ionicons name={"ios-calendar-outline"} color={"#515975"} size={22} />
        </View>
        <View style={styles.textGroup}>
          <Text style={styles.subTitle}>예약 일시</Text>
          <Text style={styles.contents}>{props.dateTime}</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <View style={styles.icon}>
          <Ionicons name={"ios-pin-outline"} color={"#515975"} size={22} />
        </View>
        <View style={styles.textGroup}>
          <Text style={styles.subTitle}>예약 장소</Text>
          <Text style={styles.contents}>{props.location}</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <View style={styles.icon}>
          <Ionicons name={"ios-contract-outline"} color={"#515975"} size={22} />
        </View>
        <View style={styles.textGroup}>
          <Text style={styles.subTitle}>예약 목적</Text>
          <Text style={styles.contents}>{props.purpose}</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <View style={styles.icon}>
          <Ionicons name={"ios-text-outline"} color={"#515975"} size={22} />
        </View>
        <View style={styles.textGroup}>
          <Text style={styles.subTitle}>추가사항</Text>
          <Text style={styles.contents}>{props.extraMessage}</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: "#fafafa",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 22,
    marginBottom: 20,
    paddingBottom: 17
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 34
  },
  dDay: {
    fontSize: 26,
    fontWeight: "bold"
  },
  waiting: {
    color: "#ffce4a"
  },
  confirm: {
    color: "#22c5a0"
  },
  complete: {
    color: "#aaaaaa"
  },
  title: {
    color: "rgba(46, 46, 46, 0.82)",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 14
  },
  body: {},
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 22
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#515975",
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    height: 1,
    backgroundColor: "#dfdfdf",
    marginTop: 13,
    marginBottom: 13
  },
  row: {
    flexDirection: "row"
  },
  textGroup: {
    marginLeft: 17
  },
  subTitle: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.38)"
  },
  contents: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#383e53",
    marginTop: 6
  }
});

export default Rerservation;
