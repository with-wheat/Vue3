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
          <el-button type="success">新增用户</el-button>
        </div>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 获取搜索组件
import PageSearch from '@/components/page-search/index'
// 列表组件
import PageContent from '@/components/page-content/index'
// 配置文件
import { fromConfig } from './config/search.config'
import { contentTableList } from './config/content.config'
const pageName = 'users'
// 引入公共方法
import { usePageSearch } from '@/hooks/use-page-search.ts'
const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()
</script>

<style scoped lang="less"></style>
