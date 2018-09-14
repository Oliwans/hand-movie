import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as headerActions from './store/actionCreator';
import * as loginDispatch from '../../pages/login/store/actionCreator'
import { Link } from 'react-router-dom';

import {
  HeaderWrapper, 
  Logo,
  Nav,
  NavItem,
  SearchInput,
  Addition,
  Button,
  NavSearch,
  SearchInfoBox,
  SearchInfoTitle,
  SearchInfoChange,
  SearchItem
} from './style.js';
class Header extends Component {
  showSearchInfo (){
    const { focused, list, mouseEnter, handleMouseEnter, handleMouseleave, page, totalPage, handleChangeList } = this.props;
    const searchList = [];
    const newList = list.toJS()
    if (newList.length) {
      for (let i = (page-1)*10; i < page*10; i++) {
        newList[i] && searchList.push(<SearchItem key={newList[i]}>{newList[i]}</SearchItem>)
      }
    }
    if (focused||mouseEnter) {
      return (
        <SearchInfoBox
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseleave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoChange
              onClick={() => {handleChangeList(page,totalPage,this.refuse)}}
            ><i 
            className="iconfont"
            ref={(refuse) => {this.refuse = refuse}}>&#xe65a;</i>换一批</SearchInfoChange>
          </SearchInfoTitle>
          <div>
            {searchList}
          </div>
        </SearchInfoBox>
      )
    } else {
      return null;
    }
  }
  
  render() {
    const { focused, handleFocusClick, handleBlurClick, list, login, logout } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Addition>
          <Button className="reg">注册</Button>
          <Link to='/writer'>
            <Button className="writing"><i className="iconfont">&#xe615;</i>写文章</Button>
          </Link>
        </Addition>
        <Nav>
          <NavItem className="left add-color">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {login ? <NavItem className="right" onClick={logout}>退出</NavItem>:<Link to='/login'><NavItem className="right">登录</NavItem></Link>}
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <NavSearch>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <SearchInput
                className={focused ? 'focused' : ''}
                onFocus={() => {handleFocusClick(list)}}
                onBlur={handleBlurClick}
              ></SearchInput>
            </CSSTransition>
            <i className="iconfont">&#xe6dd;</i>
            {this.showSearchInfo()}
          </NavSearch>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused:state.getIn(['header','focused']),
    list:state.getIn(['header','list']),
    mouseEnter:state.getIn(['header','mouseEnter']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    login:state.getIn(['login','loginState'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocusClick(list) {
      (list.size === 0) && dispatch(headerActions.get_search_list())
      dispatch(headerActions.search_focuse())
    },
    handleBlurClick() {
      dispatch(headerActions.search_blur())
    },
    handleMouseEnter() {
      dispatch(headerActions.search_mouse_enter())
    },
    handleMouseleave() {
      dispatch(headerActions.search_mouse_leave())
    },
    handleChangeList(page,totalPage,refuse) {
      let turn = refuse.style.transform.replace(/[^0-9]/ig,"");
      turn = turn ? parseInt(turn,10) : 0;
      refuse.style.transform = 'rotate('+(turn+360)+'deg)';
      if (page < totalPage) {
        dispatch(headerActions.search_change_list(page+1))
      } else {
        dispatch(headerActions.search_change_list(1))
      }
    },
    logout(){
      dispatch(loginDispatch.logout());
    }
  } 
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);