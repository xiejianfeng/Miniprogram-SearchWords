var vocabulary = require('../../data/vocabulary.js')

Page({
  data: {
  },
  onLoad: function (options) {
    var idx = Math.floor(Math.random() * 3648) + 1
    var word = vocabulary.wordList[idx]
    var that = this;
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + word,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({
          content: res.data.data.content,
          pron: res.data.data.pron,
          definition: res.data.data.definition
        })
      },
      fail: function () {
      },
      complete: function () {
      }
    })
  },
  
  show: function () {
    this.setData({
      showNot: true
    })
  },

  next: function () {
    this.setData({
      showNot: false
    })
    var idx = Math.floor(Math.random() * 3648) + 1
    var word = vocabulary.wordList[idx]
    var that = this;
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + word,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({
          content: res.data.data.content,
          pron: res.data.data.pron,
          definition: res.data.data.definition
        })
      },
      fail: function () {
      },
      complete: function () {
      }
    })
  },
})