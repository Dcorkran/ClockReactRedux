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


class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);

    this.state = {
      form: {email:"",password:""},
    };

    this.changeInputField = this.changeInputField.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }
    componentDidUpdate() {
       if(this.props.appData.isLoggedIn) {
         this.props.navigator.push(
           {title: 'DatePicker', index: 1}
         )
       }
    }
    changeInputField(event){
      const form = this.state.form;
      form.email = event.target.value;
      this.setState({form : form})
      // console.log(this.state);
    }
    componentWillMount(){
      this.animation = new Animated.Value(0);
    }
    componentDidMount(){
      console.log(this.props);
      console.log(this.state);
      this.runAnimation();
    }
    runAnimation(){
      Animated.timing(this.animation, {
        delay: 5000,
        duration: 400,
        toValue: 3,
        ease: Easing.bounce
      }).start(() => {
        this.animation.setValue(0);
        this.runAnimation()
      })
    }
    navSecond(){
      this.props.navigator.push(
        {title: 'SetAlarmScreen', index: 1}
      )
    }
    submitForm(){
      // console.log(this.state);
      this.props.attemptLogin(this.state.form)

    }
    render() {
        const interpolated = this.animation.interpolate({
          inputRange:[0, .5, 1, 1.5, 2, 2.5, 3],
          outputRange: [0, -10, 0, 10, 0, -10, 0]
        })
        const animatedStyle = {
          transform: [
            { translateX: interpolated}
          ]
        }
        return (
          <Image
            source={require('../assets/bg.png')} 
            style={styles.container}>
            <View style={styles.iconContainer}>
                <Animated.Image
                style={[styles.image, animatedStyle]}
                source={require('../assets/icon4.png')}
              ></Animated.Image>
            </View>
            <View style={styles.buttonContainer}>
              <Text
                style={styles.text}
                >
                Welcome to Clock</Text>
            </View>
              <View style={styles.buttonContainer}>
              <Button
                onPress={this.navSecond.bind(this)}
                style={styles.button}
                raised
                icon={{name: 'person'}}
                title='Sign In' />
              <Button
                onPress={this.submitForm}
                style={styles.button}
                raised
                icon={{name: 'person-add'}}
                title='Sign Up' />
            </View>
            <View style={styles.formContainer}>
              <Hoshi
                onChangeText={(text) => {
                  // console.log(this.state);
                  const form = this.state.form;
                  form.email = text;
                  this.setState({form:form}
                  )}}
                name={'email'}
                inputStyle={styles.formText}
                labelStyle={{ color: '#E3F2FD' }}
                style={styles.input}
                label={'Email'}
                borderColor={'#b76c94'}
              />
              <Hoshi
                onChangeText={(text) => {
                  console.log(this.state);
                  const form = this.state.form;
                  form.password = text;
                  this.setState({form:form}
                  )}}
                name={'password'}
                secureTextEntry={true}
                labelStyle={{ color: '#E3F2FD' }}
                inputStyle={styles.formText}
                style={styles.input}
                label={'Password'}
                borderColor={'#7ac1ba'}
              />
            </View>
          </Image>
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
)(LoginPage)
