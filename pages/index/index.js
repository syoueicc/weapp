//index.js
//获取应用实例
Page({
  data: {
    adList: [
      {url: '/images/6606.jpg', href: "http://baidu.com"},
      {url: '/images/9211.jpg', href: "#"},
      {url: '/images/b144.jpg', href: "#"}
    ],
    categoryList: [
      { img: "/images/c09c.jpg", text: "魔兽世界", id: 0},
      { img: "/images/eb42.jpg", text: "王者荣耀", id: 1},
      { img: "/images/80e1.jpg", text: "英雄联盟", id: 2},
      { img: "/images/e997.jpg", text: "穿越火线", id: 3},
      { img: "/images/0a56.jpg", text: "英魂之刃", id: 4},
      { img: "/images/3ae5.jpg", text: "龙珠音乐", id: 5},
      { img: "/images/60e1.jpg", text: "逆战", id: 6},
      { img: "/images/2866.jpg", text: "户外", id: 7},
      { img: "/images/0b24.jpg", text: "NBA2KOL", id: 8},
      { img: "/images/afda.jpg", text: "使命召唤OL", id: 9}
    ],
    roomList: [
    ]
  },
  onLoad() {
    let rooms = [];
    for(let i=0;i<21;i++) {
      rooms.push({img: "/images/6b4f.jpg", text: "老司机车坏了~", id: 1});
    }
    this.setData({
      roomList: rooms
    })
    
  },
  onShow () {
  }
})
