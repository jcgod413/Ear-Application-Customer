import React, { Component } from "react";
import { Alert } from "react-native";
import LoginScreen from "./presenter";

class Container extends Component {
  state = {
    phone: "",
    password: "",
    isInputed: false,
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

    if (text && this.state.password) {
      this.setState({ isInputed: true });
    } else {
      this.setState({ isInputed: false });
    }
  };
  _changePassword = text => {
    this.setState({ password: text });

    if (text && this.state.phone) {
      this.setState({ isInputed: true });
    } else {
      this.setState({ isInputed: false });
    }
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
