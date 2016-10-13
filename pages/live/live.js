Page({
  data:{
    current: 0,
    nav: ["全部", "热门游戏", "手游休闲", "娱乐新天地", "鱼秀", "颜值", "科技", "文娱课堂", "体育频道"],
    list: []
  },
  onLoad:function(options){
    let tmp = getApp().tmpData;
    for(let i=0, count = Math.ceil( Math.random()*( 55 - 22  ) + 22  );i<count;i++) {
      let num = Math.ceil( Math.random()*( tmp.length - 1  )  );
      this.data.list.push({img: `/images/${tmp[num][1]}.jpg`, text: "老司机车坏了~", id: 1});
    }
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