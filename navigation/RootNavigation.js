import { StackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ReservationScreen from "../screens/ReservationScreen";
import ReservationListScreen from "../screens/ReservationListScreen";
import SettingScreen from "../screens/SettingScreen";

const RootNavigation = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Reservation: {
      screen: ReservationScreen,
      navigationOptions: {
        header: null
      }
    },
    ReservationList: {
      screen: ReservationListScreen,
      navigationOptions: {
        title: "지난 예약",
        gesturesEnabled: false
      }
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        title: "설정",
        gesturesEnabled: false
      }
    }
  },
  {
    mode: "modal"
  }
);

export default RootNavigation;
