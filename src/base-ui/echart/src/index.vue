<!--
 * @Description:
 * @Author: Lxy
 * @Date: 2022-04-01 15:23:50
 * @LastEditTime: 2022-04-01 22:34:35
 * @LastEditors:
-->
<template>
  <div class="echarts">
    <div
      ref="echartDivRef"
      :style="{ width: props.width, height: props.height }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  defineProps,
  nextTick,
  withDefaults,
  watchEffect
} from 'vue'
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
  watchEffect(() => {
    setOptions(props.options)
  })
})

// 定义默认值
const props = withDefaults(defineProps<baseEchartsType>(), {
  width: '100%',
  height: '360px'
})
</script>

<style lang="less" scoped></style>
