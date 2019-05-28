import React from 'react';
import './bottom.scss';
import { NavLink } from 'react-router-dom'
import homeIcon from '@/assets/images/home-icon.png';
import userIcon from '@/assets/images/user-icon.png';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className='list-ul'>
          <NavLink className='list' to='/'>
            <div><img src={homeIcon} alt='' /></div>
            <p>首页</p>
          </NavLink>
          <NavLink className='list' to='/'>
            <div><img src={homeIcon} alt='' /></div>
            <p>首页</p>
          </NavLink>
          <NavLink className='list' to='/'>
            <div><img src={homeIcon} alt='' /></div>
            <p>首页</p>
          </NavLink>
          <NavLink className='list' to='/profile'>
            <div><img src={userIcon} alt='' /></div>
            <p>我的</p>
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Footer;
