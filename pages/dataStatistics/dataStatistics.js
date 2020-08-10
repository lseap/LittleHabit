// pages/dataStatistics/dataStatistics.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    index: 0
    // startDate: "",
    // imgPath: "",
    // imgContent: "",
    // keepDays: 0,
    // keepTime: ""
  },


  gotoDataDetails: function(e) {
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../dataDetails/dataDetails',
    })
    app.globalData.dataStatisticsToDataDetails = this.data.data[index].imgContent
    console.log("app.globalData.dataStatisticsToDataDetails: ", app.globalData.dataStatisticsToDataDetails)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    
    wx.request({
      url: 'https://www.fastmock.site/mock/e703cc27907fac84215aa9789ee3c0b1/LittleHabit/dataStatistics',
      success(res) {
        console.log(res.data.dataStatistics)

        that.setData({
          // habit: res.data.habit,
          data: res.data.dataStatistics,
          // startDate: "",
          // imgPath: "",
          // imgContent: "",
          // keepDays: 0,
          // keepTime: ""
        })
      }
    })
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