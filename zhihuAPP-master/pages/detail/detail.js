Page({
  data: {
    lists: {}
  },
  onReady: function() {
    wx.setNavigationBarTitle({
      title: '日报详情'
    })
  },
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: 'https://wxapi.hotapp.cn/proxy/?appkey=hotapp149399551&url=http://news-at.zhihu.com/api/4/theme/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          lists: res.data
        });
      }
    });
  }
})