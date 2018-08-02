import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload || state;
    case LOGIN_FAIL:
      return [state, { auth: null }];
    default:
      return state;
  }
}
