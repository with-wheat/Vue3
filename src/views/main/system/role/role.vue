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
      <!-- 自定义表头 -->
      <template #headerHandle>
        <div>
          <el-button type="success" @handelNewRole="handelNewRole"
            >新增角色</el-button
          >
        </div>
      </template>
    </page-content>
    <page-model></page-model>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 获取搜索组件
import PageSearch from '@/components/page-search/index'
// 列表组件
import PageContent from '@/components/page-content/index'
// 引入model组件
import PageModel from '@/components/page-model/index'
// 配置文件
import { fromConfig } from './config/search.config'
import { contentTableList } from './config/content.config'
const pageName = 'role'

// 引入公共方法搜索重置
import { usePageSearch } from '@/hooks/use-page-search.ts'
const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()

// 新增
// const handelNewRole = () => {}
</script>

<style scoped lang="less"></style>
