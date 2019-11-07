// pages/alarm/alarm.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1, //当前页为 “正计时”： 0 、“倒计时” ： 1 、“番茄钟” ： 2
    pickerIndex: [0,0],
    min: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    second: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"]
  },

  //多标签导航栏切换
  switchNav: function(e) {
    var current = e.currentTarget.dataset.current;
    console.log(current);
    this.setData({
      currentTab: current
    })
    if (current == 0) {
      this.setData({
        min: ["00"],
        second: ["00"]
      })
    } else if (current == 1) {
      this.setData({
        min: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        second: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"]
      })
    } else {
      this.setData({
        min: ["25"],
        second: ["00"]
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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