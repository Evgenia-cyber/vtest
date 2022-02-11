import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import addressReducer from '../redux/reducers/addressReducer';

const reducers = combineReducers({
  addressReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
