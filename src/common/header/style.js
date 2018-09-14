import styled from 'styled-components';
import logo from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height:56px;
  border:1px solid #f0f0f0;
  position:relative;
`;
export const Logo = styled.div`
  display:block;
  height:100%;
  width:100px;
  float:left;
  background:url(${logo});
  background-size: contain;
`;

export const Nav = styled.div`
  width:960px;
  margin: 0 auto;
  height:100%;
`;
export const NavSearch = styled.div`
  position:relative;
  float:left;
  z-index:99;
  .slide-enter {
    transition: all .2s ease-out;
  }
  .slide-enter-active {
    width:240px;
  }
  .slide-exit {
    transition:all .2s ease-out;
  }
  .slide-exit-active {
    width:160px;
  }
  >.iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    line-height:30px;
    width:30px;
    border-radius:15px;
    text-align:center;
  }
`;
export const NavItem = styled.div`
  line-height:56px;
  font-size:17px;
  color: #333;
  padding:0 15px;
  &.left{
    float:left;
  };
  &.right{
    float:right;
    color:#969696;
  }
  &.add-color{
    color: #ea6f5a;
  }
  .iconfont{
    font-size:18px;
  }
`;
export const SearchInput = styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  line-height:38px;
  margin:9px 0 0 20px;
  border-radius:19px;
  padding:0 30px 0 20px;
  color:#666;
  background:#eee;
  font-size:14px;
  outline:none;
  border:none;
  box-sizing:border-box;
  &::placeholder{
    color:#999;
  }
  &.focused {
    width: 240px;
    + .iconfont {
      background:#777;
      color:#fff;
    }
  } 
`;

export const SearchInfoBox = styled.div`
  position:absolute;
  top:56px;
  left:0;
  width:240px;
  padding:0 20px;
  overflow:hidden;
  background:#fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;
export const SearchInfoTitle = styled.p`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;

export const SearchInfoChange = styled.span`
  float:right;
  font-size:13px;
  i {
    display: block;
    float: left;
    margin-right: 2px;
    transition:all .2s ease-in;
  }
`;

export const SearchItem = styled.a`
  display:block;
  float:left;
  line-height:20px;
  padding:0 5px;
  margin-right:10px;
  margin-bottom:15px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
`;

export const Addition = styled.div`
  float:right;
  height:100%;
`;
export const Button = styled.button`
  height:38px;
  margin:9px 20px 0 0;
  outline:none;
  padding: 0 20px;
  height:38px;
  border-radius:19px;
  line-height:38px;
  border:1px solid #ec6149;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writing{
    background:#ec6149;
    color:#fff;
  }
`;