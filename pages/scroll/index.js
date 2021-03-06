// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    scrollHeight: '',
    array:[
      {index:'1'},
      {index:'2'},
      {index:'3'},
      {index:'4'},
      {index:'5'},
      {index:'6'},
      {index:'7'},
      {index:'8'},
      {index:'3'},
      {index:'4'},
      {index:'5'},
      {index:'6'},
      {index:'7'},
      {index:'8'},
      {index:'3'},
      {index:'7'},
      {index:'8'},
      {index:'3'},
      {index:'7'},
      {index:'8'},
      {index:'3'},
    ]

  },
  // 事件处理函数
  bindViewTap() {
   
  },
  // 加载
  onLoad() {
    let that = this
    let query = wx.createSelectorQuery().in(this)
    query.select('.top_view').boundingClientRect();
    query.select('.container').boundingClientRect();

    // query.select('.scroll_area').boundingClientRect();
    query.exec((res)=>{
      console.log('res',res)
      let topViewHeight = res[0].height;
      console.log('topViewHeight',topViewHeight)
      let scrollHeight = wx.getSystemInfoSync().windowHeight-topViewHeight;
      that.setData({
        scrollHeight: scrollHeight-10
      });
      console.log('scrollHeight',that.data.scrollHeight)

    })
  },

})
