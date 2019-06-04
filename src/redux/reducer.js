import * as user from './action-type'

let defaultState = {
  userInfo: {name: 'denzel'}
}
export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case user.SAVE_USERINFO: 
      return {
        ...state,
        userInfo: action.userInfo
      }
    default: 
      return {}
  }
}