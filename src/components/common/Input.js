import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import Color from '../../constants/Color';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    zIndex: 99,
    left: 35,
    top: 10,
  },
  inputStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: width - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 40,
    borderRadius: 20,
    marginBottom: 15,
  },
});

class Input extends Component {
  render() {
    return (
      <View>
        <FontAwesome
          name={this.props.icon || 'cube'}
          size={18}
          color={this.props.color || Color.inputIcn}
          style={styles.iconStyle}
        />
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={this.props.secureTextEntry || false}
          returnKeyType={this.props.returnKeyType || 'done'}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor || Color.inputTxt}
          style={styles.inputStyle}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

Input.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  returnKeyType: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholderTextColor: PropTypes.string,
};

export { Input };
