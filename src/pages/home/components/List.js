import React, {PureComponent} from 'react';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';
import { connect } from 'react-redux';
import * as homeDispatch from '../store/actionCreator';
import { Link } from 'react-router-dom';
class List extends PureComponent {
  getArticleList(){
    const {list} = this.props;
     return list.map((item,index) => {
      return (
        <Link key={index} to={'/detail/'+item.get('id')}>
          <ListItem>
            <img className="pic" alt="" src={item.get('imgUrl')}/>
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
          </ListItem>
        </Link>
      )
    })
  }
  render() {
    const {getMoreData,page} = this.props;
    return (
      <div>
        {this.getArticleList()}
        <LoadMore onClick={()=>getMoreData(page)}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list:state.getIn(['home','articleList']),
  page:state.getIn(['home','articlePage']),
})

const mapDispatch = (dispatch) => ({
  getMoreData:(page)=>{
    dispatch(homeDispatch.getMoreData(page));
  }
})
export default connect(mapState,mapDispatch)(List);