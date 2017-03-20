import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet, Image, Button } from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'


class LoginPage extends React.Component {
    componentWillMount(){
      console.log(this.props);
    }
    navSecond(){
      this.props.navigator.push(
        {title: 'SetAlarmScreen', index: 1}
      )
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image
                style={styles.image}
                source={require('../assets/icon.jpg')}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={this.navSecond.bind(this)}
                title="     Sign In     "
                accessibilityLabel="See an informative alert"
              />
              <Button
                style={styles.button}
                onPress={this.navSecond.bind(this)}
                title="     Sign Up     "
                accessibilityLabel="See an informative alert"
              />
            </View>
            <View style={styles.formContainer}>
              <Button
                style={styles.button}
                onPress={this.navSecond.bind(this)}
                title="Press Meeeee"
                accessibilityLabel="See an informative alert"
              />
              <Button
                style={styles.button}
                onPress={this.navSecond.bind(this)}
                title="Press Meeeeee"
                accessibilityLabel="See an informative alert"
              />
            </View>
          </View>
        );
    }
}

styles = StyleSheet.create({
  container: {
    flex:1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  iconContainer:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    marginTop: 20
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    flex:.75
  },
  formContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    flex:2
  },
  button:{
    width:300,
    height:400
  },
  image:{
    // flex : 2,
    height:200,
    width:200
  },
  text: {
    textAlign: 'center'
  },
  buttonText: {
    color: 'white'
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
