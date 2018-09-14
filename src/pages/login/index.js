import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button,
} from './style';
import * as actionDispatch from './store/actionCreator';

class Login extends Component {
  render() {
    const {login, loginState} = this.props;
    console.log(loginState);
    return (
      loginState ? 
      <Redirect to="/" /> 
      :
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="请输入账号" innerRef={(input)=>{this.account = input}}/>
          <Input placeholder="请输入密码" type="password" innerRef={(input)=>{this.password = input}}/>
          <Button onClick={()=>login(this.account,this.password)}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}
const mapState = (state) => ({
  loginState:state.getIn(['login','loginState'])
})
const mapDispatch = (dispatch) => ({
  login(accountElement,pwdElement) {
    dispatch(actionDispatch.login(accountElement.value,pwdElement.value));
  }
})
export default connect(mapState,mapDispatch)(Login);