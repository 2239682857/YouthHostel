// request.js
let OK = 20000;
let ERROR = 20001;//失败
let LOGIN_ERROR = 20002;//用户名或密码错误
let ACCESS_ERROR = 20003;//权限不足
let REMOTE_ERROR = 20004;//远程调用失败
let REPE_EOOR = 20005;//重复操作
const request = options => {
  return new Promise((resolve, reject) => {
    const { data, method } = options
    if (data && method !== 'get') {
      options.data = JSON.stringify(data)
    }
    wx.request({
      header: { 'Content-Type': 'application/json' },
      ...options,
      success: function (res) {
        if (res.data.flag) {
          if (res.data.code == OK) {
            resolve(res.data)
          } else {
            console.log(res.data);
            if (res.data.code == ERROR) {
              wx.showToast({
                title: '服务器错误，请联系管理员！',
                icon: 'none',
                duration: 1500
              })
            } else if (res.data.code == LOGIN_ERROR) {
              wx.showToast({
                title: '用户名或密码错误',
                icon: 'none',
                duration: 1500
              })
            } else if (res.data.code == ACCESS_ERROR) {
              wx.showToast({
                title: '权限不够',
                icon: 'none',
                duration: 1500
              })
            } else if (res.data.code == REMOTE_ERROR) {
              wx.showToast({
                title: '远程调用失败',
                icon: 'none',
                duration: 1500
              })
            } else if (res.data.code == REPE_EOOR) {
              wx.showToast({
                title: '重复操作',
                icon: 'none',
                duration: 1500
              })
            }
          }
        } else {
          reject(res.data.data)
        }
      },
      fail: function (res) {
        reject(res.data)
      }
    })
  })
}
export default request