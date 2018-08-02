import React from 'react';
import {
  View,
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { refreshToken } from '../actions';
import { API_ID } from '../constants/Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class SigninLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(API_ID);
    if (userToken) {
      await this.props.refreshToken(userToken);
    }

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default connect(null, { refreshToken })(SigninLoadingScreen);
