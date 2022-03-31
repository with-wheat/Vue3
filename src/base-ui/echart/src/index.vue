<template>
  <div class="echarts">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, nextTick, withDefaults } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

interface baseEchartsType {
  options: EChartsOption
  with?: string
  height?: string
}

const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  // 使用封装的echatrsHooks
  const { setOptions } = useEchart(echartDivRef.value)
  setOptions(props.options)
})

// 定义默认值
const props = withDefaults(defineProps<baseEchartsType>(), {
  width: '100%',
  height: '360px'
})
</script>

<style lang="less" scoped></style>
