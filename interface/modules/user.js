import request from '../../utils/request'
const baseUrl = getApp().globalData.baseUrl

/**
 * 用户登录
 */
export function login() {
  return request({
    url: `${baseUrl}/api-user/findAll`,
    method: 'get'
  })
}