import { ref } from 'vue'
import PageModel from '@/components/page-model'

type BackFun = () => void

export function userPageModel(newBackFun: BackFun, oldBackFun: BackFun) {
  // 获取新增表单
  const pageModelRef = ref<InstanceType<typeof PageModel>>()
  const handelModelValue = ref({})
  // 新增
  const handelInsertUser = () => {
    handelModelValue.value = {}
    if (pageModelRef.value) pageModelRef.value.centerDialogVisible = true
    // 执行新增的回调方法
    newBackFun && newBackFun()
  }
  // 编辑
  const handelUpdate = (data: any) => {
    handelModelValue.value = data.row
    if (pageModelRef.value) pageModelRef.value.centerDialogVisible = true
    // 执行编辑的回调方法
    oldBackFun && oldBackFun()
  }
  return [pageModelRef, handelInsertUser, handelUpdate, handelModelValue]
}
