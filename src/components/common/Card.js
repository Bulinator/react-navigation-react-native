import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
});

const Card = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
};

export { Card };
