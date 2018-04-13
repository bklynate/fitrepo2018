import axios from 'axios';
import { FETCH_USER, FETCH_MACROS, DEDUCT_MACRO, ADD_MACRO } from './types';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: response.data });
  return response.data;
};

export const deductMacro = ({ macroAmount, macroType }) => async dispatch => {
  const macro = { ...macroAmount, macroType };
  const response = await axios.post('/api/deduct_macro', macro);
  dispatch({ type: DEDUCT_MACRO, payload: response.data });
};

export const addMacro = ({ macroAmount, macroType }) => async dispatch => {
  const macro = { ...macroAmount, macroType };
  const response = await axios.post('/api/add_macro', macro);
  dispatch({ type: ADD_MACRO, payload: response.data });
};

export const fetchMacros = () => async dispatch => {
  const response = await axios.get('/api/fetch_macros');
  dispatch({ type: FETCH_MACROS, payload: response.data });
};
