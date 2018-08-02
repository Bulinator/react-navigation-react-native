import React, { Component } from 'react';
import {
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { Spinner, Input } from '../components/common';
import { authenticateUser } from '../actions';
import Color from '../constants/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.tabBarBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: Color.button,
  },
});

class SigninScreen extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
      isLoading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleButtonPress = () => {
    const { username, password } = this.state;
    this.setState({ isLoading: true });
    Keyboard.dismiss();
    this.props.authenticateUser(username, password); // eslint-disable-line
    this.props.navigation.navigate('App'); // eslint-disable-line
  }

  renderSubmitButton = () => {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Spinner size="small" />;
    }

    return (
      <Button
        title="Log In"
        icon={{ name: 'sign-in', type: 'font-awesome' }}
        onPress={() => this.handleButtonPress()}
        buttonStyle={styles.buttonStyle}
      />
    );
  }

  render() {
    const { username, password } = this.state;
    const { container } = styles;
    return (
      <KeyboardAvoidingView behavior="padding" style={container}>
        <Input
          icon="user"
          placeholder="Username"
          placeholderTextColor="#FFF"
          value={username}
          onChangeText={usr => this.setState({ username: usr })}
        />

        <Input
          secureTextEntry
          icon="lock"
          placeholder="Password"
          placeholderTextColor="#FFF"
          value={password}
          onChangeText={pwd => this.setState({ password: pwd })}
        />

        {this.renderSubmitButton()}
      </KeyboardAvoidingView>
    );
  }
}

SigninScreen.propTypes = {
  authenticateUser: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { authenticateUser })(SigninScreen);
