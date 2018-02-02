import { StackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ReservationScreen from "../screens/ReservationScreen";

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
    }
  },
  {
    mode: "modal"
  }
);

export default RootNavigation;
