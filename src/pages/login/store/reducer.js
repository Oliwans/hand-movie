import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  loginState:false
})

const reducer  = (state=defaultState,action) => {
  console.log(action);
  switch (action.type) {
    case constants.LOGIN:
      return state.set('loginState',action.flag);
    case constants.LOGOUT:
      return state.set('loginState',action.flag);
    default:
      return state;
  }
}

export default reducer;