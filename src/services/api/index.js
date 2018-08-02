import { isEmpty } from 'lodash';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { API_URL, API_ID } from '../../constants/Utils';

export const fetchApi = async (endpoint, payload = {}, method = 'get', headers = {}) => {
  const token = await AsyncStorage.getItem(API_ID);
  console.log('tokeeeeeeeeeen: ', token);
};
