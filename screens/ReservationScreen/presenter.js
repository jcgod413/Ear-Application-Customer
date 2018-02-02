import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const ReservationScreen = props => (
    <View style={styles.container}>
        <Text>This is Reservation Screen!</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ReservationScreen;
