//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList:[
      {
        logo:"/images/pro_01.jpg",
        title:"精英贷",
        desc:"22周岁岁以上即可\n最快3小时下款\n件钧8万，最高20万"
      },
      {
        logo:"/images/pro_02.jpg",
        title:"月供贷",
        desc:"不看工作，不看流水\n不限地区，无需家人签字\n最高可贷150万"
      },
      {
        logo:"/images/pro_03.jpg",
        title:"保单贷",
        desc:"凭样版征信和保单\n官网账号密码就可进行\n最高可贷150万"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLoad:function(){
    this.setData({
      test:'01'
    })
  },
  toDetail:function(e){
    console.log(e)
    var index = e.currentTarget.dataset.index;
    console.log(index);
  }

})
