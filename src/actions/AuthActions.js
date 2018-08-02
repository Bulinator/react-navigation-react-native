import { SecureStore } from 'expo';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { API_URL, API_ID } from '../constants/Utils';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './types';

// Will refresh the access token 5 minutes before it expires
const SESSION_TIMEOUT_THRESHOLD = 60000;

let sessionTimeout = null;

const setSessionTimeout = (duration) => {
  console.log('duration ', duration);
  clearTimeout(sessionTimeout);
  sessionTimeout = setTimeout(
    refreshToken, // eslint-disable-line no-use-before-define
    (duration - SESSION_TIMEOUT_THRESHOLD),
  );
  console.log((duration - SESSION_TIMEOUT_THRESHOLD));
};

const clearSession = () => {
  clearTimeout(sessionTimeout);
  // store.dispatch(actionCreators.update(initialState));
};

const onRequestFailed = (exception) => {
  clearSession();
  AsyncStorage.removeItem(API_ID);
  throw exception;
};

export const authenticateUser = (username, password) => async (dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  console.log('auth');
  await axios.post(`${API_URL}users/token`, { username, password }, config)
    .then((result) => {
      AsyncStorage.setItem(API_ID, result.data.auth.token);
      // SecureStore.setItemAsync('username', username);
      // SecureStore.setItemAsync('password', password);
      dispatch({ type: LOGIN_SUCCESS, payload: result.data.user });
      setSessionTimeout(result.data.auth.expiresIn);
    })
    .catch((error) => {
      console.warn(error);
      dispatch({ type: LOGIN_FAIL, payload: error });
      onRequestFailed('Bad username/password');
    });
};

export const refreshToken = token => async (dispatch) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  console.log(config);
  await axios.post(`${API_URL}users/refreshToken`, config)
    .then((result) => {
      console.log('refresh: ', result);
    })
    .catch((error) => {
      console.log(error);
      // dispatch({ type: LOGIN_FAIL, payload: error });
    });
};
