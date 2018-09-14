import React, {PureComponent} from 'react';
import {
  RecommendWrapper,
  RecommendItem
} from '../style';
import {connect} from 'react-redux';
class Recommend extends PureComponent {
  getRecommendList(){
    const {list} = this.props;
    return list.map((item) => {
      return (
        <RecommendItem imgUrl = {item.get('imgUrl')} key={item.get('id')}/>
      )
    })
  }
  render() {
    return (
        <RecommendWrapper>
          {this.getRecommendList()}
        </RecommendWrapper>
    )
  }
}

const mapState = (state)=>({
  list:state.getIn(['home','recommendList'])
});
export default connect(mapState,null)(Recommend);