import { combineReducers } from 'redux-immutable';
import handerReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/reducer';
import detailReducer from '../pages/detail/store/reducer';
import loginReducer from '../pages/login/store/reducer';

export default combineReducers({
  header:handerReducer,
  home:homeReducer,
  details:detailReducer,
  login:loginReducer
});