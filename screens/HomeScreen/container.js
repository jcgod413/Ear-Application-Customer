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
      />
    );
  }
  _reservation = () => {
    this.props.navigation.navigate("Reservation");
  };
}

export default Container;
