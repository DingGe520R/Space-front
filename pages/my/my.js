//js
Page({
  yuyuerecord: function () {
    wx.navigateTo({
      url: '../yuyuerecord/yuyuerecord',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  myposition: function (){
    wx:wx.navigateTo({
      url: '../myposition/myposition',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  roominformation: function (){
    wx.navigateTo({
      url: '../roominformation/roominformation',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  shiyonginstructions: function () {
    wx.navigateTo({
      url: '../shiyonginstructions/shiyonginstructions',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  suggestion: function () {
    wx.navigateTo({
      url: '../suggestion/suggestion',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  
  aboutus: function () {
    wx.navigateTo({
      url: '../aboutus/aboutus',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

})