<template>
  <div class="user">
    <!-- 检索 -->
    <page-search :fromConfig="fromConfig" />
    <!-- 表格信息 -->
    <page-content
      :pageName="pageName"
      :contentTableList="contentTableList"
    ></page-content>
  </div>
</template>

<script lang="ts" setup>
// 获取搜索组件
import PageSearch from '@/components/page-search/index'
// 列表组件
import PageContent from '@/components/page-content/index'
// 配置文件
import { fromConfig } from './config/search.config'
import { contentTableList } from './config/content.config'
const pageName = 'role'
</script>

<style scoped lang="less"></style>
