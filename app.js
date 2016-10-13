//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  tmpData: [
      ["魔兽世界", "c09c"],
      ["王者荣耀", "eb42"],
      ["英雄联盟", "80e1"],
      ["穿越火线", "e997"],
      ["英魂之刃", "0a56"],
      ["龙珠音乐", "3ae5"],
      ["逆战", "60e1"],
      ["户外", "2866"],
      ["NBA2KOL", "0b24"],
      ["使命召唤OL", "afda"]
    ]
})