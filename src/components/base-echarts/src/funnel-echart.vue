<template>
  <div class="pieEcharts">
    <BaseEcharts :options="options" ref="pieChart" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import BaseEcharts from '@/base-ui/echart/index'
import { IDataType } from '../types'

const pieChart = ref<HTMLElement>()

const props = defineProps<{
  pieData: IDataType[]
}>()

const options = computed(() => {
  // 定义玫瑰图的颜色
  const colors = [
    '#5e81ec',
    '#ffc855',
    '#98e79b',
    '#00d695',
    '#00b29a',
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc'
  ]
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    color: colors,
    calculable: true,
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['30%', '65%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {
          show: true,
          color: 'inherit',
          position: 'outside',
          fontSize: 14,
          formatter: '{b} {d}%'
        },
        labelLine: {
          length: 1,
          length2: 20,
          smooth: true
        },
        data: props.pieData
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
