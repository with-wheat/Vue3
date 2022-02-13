import Request from '@/service/index'
import { IDataType } from './types'
enum chartUrl {
  // 每个分类商品的个数
  categoryCount = '/goods/category/count',
  // 每个分类商品的销量
  categorySale = '/goods/category/sale',
  // 每个分类商品的收藏
  categoryFavor = '/goods/category/favor',
  // 销量前10的商品数量
  saleTop = '/goods/sale/top10',
  // 不同城市的销量数据
  addressSale = '/goods/address/sale',
  // 商品数据统计的数量
  amountList = '/goods/amount/list'
}

/**
 * 获取echarts的数据
 * @param pageName 路径
 */
export function getChartDataList(pageName: string, id?: number) {
  return Request.get<IDataType>({
    url: (chartUrl as any)[pageName],
    showLoading: true
  })
}
