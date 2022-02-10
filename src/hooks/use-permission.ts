import { useStore } from 'vuex'
/**
 * 获取用户按钮权限
 * @param pageName 页面名称
 * @param handelName 权限名称
 * @returns
 */
export function usePermission(pageName: string, handelName: string) {
  const store = useStore()
  // 获取用户按钮权限数据
  const UsePermissions = store.state.login.permission
  // 用户当前所在的路径权限
  const menus = `system:${pageName}:${handelName}`
  // 查找是否存在对应的路径
  const temp = !!UsePermissions.find((res: any) => res === menus)
  return temp
}
