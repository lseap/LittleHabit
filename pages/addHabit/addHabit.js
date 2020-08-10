// pages/addHabit/addHabit.js
var app = getApp()
Page({

  health_true:function(){
    this.setData({
      showHealth: false,
      health_border: "0px solid #E1E1E1",
      health_title_img: "../../img/icons8-tennis-racquet-100_2.png"
    })
  },

  health_false: function () {
    this.setData({
      showHealth: true,
      health_border: "1px solid #E1E1E1",
      health_title_img: "../../img/icons8-tennis-racquet-100_1.png"
    })
  },

  study_true: function () {
    this.setData({
      showStudy: false,
      study_border: "0px solid #E1E1E1",
      study_title_img: "../../img/icons8-tennis-racquet-100_2.png"
    })
  },

  study_false: function () {
    this.setData({
      showStudy: true,
      study_border: "1px solid #E1E1E1",
      study_title_img: "../../img/icons8-tennis-racquet-100_1.png"
    })
  },

  play_true: function () {
    this.setData({
      showPlay: false,
      play_border: "0px solid #E1E1E1",
      play_title_img: "../../img/icons8-tennis-racquet-100_2.png"
    })
  },

  play_false: function () {
    this.setData({
      showPlay: true,
      play_border: "1px solid #E1E1E1",
      play_title_img: "../../img/icons8-tennis-racquet-100_1.png"
    })
  },

  work_true: function () {
    this.setData({
      showWork: false,
      work_border: "0px solid #E1E1E1",
      work_title_img: "../../img/icons8-tennis-racquet-100_2.png"
    })
  },

  work_false: function () {
    this.setData({
      showWork: true,
      work_border: "1px solid #E1E1E1",
      work_title_img: "../../img/icons8-tennis-racquet-100_1.png"
    })
  },

  health_item:function(e){
    var Index = e.currentTarget.dataset.index;
    app.globalData.addhabitimg = this.data.health_arr[Index].img;
    app.globalData.addhabitname = this.data.health_arr[Index].content;
    app.globalData.addhabitid = this.data.health_arr[Index].id;
    wx.navigateTo({
      url: '../newHabit/newHabit'
    })
  },

  study_item: function (e) {
    var Index = e.currentTarget.dataset.index;
    app.globalData.addhabitimg = this.data.study_arr[Index].img;
    app.globalData.addhabitname = this.data.study_arr[Index].content;
    app.globalData.addhabitid = this.data.study_arr[Index].id;
    wx.navigateTo({
      url: '../newHabit/newHabit'
    })
  },

  play_item: function (e) {
    var Index = e.currentTarget.dataset.index;
    app.globalData.addhabitimg = this.data.play_arr[Index].img;
    app.globalData.addhabitname = this.data.play_arr[Index].content;
    app.globalData.addhabitid = this.data.play_arr[Index].id;
    wx.navigateTo({
      url: '../newHabit/newHabit'
    })
  },

  work_item: function (e) {
    var Index = e.currentTarget.dataset.index;
    app.globalData.addhabitimg = this.data.work_arr[Index].img;
    app.globalData.addhabitname = this.data.work_arr[Index].content;
    app.globalData.addhabitid = this.data.work_arr[Index].id;
    wx.navigateTo({
      url: '../newHabit/newHabit'
    })
  },

  cusShow:function(){
    wx.navigateTo({
      url: '../customizeHabit/customizeHabit'
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    showHealth: true,
    health_border: "1px solid #E1E1E1",
    health_title_img: "../../img/icons8-tennis-racquet-100_1.png",
    index:"",
    health_arr: [
      {
        "id": "1",
        "img": "../../img/morning.png",
        "content": "早起"
      },
      {
        "id": "2",
        "img": "../../img/drink.png",
        "content": "醒来喝水"
      },
      {
        "id": "3",
        "img": "../../img/brush.png",
        "content": "睡前刷牙"
      },
      {
        "id": "4",
        "img": "../../img/emotional_management.png",
        "content": "情绪管理"
      },
      {
        "id": "5",
        "img": "../../img/sleep.png",
        "content": "吃早餐"
      },
      {
        "id": "6",
        "img": "../../img/breakfast.png",
        "content": "早睡"
      },
      {
        "id": "7",
        "img": "../../img/reduce_weight.png",
        "content": "减肥"
      },
      {
        "id": "8",
        "img": "../../img/eyeshield.png",
        "content": "护眼"
      }
    ],
    showStudy: true,
    study_border: "1px solid #E1E1E1",
    study_title_img: "../../img/icons8-tennis-racquet-100_1.png",
    study_arr: [
      {
        "id": "9",
        "img": "../../img/read.png",
        "content": "阅读"
      },
      {
        "id": "10",
        "img": "../../img/write.png",
        "content": "写作"
      },
      {
        "id": "11",
        "img": "../../img/homework.png",
        "content": "写作业"
      },
      {
        "id": "12",
        "img": "../../img/draw.png",
        "content": "画画"
      },
      {
        "id": "13",
        "img": "../../img/programing.png",
        "content": "编程"
      },
      {
        "id": "14",
        "img": "../../img/instrument.png",
        "content": "弹乐器"
      },
      {
        "id": "15",
        "img": "../../img/dance.png",
        "content": "学跳舞"
      },
      {
        "id": "16",
        "img": "../../img/sing.png",
        "content": "学唱歌"
      }
    ],
    showPlay: true,
    play_border: "1px solid #E1E1E1",
    play_title_img: "../../img/icons8-tennis-racquet-100_1.png",
    play_arr: [
      {
        "id": "17",
        "img": "../../img/run.png",
        "content": "跑步"
      },
      {
        "id": "18",
        "img": "../../img/yoga.png",
        "content": "瑜伽"
      },
      {
        "id": "19",
        "img": "../../img/basketball.png",
        "content": "篮球"
      },
      {
        "id": "20",
        "img": "../../img/soccer.png",
        "content": "足球"
      },
      {
        "id": "21",
        "img": "../../img/tennis.png",
        "content": "网球"
      },
      {
        "id": "22",
        "img": "../../img/lashing.png",
        "content": "跳绳"
      },
      {
        "id": "23",
        "img": "../../img/swimming.png",
        "content": "游泳"
      },
      {
        "id": "24",
        "img": "../../img/cycling.png",
        "content": "骑自行车"
      }
    ],
    showWork: true,
    work_border: "1px solid #E1E1E1",
    work_title_img: "../../img/icons8-tennis-racquet-100_1.png",
    work_arr: [
      {
        "id": "25",
        "img": "../../img/briefcase.png",
        "content": "工作"
      },
      {
        "id": "26",
        "img": "../../img/todo-list.png",
        "content": "写待办事项"
      },
      {
        "id": "28",
        "img": "../../img/bookmark.png",
        "content": "日记"
      },
      {
        "id": "29",
        "img": "../../img/secured-letter.png",
        "content": "清查邮件"
      },
      {
        "id": "30",
        "img": "../../img/clock.png",
        "content": "使用番茄钟"
      },
      {
        "id": "27",
        "img": "../../img/people-working-together.png",
        "content": "开会"
      },
      {
        "id": "31",
        "img": "../../img/tea.png",
        "content": "休息一下"
      },
      {
        "id": "32",
        "img": "../../img/standing-man.png",
        "content": "站立"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // wx.request({
    //   url: 'https://www.fastmock.site/mock/2b4923992c439086cd1e1b8134accb34/littleHabit/addHabit',
    //   success(res) {
    //     that.setData({
    //       health_arr: res.data.health_arr,
    //       study_arr: res.data.study_arr,
    //       play_arr: res.data.play_arr,
    //       work_arr: res.data.work_arr
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})