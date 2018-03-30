import { FETCH_MACROS, DEDUCT_MACRO, ADD_MACRO } from './../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MACROS:
      return action.payload;
    case DEDUCT_MACRO:
      return action.payload;
    case ADD_MACRO:
      return action.payload;
    default:
      return state;
  }
}
