import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import commonReducer from '../redux/reducers/commonReducer';
import streetReducer from '../redux/reducers/streetReducer';

const reducers = combineReducers({
  commonReducer,
  streetReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
