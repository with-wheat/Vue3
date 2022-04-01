<!--
 * @Description: 封装折线图
 * @Author: Lxy
 * @Date: 2022-04-01 14:09:00
 * @LastEditTime: 2022-04-01 22:48:02
 * @LastEditors:
-->
<template>
  <div class="axisChart">
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
  axisData: IDataType[]
}>()

const options = computed(() => {
  // 折线颜色
  const color = ['#8B5CFF', '#00CA69']
  let xAxisData = props.axisData.map((res) => res.name)
  let yAxisData1 = props.axisData.map((res) => res.value)
  const hexToRgba = (hex, opacity) => {
    let rgbaColor = ''
    let reg = /^#[\da-f]{6}$/i
    if (reg.test(hex)) {
      rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt(
        '0x' + hex.slice(3, 5)
      )},${parseInt('0x' + hex.slice(5, 7))},${opacity})`
    }
    return rgbaColor
  }
  return {
    backgroundColor: '#fff',
    color: color,
    legend: {
      top: 20
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        let html = ''
        params.forEach((v) => {
          html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                  color[v.componentIndex]
                };"></span>
                ${v.seriesName}2020.${v.name}
                <span style="color:${
                  color[v.componentIndex]
                };font-weight:700;font-size: 18px;margin-left:5px">${
            v.value
          }</span>
                个`
        })
        return html
      },
      extraCssText:
        'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: '#ffffff',
          shadowColor: 'rgba(225,225,225,1)',
          shadowBlur: 5
        }
      }
    },
    grid: {
      top: 100,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        textStyle: {
          formatter: '{value}',
          axisName: {
            color: '#333'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#D9D9D9'
          }
        },
        data: xAxisData
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '单位（个）',
        textStyle: {
          axisName: {
            color: '#666'
          }
        },
        nameTextStyle: {
          color: '#666',
          fontSize: 12,
          lineHeight: 40
        },
        // 分割线
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#E9E9E9'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '分类商品',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          normal: {
            color: color[0],
            shadowBlur: 3,
            shadowColor: hexToRgba(color[0], 0.5),
            shadowOffsetY: 8
          }
        },
        //设置最大值最小值
        markPoint: {
          data: [
            {
              type: 'max',
              name: '最大值'
            },
            {
              type: 'min',
              name: '最小值'
            }
          ]
        },
        symbol: 'circle', //数据交叉点样式
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: hexToRgba(color[0], 0.3)
                },
                {
                  offset: 1,
                  color: hexToRgba(color[0], 0.1)
                }
              ],
              false
            ),
            shadowColor: hexToRgba(color[0], 0.1),
            shadowBlur: 10
          }
        },
        data: yAxisData1
      }
    ]
  }
})
</script>

<style scoped></style>
