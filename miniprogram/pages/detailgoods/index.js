// pages/detailgoods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     name:'',
     img:'',
     openid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(Object.values(options));
    let id = Object.values(options)[0]
    wx.cloud.database().collection('goods').where({
      _id:id
    }).get().then(res=>{
      this.setData({
        goods:res.data[0]
      })
    })
  },
  // 查看发布店铺
  toStore (){
     wx.navigateTo({
       url: '/pages/store/index?openid='+ this.data.openid,
     })
  },
  // 加入购物车
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
     let user = wx.getStorageSync('user')
     this.setData({
       name:user.nickName,
       img:user.avatarUrl,
       openid:user._id
     })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})