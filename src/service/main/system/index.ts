import Request from '@/service/index'

// 所有数据的返回类型
import { IGetDataType } from '../../types'
/**
 * 获取用户角色列表数据
 * @param pageUrl 请求地址
 * @param payload 参数
 * @returns
 */
export function getUserList(pageUrl: string, payload: any) {
  const systemInfo = Request.post<IGetDataType>({
    url: pageUrl,
    data: payload
  })
  return systemInfo
}
/**
 * 删除信息
 * @param pageUrl 请求地址
 * @returns
 */
export function deleteUserInfo(url: string) {
  return Request.delete<IGetDataType>({
    url: url
  })
}
/**
 * 新增用户信息
 * @param url 地址
 * @param newData 新增信息
 * @returns
 */
export function insertUserInfo(url: string, newData: any) {
  return Request.post<IGetDataType>({
    url: url,
    data: newData
  })
}
/**
 * 编辑用户信息
 * @param url 地址
 * @param newData 编辑信息
 * @returns
 */
export function updateUserInfo(url: string, oldData: any) {
  return Request.patch<IGetDataType>({
    url: url,
    data: oldData
  })
}
