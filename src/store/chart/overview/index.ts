import { Module } from 'vuex'
import { IChartTypes } from './types'
import { IRootState } from '../../types'
import { getChartDataList } from '@/service/chart/over-view'
const overViewModule: Module<IChartTypes, IRootState> = {
  namespaced: true,
  state() {
    return {
      // 每个分类商品的个数
      categoryCount: [],
      // 每个分类商品的销量
      categorySale: [],
      // 每个分类商品的收藏
      categoryFavor: [],
      // 销量前10的商品数量
      saleTop: [],
      // 不同城市的销量数据
      addressSale: [],
      // 商品数据统计的数量
      amountList: []
    }
  },
  mutations: {
    // 存储分类商品的个数
    saveCategoryCount(state, data: any) {
      state.categoryCount = data
    },
    saveCategorySale(state, data: any) {
      state.categorySale = data
    },
    saveCategoryFavor(state, data: any) {
      state.categoryFavor = data
    },
    saveSaleTop(state, data: any) {
      state.saleTop = data
    },
    saveAddressSale(state, data: any) {
      state.addressSale = data
    },
    saveAmountList(state, data: any) {
      state.amountList = data
    }
  },
  actions: {
    // 获取分类商品的个数
    async getChartInfoListActions({ commit }, pageName: string) {
      const chartInfo = await getChartDataList(pageName)
      const chartInfoList = chartInfo.data
      // 处理pageName
      const pageNameArr = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`save${pageNameArr}`, chartInfoList)
    }
  }
}

export default overViewModule
