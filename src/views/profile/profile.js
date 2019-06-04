import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import './profile.scss';
import Bottom from '@/components/bottom/bottom';
// import log from '@/components/log';
import { List, InputItem, Toast } from 'antd-mobile';
import { connect } from 'react-redux'
import { saveUserInfo } from '@/redux/action'

class Profile extends Component {
  // static propTypes = {
  //   userInfo: PropTypes.object.isRequired,
  //   saveUserInfo: PropTypes.func.isRequired,
  // }
  constructor() {
    super();
    this.state = {
      hasError: !1,
      value: '',
      color: '',
      userInfo: {
        name: '',
        phone: ''
      }
    }
    // this.input = React.createRef();
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }
  focusText = (e) => {
    
  }
  componentDidMount (){
    if(this.props.userInfo){
      this.setState({
        userInfo: this.props.userInfo
      })
    }
    
  }
  render() {
    return (
      <div>
        <div className='user-wrap'>
          <List renderHeader={() => '个人信息'}>
            <InputItem
              type="phone"
              placeholder="请输入手机号码"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChange}
              value={this.state.userInfo.phone}
            >手机号码</InputItem>
          </List>
          <List>
            <InputItem
              type="password"
              placeholder="请输入密码"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChange}
              value={this.state.value}
            >密码</InputItem>
          </List>
          <List onClick={() => {console.log(1111)}}>
            <label htmlFor='labelInput'>name: </label>
            <input id='labelInput' type='text' ref={input => this.input = input} value='hobby' onChange={this.onChange}/>
            <input type='button' value='click' onClick={this.focusText} />
          </List>
          <div>{this.state.userInfo.name}</div>
        </div>
        <Bottom color={this.state.color}></Bottom>
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
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
