import React, { Component } from "react";
import PropTypes from "prop-types";
import HomeScreen from "./presenter";

class Container extends Component {
  render() {
    const { profile, getOwnProfile } = this.props;
    return (
      <HomeScreen
        {...this.props}
        {...this.state}
        profileObject={profile}
        refresh={getOwnProfile}
        reservation={this._reservation}
        reservationList={this._reservationList}
        setting={this._setting}
      />
    );
  }
  _reservation = () => {
    this.props.navigation.navigate("Reservation");
  };
  _reservationList = () => {
    this.props.navigation.navigate("ReservationList");
  };
  _setting = () => {
    this.props.navigation.navigate("Setting");
  };
}

export default Container;
