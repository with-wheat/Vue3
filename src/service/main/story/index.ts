import Request from '../../index'

// 所有数据的返回类型
import { IGetDataType } from '../../types'

/**
 * 获取故事列表
 * @param pageUrl 请求地址
 * @param payload 请求参数
 */
export function getStoryList(pageUrl: string) {
  const storyData = Request.post<IGetDataType>({
    url: pageUrl
  })
  return storyData
}
