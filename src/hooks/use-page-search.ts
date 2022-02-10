import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  // 获取表格的组件
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  // 重置
  const resetBtnClick = () => {
    pageContentRef.value?.getPageData()
  }
  // 搜索事件
  const queryBtnClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, resetBtnClick, queryBtnClick]
}
