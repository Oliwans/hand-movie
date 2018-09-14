import React, {PureComponent} from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Topic from './components/Topic';
import { connect } from 'react-redux';
import * as homeDispatch from './store/actionCreator'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends PureComponent {
  handleScrollTop(){
    window.scrollTo(0,0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4377/8c839e7b721b8f2023452edaceefd2fb899d340b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.getHomeInfo();
    this.bindEvent();
  }
  bindEvent() {
    window.addEventListener('scroll',this.props.showScrollTop);
  }
}

const mapState = (state)=>({
  showScroll:state.getIn(['home','showScrollTop'])
})
const mapDispatch = (dispatch)=>({
  getHomeInfo (){
    dispatch(homeDispatch.getHomeInfo());
  },
  showScrollTop (){
    if (document.documentElement.scrollTop > 100){
      dispatch(homeDispatch.showScrollTop(true));
    } else {
      dispatch(homeDispatch.showScrollTop(false));
    }
    
  }
})
export default connect(mapState,mapDispatch)(Home);