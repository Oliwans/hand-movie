import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  title:'',
  details:''
})

const reducer  = (state=defaultState,action) => {
  switch (action.type) {
    case constants.CHANGE_DETAILS:
      return state.merge({
        title:fromJS(action.title),
        details:fromJS(action.details),
      });
    default:
      return state;
  }
}

export default reducer;