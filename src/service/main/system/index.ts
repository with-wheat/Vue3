import Request from '@/service/index'

// 所有数据的返回类型
import { IGetDataType } from '../../types'
// 获取用户角色列表数据
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
