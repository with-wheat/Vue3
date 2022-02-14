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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import statisticalPanel from '@/components/statistical-panel/index'
export default defineComponent({
  name: 'dashboard',
  components: { statisticalPanel },
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
    // 循环发送请求
    pageName.forEach((res) => {
      store.dispatch('dashboard/getChartInfoListActions', res)
    })
    // 获取数据
    const topPanelDatas = computed(() => {
      return store.state.dashboard.amountList
    })
    return { topPanelDatas }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  background: #f0f2f5;
}
</style>
