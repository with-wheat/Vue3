import { Module } from 'vuex'

// 导入登录
import {
  accountLoginRequest,
  requestUserInfo,
  requestUserMenu
} from '@/service/login'

// 当前store的类型
import { ILoginState } from './types'
// 根目录的类型
import { IRootState } from '../types'

// 引入操作token文件
import LocalCache from '@/utils/cache'
import router from '@/router'
import { IAccount } from '@/service/login/types'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: null,
      userMenus: null,
      // 用户操作权限
      permission: []
    }
  },
  getters: {},
  mutations: {
    // 保存token
    changeToken(state, token: any) {
      // vuex保存token
      state.token = token
      LocalCache.setCache('TOKEN_KEY', token)
    },
    // 保存用户信息
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
      LocalCache.setCache('UserInfo', userInfo)
    },
    // 角色的菜单
    userMenusInfo(state, userMenu: any) {
      state.userMenus = userMenu
      LocalCache.setCache('UserMenu', userMenu)
      // 加载路由
      const route = mapMenusToRoutes(userMenu)
      // 注册动态路由
      route.forEach((res) => {
        router.addRoute('main', res)
      })
      // 获取用户的按钮权限
      const permission = mapMenusToPermissions(userMenu)
      state.permission = permission
    }
  },
  actions: {
    // 账号密码登陆
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 实现登录逻辑
      const login = await accountLoginRequest(payload)
      const { id, token } = login.data
      // 保存token
      commit('changeToken', token)
      // 获取部门列表和角色列表的信息
      dispatch('getInformation', null, { root: true })
      // 查询用户信息
      const userInfo = await requestUserInfo(id)
      // 保存用户信息
      commit('changeUserInfo', userInfo.data)
      // 获取菜单
      const userRoles = await requestUserMenu(userInfo.data.role.id)
      const userMenu = userRoles.data
      // 保存用户菜单
      commit('userMenusInfo', userMenu)
      // 跳转到main页面
      router.push('/main')
    },

    // 数据持久化
    persistence({ commit, dispatch }) {
      // 获取token
      const token = LocalCache.getCache('TOKEN_KEY')
      if (token) {
        commit('changeToken', token)
      }
      // 获取部门列表和角色列表的信息
      dispatch('getInformation', null, { root: true })
      // 获取用户信息
      const userInfo = LocalCache.getCache('UserInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      // 获取角色菜单
      const userMenu = LocalCache.getCache('UserMenu')
      if (userMenu) {
        commit('userMenusInfo', userMenu)
      }
    }
  }
}

export default loginModule
