import axios from 'axios';
import * as constants from './constants'

export const changeLogin = (res) => ({
  type:constants.LOGIN,
  flag:res
})
export const logout = (res) => ({
  type:constants.LOGOUT,
  flag:false
})
export const login = (account,pwd) => {
  return ((dispatch)=>{
    axios.get('/api/login.json?account='+account+'&pwd='+pwd).then((result)=>{
      const res = result.data.data;
      if(res){
        dispatch(changeLogin(res));
      } else {
        alert('登录失败')
      }
    })
  })
}