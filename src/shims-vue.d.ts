/*
 * @Description
 * @Author: Lxy
 * @Date: 2021-11-13 21:16:45
 * @LastEditTime: 2022-04-01 21:10:49
 * @LastEditors:
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.json'
