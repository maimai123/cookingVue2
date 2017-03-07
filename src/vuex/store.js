import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

const state = {
    totalTime: 8,
    lists: [
      {
        name : '卷福',
        avatar : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
        date : '2016-12-25',
        totalTime : '6',
        comment : '12月25日晚上，陪女朋友一起过圣诞节需要6个小时',
        isUseful:true
      },
      {
        name : '花生',
        avatar : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
        date : '2016-12-25',
        totalTime : '2',
        comment : '陪女朋友需要2个小时',
        isUseful:false
      }
  ]
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
