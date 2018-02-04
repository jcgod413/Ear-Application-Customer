import React, { Component } from "react";
import PropTypes from "prop-types";
import ReservationScreen from "./presenter";
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["kr"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  dayNames: [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요알",
    "일요일"
  ],
  dayNamesShort: ["월", "화", "수", "목", "금", "토", "일"]
};

LocaleConfig.defaultLocale = "kr";

class Container extends Component {
  constructor(props) {
    super(props);
    const today = this._getCurrentDate();
    const todayText = this._changeDateToText(today);

    this.state = {
      step: 1,
      totalStep: 5,
      selectedDate: today,
      selectedDateText: todayText,
      dateMode: "Date",
      startHour: 0,
      startMinutes: 0,
      endHour: 0,
      endMinutes: 0,
      startTimeText: "00:00",
      endTimeText: "00:00"
    };
  }
  render() {
    return (
      <ReservationScreen
        {...this.props}
        {...this.state}
        next={this._next}
        prev={this._prev}
        getHeaderTitle={this._getHeaderTitle}
        pickDate={this._pickDate}
        pressedDate={this._pressedDate}
        pressedStartTime={this._pressedStartTime}
        pressedEndTime={this._pressedEndTime}
        pickStartTime={this._pickStartTime}
        pickEndTime={this._pickEndTime}
      />
    );
  }
  _getCurrentDate = () => {
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    return year + "-" + month + "-" + day;
  };
  _changeDateToText = date => {
    return date.replace("-", "년  ").replace("-", "월  ") + "일";
  };
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
      case 1:
        return "통역 일시를 선택해주세요";
      case 2:
        return "통역 장소를 입력해주세요";
      case 3:
        return "통역 목적을 선택해주세요";
      case 4:
        return "남기실 메시지가 있나요?";
      case 5:
        return (
          "예약이 접수되었습니다.\n" +
          "0명의 수화통역사의 답변을\n" +
          "기다리는 중입니다."
        );
    }
  };
  _pickDate = picked => {
    this.setState({
      selectedDate: picked.dateString,
      selectedDateText: this._changeDateToText(picked.dateString)
    });
  };
  _pressedDate = () => {
    console.log(this.state.dateMode);
    if (this.state.dateMode === "Date") {
      this.setState({
        dateMode: null
      });
    } else {
      this.setState({
        dateMode: "Date"
      });
    }
  };
  _pressedStartTime = () => {
    if (this.state.dateMode === "StartTime") {
      this.setState({
        dateMode: null
      });
    } else {
      this.setState({
        dateMode: "StartTime"
      });
    }
  };
  _pressedEndTime = () => {
    if (this.state.dateMode === "EndTime") {
      this.setState({
        dateMode: null
      });
    } else {
      this.setState({
        dateMode: "EndTime"
      });
    }
  };
  _pickStartTime = (hours, minutes) => {
    const timeText = (hours < 10 ? "0"+hours : hours) + ":" + (minutes < 10 ? "0"+minutes : minutes);
    this.setState({
      startHour: hours,
      startMinutes: minutes,
      startTimeText: timeText
    })
  };
  _pickEndTime = (hours, minutes) => {
    const timeText = (hours < 10 ? "0"+hours : hours) + ":" + (minutes < 10 ? "0"+minutes : minutes);
    this.setState({
      endHour: hours,
      endMinutes: minutes,
      endTimeText: timeText
    })
  };
}

export default Container;
