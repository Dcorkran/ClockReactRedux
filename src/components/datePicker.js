import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'


export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  render(){
    return (
      <View style={styles.container}>
      <DatePicker
        style={{width: 200}}
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
            marginLeft: 36
          }
        }}
        minuteInterval={10}
        onDateChange={(datetime) => {
          console.log(datetime);
          this.setState({datetime});
        }}
      />
      <Text style={styles.instructions}>datetime: {this.state.datetime}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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
  }
});
