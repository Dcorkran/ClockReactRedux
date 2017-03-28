import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { TouchableHighlight, View, Text, StyleSheet, Image, Animated, Easing } from 'react-native'
import {
  Button
} from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import * as appActions from '../actions/actions';

window.navigator.userAgent = "react-native";
import SocketIOClient from 'socket.io-client';





class AlarmBeeping extends Component {
  constructor(props, context){
    super(props, context)
      console.log(props,this.state);

    this.state = { heartRateText: '', timeLeft:15};
    console.log(this.state);
    this.socket = SocketIOClient('http://10.2.11.13:5000',{jsonp: false});
    this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this._storeMessages = this._storeMessages.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.socket.on('beep', this.onReceivedMessage);
  }
  componentWillMount(){

  }
  componentDidMount(){

  }
  componentDidUpdate() {

     //
    //  if(this.props.appData.alarmSet) {
    //    this.props.navigator.push(
    //      {title: 'AlarmActive', index: 1}
    //    )
    //  }
  }
  updateText(text){
   this.setState({heartRateText: text})
 }

 onReceivedMessage(messages) {
  this._storeMessages(messages);
}
  // runAnimation(){
  //   Animated.timing(this.animation, {
  //     duration: 4000,
  //     toValue: 1,
  //     ease: Easing.bounce
  //   }).start(() => {
  //     this.animation.setValue(0);
  //     this.runAnimation()
  //   })
  // }

  render(){
    return (
      <Image
      source={require('../assets/bg.png')}
      style={styles.container}>
        <View
          style={styles.imgContainer}>
          <Image
            style={styles.heartImg}
            source={require('../assets/heart2.png')}>
          </Image>
          <Text
            style={styles.heartRateText}>
            {this.state.heartRateText}
          </Text>
        </View>
        <View
          style={styles.heartRateTextContainer}>
          <Text style={styles.heartRateTextLeft}>
            Get your heart rate above 120 for:
            <Text style={styles.heartRateTextLeft2}>
              {this.state.timeLeft}
            </Text>
             more seconds
          </Text>
        </View>

      </Image>
    )
  }

  _storeMessages(messages) {
    if (this.state.timeLeft !== 0) {
    if (messages >= 120) {
      this.setState({
        heartRateText:messages,
        timeLeft: this.state.timeLeft - 1
      })
    } else {
      this.setState({heartRateText:messages})
    }
  }

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF'
    width:null,
    height:null
  },
  imgContainer:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartImg:{
    height:175,
    width:197.5
  },
  heartRateTextContainer:{
    flex:1
  },
  heartRateText:{
    position:'absolute',
    right:0,
    left:65,
    fontSize:40,
    color:'white'
  },
  heartRateTextLeft:{
    color:'white'
  },
  heartRateTextLeft2:{
    color:'green',
    fontSize:25
  }
});

function mapStateToProps (state) {
  console.log(state);
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    attemptDateFormSubmit: (form) => dispatch(appActions.attemptDateFormSubmit(form))
  }
}




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlarmBeeping)
