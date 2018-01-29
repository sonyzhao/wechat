const app = getApp()
Page({
  data: {
  },
  zerofind: function (event) {
    wx.navigateTo({
      url: '../zero-three-old/zero-three-old',
    })
  }
  /*
  threefind: function (event) {
    wx.navigateTo({
      url: '../three-six-old/three-six-old',
    })
  }
  onebook: function (event) {
    wx.navigateTo({
      url: '../onefind/onefind',
    })
  }*/
})