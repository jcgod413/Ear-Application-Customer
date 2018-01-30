import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import AppContainer from "./components/AppContainer";
import IntroScreen from "./screens/IntroScreen";

class App extends React.Component {
  state = {
    isLoadingComplete: false
  };
  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return <IntroScreen />;
  }
  _loadAssetsAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require("./assets/images/logo-white.png")]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font
      })
    ]);
  };
  _handleLoadingError = error => {
    console.error(error);
  };
  _handleFinishLoading = async () => {
    this.setState({
      isLoadingComplete: true
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
