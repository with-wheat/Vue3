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
    ></page-content>
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
</script>

<style scoped lang="less"></style>
