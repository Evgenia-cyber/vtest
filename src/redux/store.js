import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import commonReducer from '../redux/reducers/commonReducer';
import streetReducer from '../redux/reducers/streetReducer';
import houseReducer from '../redux/reducers/houseReducer';
import apartmentReducer from '../redux/reducers/apartmentReducer';
import userReducer from '../redux/reducers/userReducer';

const reducers = combineReducers({
  commonReducer,
  streetReducer,
  houseReducer,
  apartmentReducer,
  userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
