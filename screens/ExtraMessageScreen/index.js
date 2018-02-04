import React from "react";
import { View, Text, TextInput, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const ExtraMessageScreen = props => (
  <View style={styles.container}>
    <TextInput
      style={styles.textInput}
      autoCapitalize={"none"}
      autoCorrect={false}
      autoFocus={true}
      keyboardType={"default"}
      onChangeText={props.inputExtraMessage}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    width,
    fontSize: 24,
    letterSpacing: 0,
    textAlign: "left",
    textAlignVertical: "top",
    color: "#4a4a4a",
    marginTop: 20,
    marginLeft: 40
  },
});

export default ExtraMessageScreen;
