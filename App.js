import { AppLoading, Asset } from 'expo';
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import NetworkIndicator from './src/components/NetworkIndicator';

import store from './src/store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async _cacheResourcesAsync() { // eslint-disable-line
    const images = [
      require('./assets/icon.png'),
      require('./assets/splash.png'),
    ];

    const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
    return Promise.all(cacheImages);
  }

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <NetworkIndicator />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
