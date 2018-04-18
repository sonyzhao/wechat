Page({
  data: {
  },
  nullPage: function (event) {
    wx.navigateTo({
      url: '../null/null',
    })
  }, 
  findPage: function (event) {
    wx.navigateTo({
      url: '../findbook/findbook',
    })
  },
  listPage: function (event) {
    wx.navigateTo({
      url: '../list/list',
    })
  },

})