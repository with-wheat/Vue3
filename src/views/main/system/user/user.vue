<template>
  <div class="user">
    <!-- 检索 -->
    <page-search
      :fromConfig="fromConfig"
      @resetBtnClick="resetBtnClick"
      @queryBtnClick="queryBtnClick"
    />
    <!-- 表格信息 -->
    <page-content
      ref="pageContentRef"
      :pageName="pageName"
      :contentTableList="contentTableList"
      @handelUpdate="handelUpdate"
    >
      <template #state="scope">
        <div>
          <el-tag class="ml-2" :type="scope.row.enable ? 'success' : 'info'">{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-tag>
        </div>
      </template>
      <!-- 自定义表头 -->
      <template #headerHandle>
        <div>
          <el-button @click="handelInsertUser" type="success"
            >新建用户</el-button
          >
        </div>
      </template>
    </page-content>
    <!-- 新增弹窗 -->
    <page-model
      ref="pageModelRef"
      :modelConfig="modelConfigRef"
      :modeTitle="modeTitle"
      :handelModelValue="handelModelValue"
      :pageName="pageName"
    >
    </page-model>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
// 获取搜索组件
import PageSearch from '@/components/page-search/index'
// 列表组件
import PageContent from '@/components/page-content/index'
// model组件
import PageModel from '@/components/page-model/index'
// form组件
import SearchForm from '@/base-ui/form/index'
// 配置文件
import { fromConfig } from './config/search.config'
import { contentTableList } from './config/content.config'
import { modelConfig } from './config/model.config'
const pageName = 'users'
// 引入公共方法
import { usePageSearch } from '@/hooks/use-page-search.ts'
const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()

const store = useStore()
// 当vuex数据发生改变时刷新数据,modelConfigRef为配置响应更新
const modelConfigRef = computed(() => {
  // 将角色列表和部门列表赋值给表单
  const roleOptions = modelConfig.formItem.find((res) => res.field === 'roleId')
  roleOptions!.options = store.state.roleInformation.map((i) => {
    return { label: i.name, value: i.id }
  })
  const departmentOptions = modelConfig.formItem.find(
    (res) => res.field === 'departmentId'
  )
  departmentOptions!.options = store.state.departmentInfo.map((i) => {
    return { label: i.name, value: i.id }
  })
  return modelConfig
})

// 定义新增编辑的回调函数
const newBackFun = () => {
  // 拿到配置文件修改隐藏的属性
  const passwordItem = modelConfig.formItem.find(
    (res) => res.field === 'password'
  )
  const passwordOKItem = modelConfig.formItem.find(
    (res) => res.field === 'passwordOK'
  )
  passwordItem!.isShow = false
  passwordOKItem!.isShow = false
}
const oldBackFun = () => {
  const passwordItem = modelConfig.formItem.find(
    (res) => res.field === 'password'
  )
  const passwordOKItem = modelConfig.formItem.find(
    (res) => res.field === 'passwordOK'
  )
  passwordItem!.isShow = true
  passwordOKItem!.isShow = true
}

import { userPageModel } from '@/hooks/use-page-model.ts'
const [pageModelRef, handelInsertUser, handelUpdate, handelModelValue] =
  userPageModel(newBackFun, oldBackFun)

// 标题
const modeTitle = ref('新建用户')
</script>

<style scoped lang="less"></style>
