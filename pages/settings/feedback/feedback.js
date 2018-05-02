// pages/settings/feedback/feedback.js
var app = getApp()

Page({
  data: {
    userInfo: {},
    content: "",
    connect: ""
  },
  onLoad: function (options) {
    const that = this;
    // 页面初始化 options为页面跳转所带来的参数
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },
  getContent: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
  getConnection: function (e) {
    this.setData({
      connect: e.detail.value
    })
  },
  getNowFormatDate: function () {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
      + " " + date.getHours() + seperator2 + date.getMinutes()
      + seperator2 + date.getSeconds();
    return currentdate;
  },
  submitSuggestion: function () {
 
  
  }
  
})