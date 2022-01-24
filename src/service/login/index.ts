import Request from '../index'
import { IAccount, IDataType, ILoginResult } from './types'

enum LoginAPI {
  // 登录
  AccountLogin = '/login',
  // 用户信息
  loginUserInfo = '/users/',
  // 获取角色对应的菜单
  UserRolesMenu = '/role/'
}

// 登录
export function accountLoginRequest(account: IAccount) {
  return Request.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
// 获取用户信息
export function requestUserInfo(id: number) {
  return Request.get<IDataType>({
    url: LoginAPI.loginUserInfo + id
  })
}
// 获取用户角色菜单
export function requestUserMenu(id: number) {
  return Request.get<IDataType>({
    url: LoginAPI.UserRolesMenu + id + '/menu'
  })
}
