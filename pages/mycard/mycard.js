// pages/mycard/mycard.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardnum:"",
    cardarr:[]
  },

  selectimg: function (e) {
    var Index = e.currentTarget.dataset.index;
    // data中获取列表   
    var imageArr1 = this.data.cardarr;
    var imgshow1 = "";
    imgshow1 = imageArr1[Index].img
    app.globalData.cardselect = this.data.imgshow1;
    wx.navigateTo({
      url: '../card_detail/card_detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/2b4923992c439086cd1e1b8134accb34/littleHabit/mycard',
      success(res) {
        that.setData({
          cardarr: res.data.cardarr,
          cardnum: res.data.cardnum
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