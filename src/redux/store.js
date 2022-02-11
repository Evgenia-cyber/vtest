import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import commonReducer from '../redux/reducers/commonReducer';
import streetReducer from '../redux/reducers/streetReducer';
import houseReducer from '../redux/reducers/houseReducer';

const reducers = combineReducers({
  commonReducer,
  streetReducer,
  houseReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
