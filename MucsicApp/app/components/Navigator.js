
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";
import  HomeScreen  from '../screens/Homescreen';
import Categories from '../screens/Categories';
import Playlist from '../screens/Playlist';
import PlayScreen from '../screens/PlayScreen/PlayScreen'

const TabNavigator = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Categories: Categories,
  Playlist:Playlist, 
},
{
  initialRouteName:'Home',
  swipeEnabled: true,
  tabBarOptions: {
    inactiveTintColor:'black',
    activeTintColor:'red',
    labelStyle: {
      fontSize: 11,
      fontFamily: 'Roboto',
    },
    style: {
      backgroundColor: 'white',
    },
    indicatorStyle:{
      backgroundColor:'red',
    }
  },
}
);

const StackNavigator = createStackNavigator({
  Tabs: {screen: TabNavigator},
  PlayScreen: {
    screen: PlayScreen,
    navigationOptions:{
    },    
  }
},{
  initialRouteName:'Tabs',
  headerMode: 'none',
});



export default createAppContainer(StackNavigator);