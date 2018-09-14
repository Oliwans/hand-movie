import * as HEADER_CONST from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const search_list = (data) => ({
  type:HEADER_CONST.SEARCH_LIST,
  data:fromJS(data.searchList),
  totalPage:Math.ceil(data.searchList.length/10)
})

export const search_focuse = () => ({
  type:HEADER_CONST.SEARCH_FOCUSE
})

export const search_mouse_enter = () => ({
  type:HEADER_CONST.SEARCH_MOUSE_ENTER
})

export const search_mouse_leave = () => ({
  type:HEADER_CONST.SEARCH_MOUSE_LEAVE
})

export const search_blur = () => ({
  type:HEADER_CONST.SEARCH_BLUR
})

export const search_change_list = (page) => ({
  type:HEADER_CONST.SEARCH_CHANGE_LIST,
  page
})

export const get_search_list = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((data) => {
      dispatch(search_list(data.data))
    }).catch(() => {
      console.log('err');
    })  
  }
}