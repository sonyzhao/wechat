Page({
  data: {
    imgUrls: [
      '',
      '',
      ''
    ],
  },
  LookAll:function(event)
  {
    wx.navigateTo({
      url: '../competitive/competitive',
    })
  },
  findClick:function(event)
  {
    wx.navigateTo({
      url: '../fenlei/fenlei',
    })
  }
})