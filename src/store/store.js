// redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import counter from '@reducers/counter';
import userInfo from '@reducers/userinfo';

let store = createStore (
  combineReducers ({counter, userInfo}),
  applyMiddleware (reduxThunk)
);

export default store;
