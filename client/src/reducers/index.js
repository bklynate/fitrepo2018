import { combineReducers } from 'redux';
import authReducer from './authReducer';
import macroReducer from './macroReducer';

export default combineReducers({
  auth: authReducer,
  macros: macroReducer,
});
