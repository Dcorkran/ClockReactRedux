import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { TouchableHighlight, View, Text, StyleSheet, Image, Animated, Easing } from 'react-native'
import {
  Button
} from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';



export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }
  componentWillMount(){
    this.animation = new Animated.Value(0);
  }
  componentDidMount(){
    this.runAnimation();
  }
  runAnimation(){
    Animated.timing(this.animation, {
      duration: 4000,
      toValue: 1,
      ease: Easing.bounce
    }).start(() => {
      this.animation.setValue(0);
      this.runAnimation()
    })
  }
  render(){
    const interpolated = this.animation.interpolate({
      inputRange:[0, .5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -10, 0, 10, 0, -10, 0]
    })
    const animatedStyle = {
      transform: [
        { translateY: interpolated}
      ]
    }
    return (
      <Image
      source={require('../assets/bg.png')}
      style={styles.container}>
        <View style={styles.textContainer}>
          <Animated.Image
            style={[animatedStyle]}
            source={require('../assets/zzz.png')}
            ></Animated.Image>
          <Text style={styles.uhOh}>
            Uh Oh...
          </Text>
          <Text style={styles.text}>
            No alarm has been set.
          </Text>
          <Text style={styles.text}>
            Tap this sexy button to add one!
          </Text>
          <Image
            style={styles.arrow}
            source={require('../assets/arrow.png')}>
          </Image>
        </View>
        <View style={styles.pickerContainer}>
          <DatePicker

            style={{width: 200,marginRight:20}}
            date={this.state.datetime}
            mode="datetime"
            format="MMM DD YYYY hh:mm A"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                borderWidth:0,
                marginLeft: 36,
              }
            }}
            minuteInterval={10}
            onDateChange={(datetime) => {this.setState({datetime});}}
          />
        </View>
        <View style={styles.submitContainer}>
        <Button
          borderRadius={25}
          backgroundColor={'#80CBC4'}
          large
          icon={{name: 'paper-plane', type: 'font-awesome'}}
          title='Set Alarm' />
        </View>
      </Image>
    )
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
  textContainer:{
    flex:2,
    alignItems: 'center'
  },
  pickerContainer:{
    flex:.6,
    marginBottom:0
  },
  submitContainer:{
    flex:.75,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  uhOh:{
    color:'white',
    fontSize:25,
    marginBottom:10
  },
  text:{
    color:'white',
    fontSize:15
  },
  arrow:{
    height:40,
    width:20,
    marginRight:190,
    marginTop:7
  }
});
