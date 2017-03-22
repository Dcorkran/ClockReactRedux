import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet, Image, Animated, Easing} from 'react-native'
import { connect } from 'react-redux'
import * as appActions from '../actions/actions'
import {
  Button
} from 'react-native-elements'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  Hoshi
} from 'react-native-textinput-effects';

window.navigator.userAgent = "react-native";
import SocketIOClient from 'socket.io-client';



class AlarmActive extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);
    this.socket = SocketIOClient('http://10.6.65.123:5000',{jsonp: false});
    this.socket.emit('alarm update', 'hi');

    this.state = {};



  }
    componentDidUpdate() {

    }
    componentWillMount(){
    }
    componentDidMount(){

    }
    runAnimation(){

    }
    navSecond(){
      this.props.navigator.push(
        {title: 'SetAlarmScreen', index: 1}
      )
    }
    submitForm(){

    }
    render() {
        return (
          <View>
            <Text>
              Hello
            </Text>
          </View>
        );
    }
}

styles = StyleSheet.create({
  container: {
    flex:1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#BBDEFB',
    width:null,
    height:null
  },
  iconContainer:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    marginTop: 10
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginLeft:20,
    // marginRight:30,
    flex:.75
  },
  formContainer:{
    flex:2,
    marginRight:20,
    marginLeft:20
  },
  button:{
    width:150,
  },
  image:{
    // flex : 2,
    height:200,
    width:200
  },
  card2: {
    padding: 26,
  },
  formText:{
    color: 'white',
    fontSize:15
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  input: {
    marginTop: 4,
  },
  text: {
    color: 'white',
    fontSize:20
  },
  // buttonText: {
  //   color: 'white'
  // }
})

function mapStateToProps (state) {
  console.log(state);
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    attemptLogin: (form) => dispatch(appActions.attemptLogin(form))
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlarmActive)
