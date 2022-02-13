<template>
  <div class="overview">
    <div id="canvas"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'overview',
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
      store.dispatch('overView/getChartInfoListActions', res)
    })
    return {}
  }
})
</script>

<style scoped>
#canvas {
  width: 100%;
  height: 600px;
}
</style>
