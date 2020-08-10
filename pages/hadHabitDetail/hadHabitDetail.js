var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectId: '',
    days: [],
    signUp: [],
    cur_year: 0,
    cur_month: 0,
    today: '' + new Date().getFullYear() + (new Date().getMonth() + 1) + new Date().getDate(),
    finish: 0,
    ccontinue: 0,
    highcontinue: 0,
    contribute: "",
    simpleRecord_Data: [],
    simpleRecord_Content: [],
    simpleRecord: [],
    toggleFlag: true
  },

  toggle: function() {
    this.setData({
      toggleFlag: !this.data.toggleFlag
    })
  },

  restart: function() {
    wx.switchTab({
      url: '../today/today',
    })
  },

  del: function() {
    wx.switchTab({
      url: '../today/today',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      objectId: options.objectId
    });
    //获取当前年月   
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(cur_year, cur_month);
    this.calculateDays(cur_year, cur_month);
    //获取当前用户当前任务的签到状态
    this.onGetSignUp();
    this.setData({
      cur_year,
      cur_month,
      weeks_ch
    })

    // var that = this;

    // wx.request({
    //   url: 'https://www.fastmock.site/mock/e703cc27907fac84215aa9789ee3c0b1/LittleHabit/sign',
    //   success(res) {
    //     console.log("sign");
    //     console.log(res.data);
    //     that.setData({
    //       finish: res.data.finish,
    //       ccontinue: res.data.ccontinue,
    //       highcontinue: res.data.highcontinue,
    //       contribute: res.data.contribute,
    //       simpleRecord_Data: res.data.simpleRecordData,
    //       simpleRecord_Content: res.data.simpleRecordContent
    //     })
    //     console.log("res.data.simpleRecordData: ", res.data.simpleRecordData);
    //   }
    // })

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

  },
  // 获取当月共多少天
  getThisMonthDays: function(year, month) {
    return new Date(year, month, 0).getDate()
  },

  // 获取当月第一天星期几
  getFirstDayOfWeek: function(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },

  // 计算当月1号前空了几个格子，把它填充在days数组的前面
  calculateEmptyGrids: function(year, month) {
    var that = this;
    //计算每个月时要清零
    that.setData({
      days: []
    });
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        var obj = {
          date: null,
          isSign: false
        }
        that.data.days.push(obj);
      }
      this.setData({
        days: that.data.days
      });
      //清空
    } else {
      this.setData({
        days: []
      });
    }
  },

  // 绘制当月天数占的格子，并把它放到days数组中
  calculateDays: function(year, month) {
    var that = this;
    const thisMonthDays = this.getThisMonthDays(year, month);
    for (let i = 1; i <= thisMonthDays; i++) {
      var obj = {
        date: i,
        isSign: false
      }
      that.data.days.push(obj);
    }
    this.setData({
      days: that.data.days
    });
  },

  //匹配判断当月与当月哪些日子签到打卡
  onJudgeSign: function() {
    var that = this;
    var signs = that.data.signUp;
    var daysArr = that.data.days;
    for (var i = 0; i < signs.length; i++) {
      var current = new Date(signs[i].date.replace(/-/g, "/"));
      var year = current.getFullYear();
      var month = current.getMonth() + 1;
      var day = current.getDate();
      day = parseInt(day);
      for (var j = 0; j < daysArr.length; j++) {
        //年月日相同并且已打卡
        if (year == that.data.cur_year && month == that.data.cur_month && daysArr[j].date == day && signs[i].isSign == true) {
          daysArr[j].isSign = true;
        }
      }
    }
    that.setData({
      days: daysArr
    });
  },

  // 切换控制年月，上一个月，下一个月
  handleCalendar: function(e) {
    const handle = e.currentTarget.dataset.handle;
    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;
    if (handle === 'prev') {
      let newMonth = cur_month - 1;
      let newYear = cur_year;
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
      }
      this.calculateEmptyGrids(newYear, newMonth);
      this.calculateDays(newYear, newMonth);
      this.onGetSignUp();
      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })
    } else {
      let newMonth = cur_month + 1;
      let newYear = cur_year;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
      }
      this.calculateEmptyGrids(newYear, newMonth);
      this.calculateDays(newYear, newMonth);
      this.onGetSignUp();
      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })
    }
  },

  //获取当前用户该任务的签到数组
  onGetSignUp: function() {
    var that = this;

    wx.request({
      url: 'https://www.fastmock.site/mock/e703cc27907fac84215aa9789ee3c0b1/LittleHabit/sign',
      success(res) {
        console.log("sign");
        console.log(res.data);
        that.setData({
          signUp: res.data.signUp,
          finish: res.data.finish,
          ccontinue: res.data.ccontinue,
          highcontinue: res.data.highcontinue,
          contribute: res.data.contribute,
          simpleRecord_Data: res.data.simpleRecordData,
          simpleRecord_Content: res.data.simpleRecordContent,
          simpleRecord: res.data.simpleRecord
        })
        console.log("res.data.simpleRecord: ", res.data.simpleRecord);
        that.onJudgeSign();
      }
    })
  }


})