import React from 'react';
import {
  NetInfo,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#393939',
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    marginTop: (Platform.OS === 'ios') ? 20 : StatusBar.currentHeight,
    width: '100%',
  },
  text: {
    color: '#fefefe',
  },
});

class NetworkIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
    };
    return;
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectivityChange,
    );
    return;
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange,
    );
    return;
  }

  handleConnectivityChange = networkStatus => {
    if (networkStatus) {
      this.setState({ isConnected: true });
    }
    else {
      this.setState({ isConnected: false });
    }
    return;
  }

  render() {
    const { isConnected } = this.state;
    if (!isConnected) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            No Internet Connection!
          </Text>
        </View>
      );
    }
    return (null);
  }
}

export default NetworkIndicator;
