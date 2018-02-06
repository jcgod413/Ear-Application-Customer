import { StackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ReservationScreen from "../screens/ReservationScreen";
import ReservationListScreen from "../screens/ReservationListScreen";
import ReservationCompletionsListScreen from "../screens/ReservationCompletionsListScreen";
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
        header: null
      }
    },
    ReservationCompletionsList: {
      screen: ReservationCompletionsListScreen,
      navigationOptions: {
        header: null
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
