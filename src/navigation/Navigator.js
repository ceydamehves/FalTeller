import { createStackNavigator} from "react-navigation";
import Home from "../screens/Home";
import FalTipi from "../screens/FalTipi";
import GecmisFal from "../screens/GecmisFal";
import KahveFali from "../screens/KahveFali";
import KartFali from "../screens/KartFali";
import ElFali from "../screens/ElFali";

import {createAppContainer, createDrawerNavigator ,createBottomTabNavigator} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  FalTipi:{
      screen: FalTipi
  },
  KahveFali:{
    screen: KahveFali
  },
  KartFali:{
    screen: KartFali
  },
  ElFali:{
    screen: ElFali
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