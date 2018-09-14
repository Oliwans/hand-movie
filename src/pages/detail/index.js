import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
  DetailWrapper,
  Header,
  Content
} from './style';
import * as actionCreator from './store/actionCreator';

class Detail extends Component {
  render() {
    const { title, details }  = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html:details}}>
        </Content>
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetails(this.props.match.params.id);
  }
}
const mapStates = (state)=> ({
  title:state.getIn(['details','title']),
  details:state.getIn(['details','details'])
})
const mapDispatch = (dispatch)=>({
  getDetails(id){
    dispatch(actionCreator.getDetails(id))
  }
})
export default connect(mapStates,mapDispatch)(withRouter(Detail));