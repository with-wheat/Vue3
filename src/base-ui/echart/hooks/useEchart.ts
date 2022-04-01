/*
 * @Description: Echart使用的公共hook
 * @Author: Lxy
 * @Date: 2022-03-31 22:55:08
 * @LastEditTime: 2022-04-01 21:29:04
 * @LastEditors:
 */
import * as echarts from 'echarts'
import mapJson from '../data/china.json'

// 注册地图
echarts.registerMap('china', mapJson)
/**
 *
 * @param params 绑定的dom元素
 * @returns
 */
export default function (params: HTMLElement) {
  const echartInstance = echarts.init(params)
  /**
   *
   * @param options 图表的options
   */
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }
  // 返回刷新大小的方法，以便调用
  const setResize = () => {
    echartInstance.resize()
  }
  // 监听页面大小变化
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  return {
    echartInstance,
    setOptions,
    setResize
  }
}
