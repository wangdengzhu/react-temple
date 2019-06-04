import * as user from './action-type'

export const saveUserInfo = (userInfo) => {
  return {
    type: user.SAVE_USERINFO,
    userInfo
  }
}