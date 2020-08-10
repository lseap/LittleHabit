// pages/newHabit/newHabit.js

var util = require('../../utils/util.js');
var app = getApp()
var header = getApp().globalData.header;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start_date: '',
    end_date: '',
    remind_time: '00:00',
    clockIn_time1: '00:00',
    clockIn_time2: '00:00',
    sdate: '',
    edate: '',
    fixedBc: "#39D69D",
    fixedColor: "#FFFFFF",
    dayBc: "#FFFFFF",
    dayColor: "#3D3D3D",
    selectfix: true,
    dayNum: 0,
    habitTapimg: "",
    habitTapname: "",
    fixborder: "1px solid #E1E1E1",
    /*weekArr: [{ day: "周一", dayselect: "false"}, 
      { day: "周二", dayselect: "false"}, 
      { day: "周三", dayselect: "false"}, 
      { day: "周四", dayselect: "false"}, 
      { day: "周五", dayselect: "false"}, 
      { day: "周六", dayselect: "false"}, 
      { day: "周日", dayselect: "false"}]*/
    dayselect1: false,
    dayselect2: false,
    dayselect3: false,
    dayselect4: false,
    dayselect5: false,
    dayselect6: false,
    dayselect7: false,
    p1background: "#BAE6D6",
    p2background: "#FFFFFF",
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  bindDateChange: function(e) {
    this.setData({
      start_date: e.detail.value
    })
  },

  bindTimeChange: function(e) {
    this.setData({
      remind_time: e.detail.value
    })
    console.log(e.detail.value)
  },

  bindTime1Change: function(e) {
    this.setData({
      clockIn_time1: e.detail.value
    })
    console.log(e.detail.value)
  },

  bindTime2Change: function(e) {
    this.setData({
      clockIn_time2: e.detail.value
    })
    console.log(e.detail.value)
  },

  fixedSelect: function() {
    this.setData({
      fixedBc: "#39D69D",
      fixedColor: "#FFFFFF",
      dayBc: "#FFFFFF",
      dayColor: "#3D3D3D",
      selectfix: true
    })
  },

  daySelect: function() {
    this.setData({
      dayBc: "#39D69D",
      dayColor: "#FFFFFF",
      fixedBc: "#FFFFFF",
      fixedColor: "#3D3D3D",
      selectfix: false
    })
  },

  fixedchoose1: function() {
    /*var index = e.currentTarget.dataset.index;
    var content = this.data.weekArr[index].dayselect;
    console.log(content);
    if (content=="false"){
      this.data.weekArr[index].dayselect = "true";
    }*/
    if (this.data.dayselect1 == false) {
      this.setData({
        dayselect1: true
      })
    } else {
      this.setData({
        dayselect1: false
      })
    }
  },

  fixedchoose2: function() {
    if (this.data.dayselect2 == false) {
      this.setData({
        dayselect2: true
      })
    } else {
      this.setData({
        dayselect2: false
      })
    }
  },

  fixedchoose3: function() {
    if (this.data.dayselect3 == false) {
      this.setData({
        dayselect3: true
      })
    } else {
      this.setData({
        dayselect3: false
      })
    }
  },

  fixedchoose4: function() {
    if (this.data.dayselect4 == false) {
      this.setData({
        dayselect4: true
      })
    } else {
      this.setData({
        dayselect4: false
      })
    }
  },

  fixedchoose5: function() {
    if (this.data.dayselect5 == false) {
      this.setData({
        dayselect5: true
      })
    } else {
      this.setData({
        dayselect5: false
      })
    }
  },

  fixedchoose6: function() {
    if (this.data.dayselect6 == false) {
      this.setData({
        dayselect6: true
      })
    } else {
      this.setData({
        dayselect6: false
      })
    }
  },

  fixedchoose7: function() {
    if (this.data.dayselect7 == false) {
      this.setData({
        dayselect7: true
      })
    } else {
      this.setData({
        dayselect7: false
      })
    }
  },

  subDay: function() {
    var num = this.data.dayNum - 1;
    if (num < 0) num = 0;
    this.setData({
      dayNum: num
    })
  },

  addDay: function() {
    var num = this.data.dayNum + 1;
    if (num > 7) num = 7;
    this.setData({
      dayNum: num
    })
  },

  pt1: function() {
    this.setData({
      p2background: "#BAE6D6",
      p1background: "#FFFFFF",
    })
  },

  pt2: function() {
    this.setData({
      p1background: "#BAE6D6",
      p2background: "#FFFFFF",
    })
  },

  confirm_button: function() {
    var that = this;
    console.log(header);
    wx.request({
      url: 'https://lseap.archains.com/habit/addHabit',
      header: header,
      data: {
        "habitId": app.globalData.addhabitid,
        "startTime": that.data.clockIn_time1,
        "endTime": that.data.clockIn_time2
      },
      success(res) {
        console.log("newHabit.js res.data: ", res.data)
      }
    })
    wx.switchTab({
      url: '/pages/today/today',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var stime = util.formatsDate(new Date());
    var etime = util.formateDate(new Date());
    this.setData({
      sdate: stime,
      edate: etime,
      start_date: stime,
      end_date: etime
    });
    this.setData({
      habitTapimg: app.globalData.addhabitimg,
      habitTapname: app.globalData.addhabitname,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})