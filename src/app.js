import React, {Component} from 'react';
import { Navigator, View, TouchableHighlight, Text ,Image, StatusBar} from 'react-native';
import Login from './containers/login';
import SetAlarmScreen from './containers/setAlarmScreen';
// import styles from '../styles/style.js'
export default class Scene extends Component {

  render() {
    const routes = [
      {title: 'Login', index: 0},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.navigatorRenderScene}
      />
    );
  }
  navigatorRenderScene(route, navigator) {
    console.log(navigator, route);
    _navigator = navigator;
    switch (route.title) {
      case 'Login':
        return (<Login navigator={navigator} title={route.title}/>);
      case 'SetAlarmScreen':
        return (<SetAlarmScreen navigator={navigator} title={route.title} />);
    }
  }
}
