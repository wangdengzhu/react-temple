import React, { Component } from 'react';

export default (LogComponet) => {
  class LogHandle extends Component {
    componentWillMount () {
      console.log('上传了日志~',this.props.content)
    }
    render() {
      return <LogComponet />
    }
  }
  return LogHandle;
}
