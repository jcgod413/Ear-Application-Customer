import React, { Component } from "react";
import { Alert } from "react-native";
import LoginScreen from "./presenter";

class Container extends Component {
  state = {
    phone: "",
    password: "",
    isSubmitting: false
  };
  render() {
    return (
      <LoginScreen
        {...this.props}
        {...this.state}
        changePhone={this._changePhone}
        changePassword={this._changePassword}
        submit={this._submit}
      />
    );
  }
  _changePhone = text => {
    this.setState({ phone: text });
  };
  _changePassword = text => {
    this.setState({ password: text });
  };
  _submit = async () => {
    const { phone, password, isSubmitting } = this.state;
    const { login } = this.props;
    if (!isSubmitting) {
      if (phone && password) {
        this.setState({
          isSubmitting: true
        });
        const loginResult = await login(phone, password);
        if (!loginResult) {
          Alert.alert("Something went wrong, try again");
          this.setState({ isSubmitting: false });
        }
      } else {
        Alert.alert("All fields are required");
      }
    }
  };
}

export default Container;
