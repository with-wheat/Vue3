<!--
 * @Description: 封装折线图
 * @Author: Lxy
 * @Date: 2022-04-01 14:09:00
 * @LastEditTime: 2022-04-01 22:41:57
 * @LastEditors:
-->
<template>
  <div class="barChart">
    <base-echarts :options="options"></base-echarts>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import * as echarts from 'echarts'
import BaseEcharts from '@/base-ui/echart/index'
import { IDataType } from '../types'
const axisRefDom = ref<HTMLElement>()

const props = defineProps<{
  favorData: IDataType[]
  pieData: IDataType[]
}>()

const options = computed(() => {
  // 处理数据
  // 商品收藏
  const xData = props.favorData.map((res) => res.name)
  const yData = props.favorData.map((res) => res.value)
  // 商品分类
  const yPieData = props.pieData.map((res) => res.value * 800 + '')
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      top: '3%'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    xAxis: {
      data: xData
    },
    series: [
      {
        name: '分类商品的收藏',
        type: 'bar',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#29acff'
              },
              {
                offset: 1,
                color: '#4bdfff'
              }
            ]),
            borderRadius: 6
          }
        },
        label: {
          show: true,
          position: 'top'
        },
        data: yData
      },
      {
        name: '商品分类',
        type: 'bar',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#01c871'
              },
              {
                offset: 1,
                color: '#55f49c'
              }
            ]),
            borderRadius: 6
          }
        },
        label: {
          show: true,
          position: 'top'
        },
        data: yPieData
      }
    ]
  }
})
</script>

<style scoped></style>
