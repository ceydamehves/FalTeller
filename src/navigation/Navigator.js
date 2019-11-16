import { createStackNavigator} from "react-navigation";
import Home from "../screens/Home";
import FalTipi from "../screens/FalTipi";
import GecmisFal from "../screens/GecmisFal";

import {createAppContainer, createDrawerNavigator ,createBottomTabNavigator} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  FalTipi:{
      screen: FalTipi
  },
  GecmisFal:{
      screen:GecmisFal
  }
},
{
    headerMode: 'none', 
    navigationOptions: {
    headerVisible: false,
}}); 
export default createAppContainer(AppNavigator);