import Request from '@/service/index'

// 所有数据的返回类型
import { IGetDataType } from '../../types'
// 获取用户列表数据
export function getUserList(pageUrl: string, payload: any) {
  const systemInfo = Request.post<IGetDataType>({
    url: pageUrl,
    data: payload
  })
  return systemInfo
}
