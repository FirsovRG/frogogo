import { combineReducers } from 'redux';
import userReducer from './user';
import goodsReducer from './goods';

export default combineReducers({ userReducer, goodsReducer });
