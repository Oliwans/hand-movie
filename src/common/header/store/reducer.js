import * as HEADER_CONST from './constants';
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused:false,
  mouseEnter:false,
  list:[],
  page:1,
  totalPage:1
})

const reducer  = (state=defaultState,action) => {
  switch (action.type) {
    case HEADER_CONST.SEARCH_FOCUSE:
      return state.set('focused',true);
    case HEADER_CONST.SEARCH_BLUR:
      return state.set('focused',false);
    case HEADER_CONST.SEARCH_MOUSE_ENTER:
      return state.set('mouseEnter',true);
    case HEADER_CONST.SEARCH_MOUSE_LEAVE:
      return state.set('mouseEnter',false);
    case HEADER_CONST.SEARCH_CHANGE_LIST:
      return state.set('page',action.page);
    case HEADER_CONST.SEARCH_LIST:
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      });
    default:
      return state;
  }
}

export default reducer;