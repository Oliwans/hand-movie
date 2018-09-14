import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

export const changeDefaultState = (data) => ({
  type:constants.CHANGE_DEFAULT_SATAUS,
  topicList:data.topicList,
  articleList:data.articleList,
  recommendList:data.recommendList,
})

export const changeDataList = (data,page) => ({
  type:constants.CHANGE_DATA_LIST,
  moreData:fromJS(data),
  page
})

export const showScrollTop = (flag) => ({
  type:constants.SHOW_SCROLL_TOP,
  showScrollTop:flag,
})

export const getHomeInfo = () => {
  return ((dispatch)=>{
    axios.get('/api/home.json').then((result)=>{
      const res = result.data.data;
      dispatch(changeDefaultState(res));
    })
  })
}

export const getMoreData = (page) => {
  return ((dispatch)=>{
    axios.get('/api/homeList.json?page='+page).then((result)=>{
      const res = result.data.data;
      dispatch(changeDataList(res,page+1));
    })
  })
}