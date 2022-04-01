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
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '65%',
        top: '10%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
