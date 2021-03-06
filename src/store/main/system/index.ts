import { Module } from 'vuex'
import { ElMessage } from 'element-plus'
import { systemType } from './types'
// 引入根目录类型
import { IRootState } from '../../types'

import {
  getUserList,
  deleteUserInfo,
  insertUserInfo,
  updateUserInfo
} from '@/service/main/system'

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
      menuCount: 0,
      // 部门列表
      departmentList: [],
      departmentCount: 0,
      // 商品类别列表
      categoryList: [],
      categoryCount: 0
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
    },
    // 部门信息
    changeDepartmentList(state, payload: any) {
      state.departmentList = payload
    },
    changeDepartmentCount(state, payload: number) {
      state.departmentCount = payload
    },
    // 商品类别
    changeCategoryList(state, payload: any) {
      state.categoryList = payload
    },
    changeCategoryCount(state, payload: number) {
      state.categoryCount = payload
    }
  },
  actions: {
    /**
     * 发送网络请求获取用户列表
     * @param param0
     * @param payload 参数
     */
    async getSystemList({ commit }, payload: any) {
      const { queryInfo, pageName } = payload
      const pageUrl = `/${pageName}/list`
      const userInfo = await getUserList(pageUrl, queryInfo)
      const { list, totalCount } = userInfo.data
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },
    /**
     * 发送网络请求获取用户列表
     * @param param0
     * @param payload 参数
     */
    async deleteUserInfo({ dispatch }, payload: any) {
      const { id, pageName } = payload
      const pageUrl = `/${pageName}/${id}`
      await deleteUserInfo(pageUrl)
      // 删除成功后刷新数据
      dispatch('getSystemList', {
        pageName,
        queryInfo: { offset: 0, size: 10 }
      }).then(() => {
        ElMessage({
          message: '删除成功',
          type: 'success'
        })
      })
    },
    /**
     * 新增信息
     * @param param0
     * @param payload 新增参数
     */
    async newUserInformation({ dispatch }, newData: any) {
      const { pageName, queryData } = newData
      const pageUrl = `/${pageName}`
      const insertData = await insertUserInfo(pageUrl, queryData)
      if (insertData.code === 0) {
        ElMessage({
          message: '新增成功',
          type: 'success'
        })
      } else {
        ElMessage({
          message: '新增失败',
          type: 'error'
        })
      }
      // 刷新数据
      dispatch('getSystemList', {
        pageName,
        queryInfo: { offset: 0, size: 10 }
      })
    },
    /**
     * 编辑信息
     * @param param0
     * @param oldValue 编辑参数
     */
    async oldUserInformation({ dispatch }, oldValue: any) {
      const { pageName, queryData, id } = oldValue
      const pageUrl = `/${pageName}/${id}`
      await updateUserInfo(pageUrl, queryData).then(() => {
        ElMessage({
          message: '编辑成功',
          type: 'success'
        })
      })
      // 刷新数据
      dispatch('getSystemList', {
        pageName,
        queryInfo: { offset: 0, size: 10 }
      })
    }
  }
}

export default systemModule
