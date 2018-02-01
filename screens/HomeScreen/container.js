import React, { Component } from "react";
import PropTypes from "prop-types";
import HomeScreen from "./presenter";

class Container extends Component {
  render() {
    const { profile, getOwnProfile } = this.props;
    return <HomeScreen profileObject={profile} refresh={getOwnProfile} />;
  }
}

export default Container;
