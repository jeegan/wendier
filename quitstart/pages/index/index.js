//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //
  TestRequest: function() {
    
    wx.request({
      url: 'http://sas.jucheng.com/sas/UpdateAction!checkUpdate.action?versionCode=1&mobileType=0',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
         console.log(res.data)
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })

  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }




})
