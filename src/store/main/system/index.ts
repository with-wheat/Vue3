import { Module } from 'vuex'
import { systemType } from './types'
// 引入根目录类型
import { IRootState } from '../../types'

import { getUserList } from '@/service/main/system'

const systemModule: Module<systemType, IRootState> = {
  namespaced: true,
  state() {
    return {
      // 用户列表
      UserList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, payload: any) {
      state.UserList = payload
    },
    changeUserCount(state, payload: number) {
      state.userCount = payload
    }
  },
  actions: {
    // 发送网络请求获取用户列表
    async getSystemList({ commit }, payload: any) {
      console.log(payload)
      const { url, info } = payload
      const userInfo = await getUserList(url, info)
      const { list, totalCount } = userInfo.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
