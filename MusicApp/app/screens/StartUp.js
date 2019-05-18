import React,{Component} from'react';

import AppNavigation from './AppNavigation';
import {createAppContainer} from 'react-navigation';
import TabNavigator from '../components/Navigator';
const AppNavigations = createAppContainer(AppNavigation);
const Navigator = createAppContainer(TabNavigator);

export default class App extends Component{
  render(){
      return (
        <Navigator/>
      );
  }
}


