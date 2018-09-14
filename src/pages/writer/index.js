import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Writer extends Component {
  render() {
    return (
      this.props.loginState?<div>writer</div>:<Redirect to='/login'/>
    )
  }
}
const mapState = (state)=>({
  loginState:state.getIn(['login','loginState'])
})
export default connect(mapState,null)(Writer);