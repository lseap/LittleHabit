// pages/alarm/alarm.js


var beginInterval;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    select_Music_Box: false,
    none: true,
    sea: false,
    morning: false,
    field: false,
    night: false,
    currentTab: 0, //当前页为 “正计时”： 0 、“倒计时” ： 1 、“番茄钟” ： 2
    status: "end",
    zclock_min: "00",
    zclock_second: "00",
    zclock: true,
    dclock: false,
    pickerIndex: [0, 0],
    min: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
    second: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
    habit: [],
    btn_mask: false,
    select_Habit_box: false,
    selectedHabit: [],
    selected: false,
    begin_flag: true,
    pause_flag: false,
    end_or_continue_flag: false
  },

  selectMusic: function() {
    this.setData({
      btn_mask: true,
      select_Music_Box: true
    })
  },

  snone: function(e) {
    const none = e.currentTarget.dataset.selectedMusic;
    this.setData({
      none: true,
      sea: false,
      morning: false,
      field: false,
      night: false,
      select_Music_Box: false,
      btn_mask: false,
    })
  },

  ssea: function(e) {
    const none = e.currentTarget.dataset.selectedMusic;
    this.setData({
      none: false,
      sea: true,
      morning: false,
      field: false,
      night: false,
      select_Music_Box: false,
      btn_mask: false,
    })
  },

  smorning: function(e) {
    const none = e.currentTarget.dataset.selectedMusic;
    this.setData({
      none: false,
      sea: false,
      morning: true,
      field: false,
      night: false,
      select_Music_Box: false,
      btn_mask: false,
    })
  },

  sfield: function(e) {
    const none = e.currentTarget.dataset.selectedMusic;
    this.setData({
      none: false,
      sea: false,
      morning: false,
      field: true,
      night: false,
      select_Music_Box: false,
      btn_mask: false,
    })
  },

  snight: function(e) {
    const none = e.currentTarget.dataset.selectedMusic;
    this.setData({
      none: false,
      sea: false,
      morning: false,
      field: false,
      night: true,
      select_Music_Box: false,
      btn_mask: false,
    })
  },

  data_Statistics: function() {
    wx.navigateTo({
      url: '../dataStatistics/dataStatistics',
    })
  },


  //多标签导航栏切换
  switchNav: function(e) {
    clearInterval(beginInterval)
    this.setData({
      selected: false
    })
    var current = e.currentTarget.dataset.current;
    console.log("current: ", current);
    this.setData({
      currentTab: current
    })
    if (current == 0) {
      this.setData({
        zclock: true,
        dclock: false,
        zclock_min: "00",
        zclock_second: "00",
        begin_flag: true,
        pause_flag: false,
        end_or_continue_flag: false
      })
    } else if (current == 1) {
      this.setData({
        zclock: false,
        dclock: true,
        begin_flag: true,
        pause_flag: false,
        end_or_continue_flag: false
      })
    }
  },

  bindchange: function(e) {
    // console.log(e.detail.value)
    this.setData({
      pickerIndex: e.detail.value
    })
    // console.log("pickerIndex: ", this.data.pickerIndex)
  },

  selectHabit_btn: function() {
    this.setData({
      btn_mask: true,
      select_Habit_box: true
    })
  },

  deleteSHabit: function() {
    this.setData({
      btn_mask: false,
      select_Habit_box: false,
      selectedHabit: [],
      selected: false
    })
  },

  selectHabit: function(e) {
    this.setData({
      btn_mask: false,
      select_Habit_box: false,
      selectedHabit: e.currentTarget.dataset.selected,
      selected: true
    })
  },

  seleted_Change: function() {
    if (this.data.status == "begin") {

    } else if (this.data.status == "end") {
      this.setData({
        btn_mask: true,
        select_Habit_box: true,
        selected: false
      })
    }

  },

  checkTime: function(t) {
    if (t < 10) {
      t = "0" + t
    }
    return t
  },

  zcount: function() {

    var that = this;
    var zclock_secondT = ++this.data.zclock_second
    var zclock_minT = parseInt(this.data.zclock_min)
    if (zclock_secondT >= 60) {
      zclock_minT = ++this.data.zclock_min
      zclock_secondT = 0
    }
    zclock_secondT = this.checkTime(zclock_secondT)
    zclock_minT = this.checkTime(zclock_minT)


    that.setData({
      zclock_min: zclock_minT,
      zclock_second: zclock_secondT
    })
  },

  dcount: function() {

    var that = this;
    var zclock_secondT = parseInt(this.data.zclock_second)
    var zclock_minT = parseInt(this.data.zclock_min)
    if (zclock_minT == 0 && zclock_secondT == 0) {
      wx.showModal({
        title: '提示',
        content: '倒计时时间已到，是否保存记录并退出？',
        success: function(res) {
          if (res.confirm) {
            console.log("end!!!!!")
          } else
            return
        }
      })
      console.log("00:00")
      clearInterval(beginInterval)
      this.setData({
        status: "end",
        zclock: false,
        dclock: true,
        begin_flag: true,
        pause_flag: false,
        end_or_continue_flag: false
      })
    } else if (zclock_secondT <= 0) {
      zclock_secondT = 59
      zclock_minT = --this.data.zclock_min
    } else
      zclock_secondT = parseInt(this.data.zclock_second) - 1
    zclock_minT = this.checkTime(zclock_minT)
    zclock_secondT = this.checkTime(zclock_secondT)


    this.setData({
      zclock_min: zclock_minT,
      zclock_second: zclock_secondT
    })
  },

  begin: function() {
    if (this.data.selected == true) {
      this.setData({
        status: "begin"
      })
      if (this.data.currentTab == 0) {
        this.setData({
          begin_flag: false,
          pause_flag: true
        })
        beginInterval = setInterval(this.zcount, 1000)
      } else if (this.data.currentTab == 1) {
        console.log("pickerIndex: ", this.data.pickerIndex)


        this.setData({
          zclock_min: this.data.min[this.data.pickerIndex[0]],
          zclock_second: this.data.second[this.data.pickerIndex[1]],
          zclock: true,
          dclock: false,
          begin_flag: false,
          pause_flag: true,
          pickerIndex: [0, 0]
        })
        beginInterval = setInterval(this.dcount, 1000)
      }
    }
  },

  pause: function() {
    this.setData({
      pause_flag: false,
      end_or_continue_flag: true
    })
    clearInterval(beginInterval)
  },

  continuebtn: function() {
    if (this.data.currentTab == 0) {
      this.setData({
        pause_flag: true,
        end_or_continue_flag: false
      })
      beginInterval = setInterval(this.zcount, 1000)
    } else if (this.data.currentTab == 1) {
      this.setData({
        pause_flag: true,
        end_or_continue_flag: false
      })
      beginInterval = setInterval(this.dcount, 1000)
    }

  },

  end: function() {
    this.setData({
      status: "end",
      zclock_min: "00",
      zclock_second: "00",
      begin_flag: true,
      pause_flag: false,
      end_or_continue_flag: false
    })
    clearInterval(beginInterval)

    if (this.data.currentTab == 1) {
      this.setData({
        status: "end",
        zclock: false,
        dclock: true,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/e703cc27907fac84215aa9789ee3c0b1/LittleHabit/Clock_selectHabit',
      success(res) {
        console.log("res.data.habit: ", res.data.habit);

        that.setData({
          habit: res.data.habit
        })
      }
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