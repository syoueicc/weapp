Page({
  data:{
    lobby: [],
    id: 0
  },
  onLoad:function(options){
    this.data.id = options.category;
    let globalTmp = getApp().tmpData;
    let title = globalTmp[this.data.id][0];
    let num = Math.ceil(Math.random()*(50-20) + 20);
    for(let i=0;i< num; i++ ) {
        this.data.lobby.push({img: `/images/${ globalTmp[this.data.id][1] }.jpg`, text: title, id: 1});
    }
  },
  onReady:function(){
    let globalTmp = getApp().tmpData;
    let title = globalTmp[this.data.id][0];
    
    wx.setNavigationBarTitle( { title } )
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})