import React from "react";
import { ScrollView, Text, Dimensions, StyleSheet } from "react-native";
import PurposeBox from "../../components/PurposeBox";
import { purposeList } from "../../constants";

const { width, height } = Dimensions.get("window");

const PurposePickScreen = props => (
  <ScrollView style={styles.container}>
    {purposeList.map(purpose => (
      <PurposeBox
        key={purpose.name}
        purpose={purpose}
        checked={props.checkedPurpose === purpose.name ? true : false}
        opened={props.openedPurpose[purpose.name]}
        pressedPurpose={props.pressedPurpose}
        pressedPurposeContents={props.pressedPurposeContents}
      />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    backgroundColor: "#fafafa"
  }
});

export default PurposePickScreen;