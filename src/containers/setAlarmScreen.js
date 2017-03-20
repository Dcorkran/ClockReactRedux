import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'
import DatePicker from '../components/datePicker'


class SetAlarmScreen extends React.Component {
    componentWillMount(){
      // console.log(this.state);
    }

    render() {
        return (
          <DatePicker/>
        );
    }
}

function mapStateToProps (state) {
  console.log(state);
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
)(SetAlarmScreen)
