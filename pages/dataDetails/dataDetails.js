// pages/dataDetails/dataDetails.js


var wxCharts = require("../../utils/wxcharts-min.js"); //引入wxChart文件
function canvasdisplay(canvasId, categories, data) {
  var everyday = null;
  everyday = new wxCharts({
    canvasId: canvasId,
    type: "column", //图表类型
    animation: true, //是否动画展示
    // title: {
    // name: "图表标题",
    // fontSize: 20
    // },
    dataLabel: true, //是否在图表中显示数据内容值
    legend: false, //是否显示图表下方各类别的标识
    categories: categories, //数据类别分类
    series: [{
      // name: "上周净水量",
      color: "#39D69D", //柱子的颜色
      data: data,
      // format: function (val, name) {
      //   return val + "L";
      //   // return val.toFixed(1) + "L";
      // }
    }],
    dataItem: {
      color: "#39D69D" //数据颜色
    },
    yAxis: {
      fontColor: "#39D69D",
      disabled: true, //是否绘制Y轴
      format: function (val) { //返回数值
        return val.toFixed(0);
      },
      min: 1, //最小值
      max: 8, //最大值
      disableGrid: true,
      gridColor: "#fff",
    },
    xAxis: {
      fontColor: "#8A8A8A", //数据颜色
      // min: 0, //最小值
      // max: 8, //最大值
      disableGrid: true, //不绘制X轴网格(去掉X轴的刻度)
      gridColor: "#39D69D",
      // type: "acalibration" //刻度
    },
    extra: {
      column: {
        width: 30
      }
    },
    // dataPointShape: true, //是否在图标上显示数据点标志
    width: 325, //图表展示内容宽度
    height: 200, //图表展示内容高度
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    currentTab: "everyday",
    selectedEverydayTab: true,
    selectedEveryweekTab: false,
    selectedEverymonthTab: false,
    canvasData: []
  },


  //多标签导航栏切换
  switchNav: function(e) {
    var currentTab = e.currentTarget.dataset.current;
    this.setData({
      currentTab: currentTab
    })
    if (currentTab == "everyday") {
      this.setData({
        selectedEverydayTab: true,
        selectedEveryweekTab: false,
        selectedEverymonthTab: false
      })
      canvasdisplay("everyday", this.data.canvasData.everyday.categories, this.data.canvasData.everyday.data)
    } else if (currentTab == "everyweek") {
      this.setData({
        selectedEverydayTab: false,
        selectedEveryweekTab: true,
        selectedEverymonthTab: false
      })

      canvasdisplay("everyweek", this.data.canvasData.everyweek.categories, this.data.canvasData.everyweek.data)

    } else {
      this.setData({
        selectedEverydayTab: false,
        selectedEveryweekTab: false,
        selectedEverymonthTab: true
      })

      canvasdisplay("everymonth", this.data.canvasData.everymonth.categories, this.data.canvasData.everymonth.data)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    wx.request({
      url: 'https://www.fastmock.site/mock/e703cc27907fac84215aa9789ee3c0b1/LittleHabit/dataDetails',
      success(res) {
        console.log(res.data.canvasData)

        that.setData({
          data: res.data.data,
          canvasData: res.data.canvasData
        })

        canvasdisplay("everyday", that.data.canvasData.everyday.categories, that.data.canvasData.everyday.data)
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