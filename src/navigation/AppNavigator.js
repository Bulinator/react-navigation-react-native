import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import SigninScreen from '../screens/SigninScreen';
import SigninLoadingScreen from '../screens/SigninLoadingScreen';

// 'float'  -> Stays at the top and animates as screens are changed.
// 'screen' -> Each screen has a header attached to it,
//             and the header fades in and out together with the screen.
// const mode = (Platform.OS === 'android' ? 'screen' : 'float');
// default: none
const mode = (Platform.OS === 'android' ? 'screen' : 'float');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tabText: {
    color: '#777',
    fontSize: 10,
    justifyContent: 'center',
  },
  selected: {
    color: 'blue',
  },
});

const TestScreen = title => () => (
  <View style={styles.container}>
    <Text>
      {title}
    </Text>
  </View>
);

const MainScreenNavigator = createBottomTabNavigator({
  Home: { screen: TestScreen('home') },
  Settings: { screen: TestScreen('settings') },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#22313F',
    },
    labelStyle: { fontSize: 11 },
    showIcon: false,
    showLabel: true,
    iconStyle: { width: 24 },
  },
  tabBarPosition: 'bottom',
  lazyLoad: true,
  swipeEnabled: false,
});

// Navigation stack for our entire application
const AppStack = createStackNavigator(
  {
    Main: { screen: MainScreenNavigator },
  },
);

// Navigation stack for our entire application
const AuthStack = createStackNavigator(
  {
    Signin: { screen: SigninScreen },
  },
);

export default createSwitchNavigator(
  {
    AuthLoading: SigninLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: mode, // has no effect on android
    navigationOptions: {
      gestureEnabled: false,
    },
  },
);
