//app.js

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  },
  getInfo: function (words, cb) {
    const requestTask = wx.request({
      url: 'https://api.shanbay.com/bdc/search/',
      data: {
        word: words
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        cb(res.data);
      }
    })
  },
  
  getSen: function (wordsid, cb) {
    const requestTask = wx.request({
      url: 'https://api.shanbay.com/bdc/example/',
      data: {
        vocabulary_id: wordsid,
        "type": "sys"
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        cb(res.data);
      }
    })
  }
})