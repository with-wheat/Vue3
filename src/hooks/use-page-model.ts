import { ref } from 'vue'
import PageModel from '@/components/page-model'

type BackFun = (data?: any) => void
/**
 *
 * @param newBackFun 新增的回调函数
 * @param oldBackFun 编辑的回调函数
 * @returns
 */
export function userPageModel(newBackFun?: BackFun, oldBackFun?: BackFun) {
  // 获取新增表单
  const pageModelRef = ref<InstanceType<typeof PageModel>>()
  // 保存回显的对象
  const handelModelValue = ref({})

  /**
   * 新增
   */
  const handelInsertUser = () => {
    handelModelValue.value = {}
    if (pageModelRef.value) pageModelRef.value.centerDialogVisible = true
    // 执行新增的回调方法
    newBackFun && newBackFun()
  }

  /**
   * 编辑
   * @param data 编辑的数据，做回显
   */
  const handelUpdate = (data: any) => {
    handelModelValue.value = data.row
    if (pageModelRef.value) pageModelRef.value.centerDialogVisible = true
    // 执行编辑的回调方法
    oldBackFun && oldBackFun(handelModelValue)
  }
  return [pageModelRef, handelInsertUser, handelUpdate, handelModelValue]
}
