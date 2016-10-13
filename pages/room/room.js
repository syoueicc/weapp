Page({
  data:{
    tmp : [
      { text: "房间连接中...", isLog: true },
      { text: "房间连接成功", isLog: true },
      { text: "弹幕连接中...", isLog: true },
      { text: "弹幕连接成功", isLog: true },
      { text: "大西瓜： 弹幕测试测试。", isLog: false },
    ],
    inputmsg:''
  },
  onLoad:function(options){
    console.log(options);
  },
  inputMsg(e) {
    this.data.inputmsg = e.detail.value;
  },
  shot() {
    if(!this.data.inputmsg) return;
    let tmpData = this.data.tmp;
    tmpData.push( {text: `大西瓜：${this.data.inputmsg}`, isLog: false} );
    this.setData({
      tmp: tmpData
    })
  },
  onReady:function(){
    // 页面渲染完成
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