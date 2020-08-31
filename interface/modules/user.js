import request from '../../utils/request'
const baseUrl = getApp().globalData.baseUrl

/**
 * 用户登录
 * @param {*} data 
 */
export function login(data) {
  return request({
    url: `${baseUrl}/api-user/login`,
    method: 'post',
    data: data
  })
}
