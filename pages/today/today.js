// pages/today/today.js
var header = getApp().globalData.header;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    com_motto: "已完成",
    wcom_motto: "待完成",
    wccolor: "#BAE6D6",
    wcbbt: "5rpx solid #BAE6D6",
    ccolor: "#3D3D3D",
    cbbt: "0rpx solid #BAE6D6",
    wcdisplay: "true",
    cdisplay: "none",
    menu_display: "none",
    ob_road: "../../img/othermenu.png",
    ob_height: "40rpx",
    ob_width: "40rpx",
    wcarr: [],
    carr: [],
    showModal: false,
    cshowModal: false,
    index: "",
    index2: "",

    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,

    title: "今日"
  },


  wcbt: function() {
    this.setData({
      wccolor: "#BAE6D6",
      wcbbt: "5rpx solid #BAE6D6",
      ccolor: "#3D3D3D",
      cbbt: "0rpx solid #BAE6D6",
      wcdisplay: "true",
      cdisplay: "none"
    })
  },

  cbt: function() {
    this.setData({
      wccolor: "#3D3D3D",
      wcbbt: "0rpx solid #BAE6D6",
      ccolor: "#BAE6D6",
      cbbt: "5rpx solid #BAE6D6",
      wcdisplay: "none",
      cdisplay: "true"
    })
  },

  othermenu: function() {
    if (this.data.menu_display == "none") {
      this.setData({
        menu_display: "flex",
        ob_road: "../../img/othermenu_1.png",
        ob_height: "65rpx",
        ob_width: "65rpx"
      })
    } else {
      this.setData({
        menu_display: "none",
        ob_road: "../../img/othermenu.png",
        ob_height: "40rpx",
        ob_width: "40rpx"
      })
    }
  },

  wcditem: function(e) {
    var Index = e.currentTarget.dataset.index;
    this.setData({
      showModal: true
    })
    var that = this;
    var wcarr1 = [];
    var carr1 = [];
    var dataArr = [];
    wx.request({
      url: 'https://lseap.archains.com/habit/sign',
      header: header,
      data: {
        "sign": true,
        "userHabitId": that.data.wcarr[Index].id
      },
      success(res) {
        dataArr = res.data.data;
        // console.log("res.data: ", res.data)
        // console.log("res.data[2]: ", res.data[2])
        for (let i in dataArr) {
          if (!dataArr[i].sign) {
            wcarr1.push(dataArr[i]);
          } else {
            carr1.push(dataArr[i]);
          }
        }
        that.setData({
          wcarr: wcarr1,
          carr: carr1
        })
        console.log(that.data.wcarr)
      }
    })
  },

  cditem: function(e) {
    var Index = e.currentTarget.dataset.index;
    console.log(Index)
    this.setData({
      index2: Index
    })
    this.setData({
      cshowModal: true
    })
  },

  onCancel: function() {
    this.setData({
      showModal: false
    })
  },

  conCancel: function() {
    this.setData({
      cshowModal: false
    })
  },

  onConfirm: function() {
    this.setData({
      cshowModal: false,
    })
  },

  conConfirm: function() {
    var Index = this.data.index2;
    console.log(Index)
    this.setData({
      cshowModal: false,
    })
    var that = this;
    var wcarr1 = [];
    var carr1 = [];
    var dataArr = [];
    wx.request({
      url: 'https://lseap.archains.com/habit/sign',
      header: header,
      data: {
        "sign": false,
        "userHabitId": that.data.carr[Index].id
      },
      success(res) {
        dataArr = res.data.data;
        // console.log("res.data: ", res.data)
        // console.log("res.data[2]: ", res.data[2])
        for (let i in dataArr) {
          if (!dataArr[i].sign) {
            wcarr1.push(dataArr[i]);
          } else {
            carr1.push(dataArr[i]);
          }
        }
        that.setData({
          wcarr: wcarr1,
          carr: carr1
        })
        console.log(that.data.wcarr)
      }
    })
  },

  addHabit: function() {
    this.setData({
      menu_display: "none",
      ob_road: "../../img/othermenu.png",
      ob_height: "40rpx",
      ob_width: "40rpx"
    })
    wx.navigateTo({
      url: '../addHabit/addHabit'
    })
  },

  toallhabit: function() {
    this.setData({
      menu_display: "none",
      ob_road: "../../img/othermenu.png",
      ob_height: "40rpx",
      ob_width: "40rpx"
    })
    wx.navigateTo({
      url: '../allHabit/allHabit'
    })
  },

  getcard: function() {
    this.setData({
      menu_display: "none",
      ob_road: "../../img/othermenu.png",
      ob_height: "40rpx",
      ob_width: "40rpx"
    })
    wx.navigateTo({
      url: '../getcard/getcard'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              console.log(res)
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户的code:" + res.code);
                  // 可以传给后台，再经过解析获取用户的 openid
                  // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                  // wx.request({
                  //     // 自行补上自己的 APPID 和 SECRET
                  //   url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx6da62114b4a99bf1&secret=4b7b1897583ed375daca16896d6b6648&js_code=' + res.code + '&grant_type=authorization_code',
                  //     success: res => {
                  //         // 获取到用户的 openid
                  //         console.log("用户的openid:" + res.data.openid);
                  //     }
                  // });
                  wx.request({
                    url: 'https://lseap.archains.com/user/login',
                    data: {
                      "code": res.code
                    },
                    success(res) {
                      console.log(res.data);
                      wx.setStorageSync("login_key", res.data.data.login_key);
                      getApp().globalData.header.Cookie = 'JSESSIONID=' + res.data.data;
                      console.log("res.data.sessionId:", res.data.data)
                      var wcarr1 = [];
                      var carr1 = [];
                      var dataArr = [];
                      wx.request({
                        url: 'https://lseap.archains.com/habit/getAllUserHabits',
                        header: header,
                        success(res) {
                          console.log("getalluserHabits: ", res.data)
                          dataArr = res.data.data;
                          for (let i in dataArr) {
                            if (!dataArr[i].sign) {
                              wcarr1.push(dataArr[i]);
                            } else {
                              carr1.push(dataArr[i]);
                            }
                          }
                          that.setData({
                            wcarr: wcarr1,
                            carr: carr1
                          })
                          console.log(that.data.wcarr)
                        },
                      })
                    }
                  })
                }
              });
            }
          });
        } else {
          console.log("未授权")
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });
  },


  bindGetUserInfo: function(e) {
    wx.checkSession({
      success() {
        //session_key 未过期，并且在本生命周期一直有效
        wx.getUserInfo({
          success: function(res) {

            console.log(res)
            wx.request({
              url: "https://lseap.archains.com/getinfo/",
              data: {
                "encryptedData": res.encryptedData,
                "iv": res.iv,
                "login_key": wx.getStorageSync("login_key")
              },
              method: "POST",
              header: {
                "content-type": "application/json",
                "Cookie": getApp().globalData.header
              },
              success: function(res) {
                console.log(res)
              }
            })
          }
        })
      }
    })

    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
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
    var that = this;
    var wcarr1 = [];
    var carr1 = [];
    var dataArr = [];
    console.log("hhh")
    wx.request({
      url: 'https://lseap.archains.com/habit/getAllUserHabits',
      header: header,
      success(res) {
        console.log("getalluserHabits: ", res.data)
        dataArr = res.data.data;
        for (let i in dataArr) {
          if (!dataArr[i].sign) {
            wcarr1.push(dataArr[i]);
          } else {
            carr1.push(dataArr[i]);
          }
        }
        that.setData({
          wcarr: wcarr1,
          carr: carr1
        })
        console.log(that.data.wcarr)
      },
    })
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