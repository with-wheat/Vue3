import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb/types'
// 保存第一个菜单
let firstMenu: any = null
/**
 * 获取角色路由
 * @param userMenus 角色菜单列表
 * @returns
 */
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
        if (!firstMenu) {
          firstMenu = menu
          console.log(firstMenu)
        }
      } else {
        recurseRoute(menu.children)
      }
    }
  }
  recurseRoute(userMenus)
  return routes
}

/**
 * 获取面包屑
 * @param userMenus 用户菜单列表
 * @param currentPath 当前所在的路由地址
 * @returns
 */
export function breadCrumbsData(userMenus: any, currentPath: any) {
  const Breadcrumbs: IBreadcrumb[] = []
  pathToMenu(userMenus, currentPath, Breadcrumbs)
  return Breadcrumbs
}

/**
 * 查找当前匹配的路由
 * @param userMenus 用户菜单列表
 * @param currentPath 当前所在的路由地址
 * @param breadcrumbArr 定义保存面包屑数据的数组
 * @returns
 */
export function pathToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbArr?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        // 如果传入了面包屑数组则保存数据
        breadcrumbArr?.push({ name: menu.name })
        breadcrumbArr?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

/**
 * 获取按钮权限
 * @param userMenus 用户菜单列表
 * @returns
 */
export function mapMenusToPermissions(userMenus: any[]) {
  // 储存权限的数据
  const permissions: string[] = []
  // 定义递归找出所有的按钮权限
  const _recurseGetPermissions = (menus: any[]) => {
    for (const item of menus) {
      if (item.type === 1 || item.type === 2) {
        _recurseGetPermissions(item.children ?? [])
      } else if (item.type === 3) {
        permissions.push(item.permission)
      }
    }
  }
  _recurseGetPermissions(userMenus)
  return permissions
}
/**
 * 获取Node数据的所有页节点
 * @param menuList Node节点数据
 * @returns
 */
export function getLeafNodes(menuList: any[]) {
  // 存储页节点
  const leafNode: any[] = []
  const recursiveNode = (menuList: any[]) => {
    for (const item of menuList) {
      if (item.children) {
        recursiveNode(item.children)
      } else {
        leafNode.push(item)
      }
    }
  }
  recursiveNode(menuList)
  return leafNode
}

export { firstMenu }
