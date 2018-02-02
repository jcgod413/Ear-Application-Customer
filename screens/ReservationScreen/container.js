import React, { Component } from "react";
import PropTypes from "prop-types";
import ReservationScreen from "./presenter";

class Container extends Component {
  state = {
    step: 0,
    totalStep: 4
  };
  render() {
    return (
      <ReservationScreen
        {...this.props}
        {...this.state}
        next={this._next}
        prev={this._prev}
        getHeaderTitle={this._getHeaderTitle}
      />
    );
  }
  _next = () => {
    if (this.state.step < this.state.totalStep) {
      this.setState({
        step: this.state.step + 1
      });
    }
  };
  _prev = () => {
    if (this.state.step > 0) {
      this.setState({
        step: this.state.step - 1
      });
    }
  };
  _getHeaderTitle = step => {
    switch (step) {
      case 0:
        return "통역일시를 선택해주세요";
      case 1:
        return "통역장소를 입력해주세요";
      case 2:
        return "통역목적을 선택해주세요";
      case 3:
        return "남기실 메시지가 있나요?";
      case 4:
        return (
          "예약이 접수되었습니다.\n" +
          "0명의 수화통역사의 답변을\n" +
          "기다리는 중입니다."
        );
    }
  };
}

export default Container;
