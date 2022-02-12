import { ref } from 'vue'
import PageModel from '@/components/page-model'
export function userPageModel() {
  // 获取新增表单
  const pageModelRef = ref<InstanceType<typeof PageModel>>()
  const handelModelValue = ref({})
  // 新增
  const handelInsertUser = () => {
    handelModelValue.value = {}
    pageModelRef.value.centerDialogVisible = true
  }
  // 编辑
  const handelUpdate = (data: any) => {
    handelModelValue.value = data.row
    pageModelRef.value.centerDialogVisible = true
  }
  return [pageModelRef, handelInsertUser, handelUpdate, handelModelValue]
}
