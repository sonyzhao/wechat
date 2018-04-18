Page({
  data: {
    imgUrls: [
      '../../../images/2.png',
      '../../../images/6.png',
      '../../../images/1.png'
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