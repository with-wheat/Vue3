import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 先加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main/', true, /\.ts/)
  routeFiles.keys().forEach((res) => {
    const route = require('../router/main' + res.split('.')[1])
    allRoutes.push(route.default)
  })
  // 根据菜单获取需要添加的route
  const recurseRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((res) => {
          return res.path === menu.url
        })
        if (route) routes.push(route)
      } else {
        recurseRoute(menu.children)
      }
    }
  }
  recurseRoute(userMenus)
  return routes
}
