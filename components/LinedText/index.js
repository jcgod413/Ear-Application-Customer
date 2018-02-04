import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LinedText = props => (
  <TouchableOpacity onPressOut={props.onPress}>
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
    <View style={styles.line} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4990e2",
    marginLeft: 3,
    marginRight: 3
  },
  line: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  }
});

export default LinedText;
