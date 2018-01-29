Page({
  data: {   
  },
  onLoad: function (options) {  
    var that=this;
    wx.request({
      url: 'https://URL',
      data:{},
      method:'GET',
      success:function(res){
        console.log();
      },
      fail:function(){
      
      },
      complete:function(){

      }
    })
  },
  onReady: function () {    
  },
  onShow: function () {   
  },
  onHide: function () {   
  },
  onUnload: function () {   
  }
})