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
      :modelConfig="modelConfig"
      :modeTitle="modeTitle"
      :handelModelValue="handelModelValue"
    >
    </page-model>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
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

import { userPageModel } from '@/hooks/use-page-model.ts'
const [pageModelRef, handelInsertUser, handelUpdate, handelModelValue] =
  userPageModel()

// 标题
const modeTitle = ref('新建用户')
</script>

<style scoped lang="less"></style>
