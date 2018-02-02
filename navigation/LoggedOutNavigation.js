import { StackNavigator } from "react-navigation";
import IntroScreen from "../screens/IntroScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const LoggedOutNavigation = StackNavigator(
  {
    Intro: {
      screen: IntroScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  { mode: "modal" }
);

export default LoggedOutNavigation;
