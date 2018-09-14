import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem
} from '../style'
class Topic extends PureComponent {
  getList () {
    const { list } = this.props;
    const listResult = list.map((item)=>{
      return (
        <TopicItem key={item.get('id')}>
          <img
            alt=""
            className="topic-pic"
            src={item.get('imgUrl')}
          />{item.get('title')}
        </TopicItem>
      )
    })
    return listResult;
  }
  render() {
    return (
      <TopicWrapper>
        {this.getList()}
      </TopicWrapper>
    )
  }
}
const mapState = (state) => {
  return {
    list:state.getIn(['home','topicList'])
  }
}
export default connect(mapState,null)(Topic);