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
      usersList: [],
      usersCount: 0,
      // 角色
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    }
  },
  mutations: {
    changeUsersList(state, payload: any) {
      state.usersList = payload
    },
    changeUsersCount(state, payload: number) {
      state.usersCount = payload
    },
    changeRoleList(state, payload: any) {
      state.roleList = payload
    },
    changeRoleCount(state, payload: number) {
      state.roleCount = payload
    }
  },
  actions: {
    // 发送网络请求获取用户列表
    async getSystemList({ commit }, payload: any) {
      const { info, pageName } = payload
      const pageUrl = `/${pageName}/list`
      const userInfo = await getUserList(pageUrl, info)
      const { list, totalCount } = userInfo.data

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    }
  }
}

export default systemModule
