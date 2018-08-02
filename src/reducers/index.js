import { combineReducers } from 'redux';
import auth from './AuthReducer';

// Merge all the reducers into a single global object that will be saved in
// the store. This function will call each reducer with the key in the state
// that corresponds to that reduce.
export default combineReducers({
  auth,
});
