import React, {Component} from 'react';
import { Navigator, View, TouchableHighlight, Text ,Image, StatusBar} from 'react-native';
import Login from './containers/login';
import SetAlarmScreen from './containers/setAlarmScreen';
import DatePicker from './containers/datePicker';

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
        // change back to Login
        return (<DatePicker navigator={navigator} title={route.title}/>);
      case 'DatePicker':
        return (<DatePicker navigator={navigator} title={route.title} />);
    }
  }
}
