import {
  compose,
  applyMiddleware,
  createStore,
} from 'redux';
import { AsyncStorage } from 'react-native';
import {
  persistStore,
  autoRehydrate,
} from 'redux-persist';

import thunk from 'redux-thunk';
import fetchMiddleware from './middleware/fetchMiddleware';
import reducers from '../reducers';


const enhancer = compose(
  applyMiddleware(thunk),
  applyMiddleware(fetchMiddleware),
);

/*
** NEWSTORE
*/
const store = createStore(
  reducers,
  enhancer,
  autoRehydrate(),
);

persistStore(store, {
  storage: AsyncStorage,
  whitelist: [],
  blacklist: ['auth'],
});

/*
** NEWSTORE
*/
export default store; // <- quick fix because idk which version is better...
