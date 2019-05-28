import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import { NavBar, Icon } from 'antd-mobile';
import Bottom from '@/components/bottom/bottom';

class App extends React.Component{
  componentDidMount(){
    console.log('loading complite')
  }
  leftClick(){
    console.log('onLeftClick1')
  }
  handleAlert(){
    alert('hahaha');
  }
  render(){
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.leftClick}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <div className="home-wrap">
          <Link to="/profile">to profile</Link>
        </div>
        <div onClick={this.handleAlert}>
          show alert
        </div>
        <Bottom></Bottom>
      </div>
    );
  }
}
export default App;
