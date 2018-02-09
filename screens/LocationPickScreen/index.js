import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { MapView } from "expo";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const LocationPickScreen = props => (
  <View style={styles.container}>
    <View style={styles.mapContainer}>
      <MapView
        style={styles.mapContainer}
        onRegionChange={props.onRegionChange}
        showsUserLocation={true}
        initialRegion={{
          latitude: props.latitude,
          longitude: props.longitude,
          latitudeDelta: 0.004,
          longitudeDelta: 0.001
        }}
      >
        <MapView.Marker
          key={1}
          coordinate={{ latitude: props.latitude, longitude: props.longitude }}
          title={"희망 위치"}
        />
      </MapView>
    </View>
    <View style={styles.locationContainer}>
      <TouchableOpacity style={styles.locationGroup}>
        <Ionicons name={"ios-pin-outline"} color={"#6a6a6a"} size={32} />
        <Text style={styles.locationText}>
          {"현위치:\n" + props.latitude + "\n" + props.longitude}
        </Text>
      </TouchableOpacity>
      <View style={styles.line} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: "#fafafa"
  },
  mapContainer: {
    flex: 1
  },
  locationContainer: {
    flex: 1
  },
  locationGroup: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20
  },
  locationText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4990e2",
    marginLeft: 20
  },
  line: {
    height: 1.5,
    backgroundColor: "rgba(0, 0, 0, 0.16)",
    marginLeft: 58,
    marginRight: 16,
    marginTop: 10
  },
  pin: {
    width,
    height: (height - 178) / 2,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LocationPickScreen;
