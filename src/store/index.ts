import { Store, createStore, useStore as useVuexStore } from 'vuex'

import login from './login'
import system from './main/system'
import dashboard from './chart/dashboard'
// 获取用户信息
import { getUserList } from '@/service/main/system/index'
import { IRootState, IStoreType } from './types'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'Lxy',
      // 部门信息
      departmentInfo: [],
      // 角色信息
      roleInformation: [],
      // 菜单信息
      entryMenuList: []
    }
  },
  mutations: {
    saveRoleInformation(state, payload: any[]) {
      state.roleInformation = payload
    },
    saveDepartmentInfo(state, payload: any[]) {
      state.departmentInfo = payload
    },
    saveEntryMenuList(state, payload: any[]) {
      state.entryMenuList = payload
    }
  },
  actions: {
    async getInformation({ commit }) {
      // 获取部门信息
      const departmentInfo = await getUserList('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentInfo.data
      // 获取角色信息
      const roleInformation = await getUserList('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleInformation.data

      // 获取权限信息
      const entryMenuData = await getUserList('/menu/list', {})
      const { list: menuList } = entryMenuData.data
      // 保存
      commit('saveRoleInformation', roleList)
      commit('saveDepartmentInfo', departmentList)
      commit('saveEntryMenuList', menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

// 数据持久化(防止数据刷新登录信息丢失)
export function setUpStore() {
  store.dispatch('login/persistence')
}
// 获取数据，支持ts
export function userStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
