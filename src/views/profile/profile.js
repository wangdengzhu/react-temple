import React from 'react';
import './profile.scss';
import Bottom from '@/components/bottom/bottom';
import { List, InputItem, Toast } from 'antd-mobile';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: !1,
      value: ''
    }
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
              value={this.state.value}
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
        </div>
        <Bottom></Bottom>
      </div>
    );
  }
}
export default App;
