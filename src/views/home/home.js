import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './home.scss';
import { NavBar, Icon } from 'antd-mobile';
import Bottom from '@/components/bottom/bottom';
import { connect } from 'react-redux'
import { saveUserInfo } from '@/redux/action'

class Home extends React.Component{
  static propTypes = {
    // userInfo: PropTypes.object.isRequired,
    saveUserInfo: PropTypes.func.isRequired,
  }
  componentDidMount(){
    console.log('loading complite')
  }
  leftClick(){
    console.log('onLeftClick1')
  }
  saveInfo = () => {
    if(this.props.saveUserInfo){
      this.props.saveUserInfo({name: 'rose', phone: '18028787540'})
    }
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

        <div className="home-wrap" onClick={this.saveInfo}>
          保存个人信息
        </div>
        <Bottom></Bottom>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveUserInfo: userInfo => dispatch(saveUserInfo(userInfo))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
