'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';

import { connect } from 'react-redux';

// import fetchData from './components/fetchURL';
import * as actionCreators from './redux/actionCreators';

class Main extends Component {
  constructor(props) {
    super(props);
      this.state = {
        cityName: ''
      };
  }

  getTempInfomation = () => {
    const { cityName } = this.state;
    // this.props.isFetchingReducer();
    // fetchData(cityName)
    // .then(temp => this.props.fetchSuccessReducer(cityName, temp))
    // .catch(() => this.props.fetchErrorReducer());
    this.props.fetchDataWithReduxThunk(cityName);
    Keyboard.dismiss();
  }

  handerShowTitle() {
    const { isLoading, error, cityName } = this.props;
    if (isLoading) return '... LOADING';
    if (error) return 'NOT FOUND. PLEASE TRY AGAIN !';
    if (cityName) return 'THE CURRENT TEMPERATURE AT';
    return 'PLEASE ENTER CITY NAME TO FIND !';
  }

  handerShowLocation() {
    const { cityName } = this.props;
    if (cityName) return cityName.toUpperCase();
    return '';
  }

  handerShowTemp() {
    const { temp, cityName } = this.props;
    if (cityName && temp) return `${temp}°C`;
    return '';
  }


  render() {
    const { cityName } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.textMessage}>
            <Text>{this.handerShowTitle()}</Text>
            <Text style={styles.location}> {this.handerShowLocation()}</Text>
          </Text>
          <Text style={styles.textTemp}>
            {this.handerShowTemp()}
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            underlineColorAndroid={'transparent'}
            placeholder='Example: Hanoi'
            style={{ color: '#2F9688' }}
            value={cityName}
            onChangeText={(text) => this.setState({ cityName: text })}
            onSubmitEditing={this.getTempInfomation}
            returnKeyType='done'
            onFocus={() => this.setState({ cityName: '' })}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={this.getTempInfomation}
          >
            <Text style={styles.buttonStyle}>CHECK OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2F9688'
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMessage: {
    color: 'white'
  },
  location: {
    color: '#D34232',
    fontWeight: 'bold'
  },
  textTemp: {
    color: '#D34232',
    fontSize: 25,
    fontWeight: 'bold'
  },
  inputView: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 20,
    height: 40
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: '#D34232',
    padding: 10,
    color: 'white',
    opacity: 0.8
  }
});

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    cityName: state.cityName,
    temp: state.temp,
    error: state.error
  };
}

export default connect(mapStateToProps, actionCreators)(Main);
