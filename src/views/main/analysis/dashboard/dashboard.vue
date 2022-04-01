<!--
 * @Description:，
 * @Author: Lxy
 * @Date: 2022-02-08 15:43:38
 * @LastEditTime: 2022-04-01 15:26:04
 * @LastEditors:
-->
<template>
  <div class="dashboard">
    <!-- 统计数 -->
    <el-row :gutter="10">
      <template v-for="(item, index) in topPanelDatas" :key="index">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel class="digital-panel-row" :panel-data="item" />
        </el-col>
      </template>
    </el-row>
    <!-- 图表 -->
    <el-row :gutter="10">
      <el-col :md="12" :lg="8" :xl="8">
        <page-card>
          <template #cardTitleLeft> 分类商品的个数（饼图） </template>
          <template #count>
            <pie-echart :pieData="pieData" />
          </template>
        </page-card>
      </el-col>
      <el-col :md="12" :lg="8" :xl="8">
        <page-card>
          <template #cardTitleLeft> 地图 </template>
          <template #count> </template>
        </page-card>
      </el-col>
      <el-col :md="12" :lg="8" :xl="8">
        <page-card>
          <template #cardTitleLeft> 分类商品的个数（玫瑰图） </template>
          <template #count>
            <funnel-echart :pieData="pieData" />
          </template>
        </page-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :md="24" :lg="12" :xl="12">
        <page-card>
          <template #cardTitleLeft> 分类商品的个数（折线图） </template>
          <template #count>
            <axis-echart :axisData="axisData" />
          </template>
        </page-card>
      </el-col>
      <el-col :md="24" :lg="12" :xl="12">
        <page-card>
          <template #cardTitleLeft> 分类商品的个数（玫瑰图） </template>
          <template #count>
            <axis-echart :axisData="axisData" />
          </template>
        </page-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import statisticalPanel from '@/components/statistical-panel/index'
import {
  pieEchart,
  funnelEchart,
  axisEchart
} from '@/components/base-echarts/index'
import PageCard from '@/base-ui/card/index'

import { useStore } from 'vuex'
export default defineComponent({
  name: 'dashboard',
  components: {
    statisticalPanel,
    pieEchart,
    PageCard,
    funnelEchart,
    axisEchart
  },
  setup() {
    const pageName = [
      'categoryCount',
      'categorySale',
      'categoryFavor',
      'saleTop',
      'addressSale',
      'amountList'
    ]
    const store = useStore()
    console.log(store)

    // 循环发送请求
    pageName.forEach((res) => {
      store.dispatch('dashboard/getChartInfoListActions', res)
    })
    // 获取数据
    const topPanelDatas = computed(() => {
      return store.state.dashboard.amountList
    })

    // 获取每个分类商品的销量
    const axisData = computed(() => {
      return store.state.dashboard.categoryCount.map((res: any) => {
        return {
          name: res.name,
          value: res.goodsCount
        }
      })
    })

    // 获取每个分类商品的个数
    const pieData = computed(() => {
      return store.state.dashboard.categoryCount.map((res: any) => {
        return {
          name: res.name,
          value: res.goodsCount
        }
      })
    })

    return { topPanelDatas, pieData, axisData }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  background: #f0f2f5;
  .el-row {
    margin-top: 10px;
  }
}
</style>
