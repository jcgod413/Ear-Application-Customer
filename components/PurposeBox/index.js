import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const PurposeBox = props => (
  <View style={styles.container}>
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.checkContainer}
        onPress={props.pressedPurpose.bind(this, props.purpose.name)}
      >
        {props.checked ? (
          <Image
            style={styles.checkedBox}
            source={require("../../assets/images/checkbox_on.png")}
          />
        ) : (
          <View style={styles.checkBox} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nameGroup}
        onPress={props.pressedContents.bind(this, props.purpose.name)}
      >
        <Text style={props.checked ? styles.checkedName : styles.name}>
          {props.purpose.name}
        </Text>
        <Ionicons
          name={"ios-arrow-down"}
          color={"rgba(0, 0, 0, 0.5)"}
          size={24}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.line} />
    {props.opened ? (
      <View style={styles.contentsContainer}>
        <Text style={styles.contents}>{props.purpose.contents}</Text>
      </View>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    width: width - 40,
    marginTop: 14,
    marginLeft: 20,
    marginRight: 20
  },
  checkContainer: {
    padding: 3,
    flexDirection: "row"
  },
  checkBox: {
    width: 20,
    height: 20,
    opacity: 0.54,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#010101"
  },
  checkedBox: {
    width: 20,
    height: 20
  },
  name: {
    fontSize: 24,
    color: "rgba(0, 0, 0, 0.5)",
    marginRight: 3,
    marginLeft: 20
  },
  checkedName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4990e2",
    marginRight: 3,
    marginLeft: 20
  },
  line: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 13
  },
  nameGroup: {
    width: width - 80,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  contentsContainer: {
    backgroundColor: "#f2f2f2"
  },
  contents: {
    fontSize: 16,
    color: "#363636",
    marginTop: 32,
    marginLeft: 26,
    marginRight: 26,
    marginBottom: 32
  }
});

export default PurposeBox;
