import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ReservationListScreen = props => (
  <View style={styles.container}>
    <Text>Reservation List Screen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ReservationListScreen;
