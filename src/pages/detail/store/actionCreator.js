import axios from 'axios';
import * as constants from './constants'
export const changeDetails = (res)=>{
  return {
    type:constants.CHANGE_DETAILS,
    title:res.title,
    details:res.content
  }
}
export const getDetails = (id)=>{
  return dispatch=>{
    axios.get('/api/detail.json?id='+id).then((result)=>{
      const res = result.data.data;
      dispatch(changeDetails(res));
    })
  }
}