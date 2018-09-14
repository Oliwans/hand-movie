import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList:[],
  recommendList:[],
  articlePage:1,
  showScrollTop:false
})

const reducer  = (state=defaultState,action) => {
  switch (action.type) {
    case constants.CHANGE_DEFAULT_SATAUS:
      return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
      });
    case constants.CHANGE_DATA_LIST:
      return state.merge({
        articleList:state.get('articleList').concat(action.moreData),
        articlePage:action.page
      });
    case constants.SHOW_SCROLL_TOP:
      return state.set('showScrollTop',action.showScrollTop)
    default:
      return state;
  }
}

export default reducer;