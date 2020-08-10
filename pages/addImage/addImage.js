// pages/addImage/addImage.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageArr:[
      {
        "img": "../../icons/custom/icons8-airplane-take-off-100.png",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-barbershop-100.png  ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-bathtub-100.png   ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-beer-100.png  ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-bicycle-100.png  ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-birthday-cake-100.png  ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-bookmark-100.png   ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-bowling-100.png   ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-bowling-pin-100.png    ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-bus-100.png    ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-buying-100.png    ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-cake-100.png    ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-calendar-100.png    ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-car-100.png     ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-cards-100.png     ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-climbing-wall-100.png     ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-cocktail-100.png      ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-coffee-to-go-100.png      ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-confetti-100.png       ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-contacts-100.png       ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-cutting-board-100.png        ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-deadlift-100.png        ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-earbud-headphones-100.png        ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-energy-drink-100.png        ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-film-reel-100.png         ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-flicker-free-100.png         ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-game-controller-100.png         ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-hamburger-100.png         ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-handshake-100.png         ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-headphones-100.png         ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-hospital-100.png          ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-housekeeping-100.png         ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-ice-cream-in-waffle-cone-100.png         ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-kfc-chicken-100.png",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-kitchen-100.png ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-knight-100.png ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-lipstick-100.png  ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-mac-client-100.png  ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-map-editing-100.png   ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-medical-doctor-100.png    ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-menu-100.png     ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-milk-100.png     ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-milkshake-100.png     ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-musical-notes-100.png     ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-news-100.png      ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-orange-soda-100.png      ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-potted-plant-100.png      ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-pull-up-bar-100.png      ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-rack-of-lamb-100.png      ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-radio-100.png      ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-rice-bowl-100.png      ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-running-100.png       ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-salami-pizza-100.png       ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-scooter-100.png       ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-shopping-bag-100.png       ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-shower-100.png        ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-skiing-100.png        ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-slr-camera-100.png         ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-soda-water-100.png         ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-strawberry-100.png",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-suitcase-100.png ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-train-100.png ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-trainers-100.png  ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-trekking-100.png  ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-tv-100.png ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-vegetarian-food-100.png  ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-volunteering-100.png  ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-walking-100.png",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-wash-your-hands-100.png",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-waste-separation-100.png",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-weightlifting-100.png ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-weixin-100.png ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-windows-client-100.png ",
        "status": 0
      },
      {
        "img": "../../icons/custom/icons8-wine-glass-100.png ",
        "status": 0
      },
      {
        "img": "../../icons/health/icons8-alarm-clock-100.png",
        "status": 0
      }, {
        "img": "../../icons/health/icons8-bottle-of-water-100.png",
        "status": 0
      }, {
        "img": "../../icons/health/icons8-electric-toothbrush-100.png",
        "status": 0
      }, {
        "img": "../../icons/health/icons8-eye-100.png",
        "status": 0
      }, {
        "img": "../../icons/health/icons8-girl-running-100.png",
        "status": 0
      }, {
        "img": "../../icons/health/icons8-meal-100.png",
        "status": 0
      }, {
        "img": "../../icons/health/icons8-neutral-100.png",
        "status": 0
      }, {
        "img": "../../icons/health/icons8-sleeping-in-bed-100.png",
        "status": 0
      }, {
        "img": "../../icons/sport/icons8-basketball-100.png",
        "status": 0
      }, {
        "img": "../../icons/sport/icons8-cycling-100.png",
        "status": 0
      }, {
        "img": "../../icons/sport/icons8-exercise-100.png",
        "status": 0
      }, {
        "img": "../../icons/sport/icons8-lashing-100.png",
        "status": 0
      }, {
        "img": "../../icons/sport/icons8-soccer-100.png",
        "status": 0
      }, {
        "img": "../../icons/sport/icons8-swimming-100.png",
        "status": 0
      }, {
        "img": "../../icons/sport/icons8-tennis-racquet-100.png",
        "status": 0
      }, {
        "img": "../../icons/sport/icons8-yoga-100.png",
        "status": 0
      }, {
        "img": "../../icons/study/icons8-book-shelf-100.png",
        "status": 0
      }, {
        "img": "../../icons/study/icons8-code-100.png",
        "status": 0
      }, {
        "img": "../../icons/study/icons8-dancing-100.png",
        "status": 0
      }, {
        "img": "../../icons/study/icons8-edit-100.png",
        "status": 0
      }, {
        "img": "../../icons/study/icons8-micro-100.png",
        "status": 0
      }, {
        "img": "../../icons/study/icons8-rock-music-100.png",
        "status": 0
      }, {
        "img": "../../icons/study/icons8-spiral-bound-booklet-100.png",
        "status": 0
      }, {
        "img": "../../icons/study/icons8-wacom-tablet-100.png",
        "status": 0
      }, {
        "img": "../../icons/work/icons8-briefcase-100.png",
        "status": 0
      }, {
        "img": "../../icons/work/icons8-clock-100.png",
        "status": 0
      }, {
        "img": "../../icons/work/icons8-github-100.png",
        "status": 0
      }, {
        "img": "../../icons/work/icons8-people-working-together-100.png",
        "status": 0
      }, {
        "img": "../../icons/work/icons8-secured-letter-100.png",
        "status": 0
      }, {
        "img": "../../icons/work/icons8-standing-man-100.png",
        "status": 0
      }, {
        "img": "../../icons/work/icons8-tea-100.png",
        "status": 0
      }, {
        "img": "../../icons/work/icons8-todo-list-100.png",
        "status": 0
      }
    ],
    index: 0,
    imgshow:""
  },

  confirm_button: function () {
    wx.navigateBack({
      
    })
    app.globalData.newhabitpicture = this.data.imgshow;
  },

  selectimg:function(e){
    var Index = e.currentTarget.dataset.index;
    // data中获取列表   
    var imageArr1 = this.data.imageArr;
    var imgshow1 = "";
    for (let i in imageArr1) {
      //遍历列表数据      
      if (i == Index) {
        //根据下标找到目标,改变状态  
        if (imageArr1[i].status == 0) {
          imageArr1[i].status = parseInt(imageArr1[i].status) + 1
          imgshow1 = imageArr1[i].img
        }
        else{
          imageArr1[i].status = parseInt(imageArr1[i].status) - 1
          imgshow1 = ""
        }
      }
      else{
        imageArr1[i].status = 0
      }
    }
    this.setData({
      imageArr: imageArr1,
      imgshow: imgshow1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // wx.request({
    //   url: 'https://www.fastmock.site/mock/2b4923992c439086cd1e1b8134accb34/littleHabit/addImage',
    //   success(res) {
    //     that.setData({
    //       imageArr: res.data.imgarr,
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