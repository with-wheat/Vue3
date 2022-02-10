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
      roleCount: 0,
      // 商品列表
      goodsList: [],
      goodsCount: 0,
      // 菜单列表
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    // 获取用户列表
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    // 获取用户列表的条数
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    // 用户信息
    changeUsersList(state, payload: any) {
      state.usersList = payload
    },
    changeUsersCount(state, payload: number) {
      state.usersCount = payload
    },
    // 角色信息
    changeRoleList(state, payload: any) {
      state.roleList = payload
    },
    changeRoleCount(state, payload: number) {
      state.roleCount = payload
    },
    // 商品信息
    changeGoodsList(state, payload: any) {
      state.goodsList = payload
    },
    changeGoodsCount(state, payload: number) {
      state.goodsCount = payload
    },
    // 菜单信息
    changeMenuList(state, payload: any) {
      state.menuList = payload
    },
    changeMenuCount(state, payload: number) {
      state.menuCount = payload
    }
  },
  actions: {
    // 发送网络请求获取用户列表
    async getSystemList({ commit }, payload: any) {
      const { queryInfo, pageName } = payload
      const pageUrl = `/${pageName}/list`
      const userInfo = await getUserList(pageUrl, queryInfo)
      const { list, totalCount } = userInfo.data
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    }
  }
}

export default systemModule
