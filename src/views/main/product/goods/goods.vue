<template>
  <div class="goods">
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
      <!-- 照片 -->
      <template #img="scope">
        <el-image
          style="width: 70px; height: 80px"
          :preview-src-list="[scope.row.imgUrl]"
          :src="scope.row.imgUrl"
          :fit="cover"
          lazy
        ></el-image>
      </template>
      <template #status="scope">
        <div>
          <el-tag class="ml-2" :type="scope.row.status ? 'success' : 'info'">{{
            scope.row.status ? '启用' : '禁用'
          }}</el-tag>
        </div>
      </template>
      <!-- 自定义表头 -->
      <template #headerHandle>
        <el-button type="success">新增商品</el-button>
      </template>
      <!-- 价格 -->
      <template #oldPrice="scope"> ￥{{ scope.row.oldPrice }} </template>
      <template #newPrice="scope"> ￥{{ scope.row.newPrice }} </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 获取搜索组件
import PageSearch from '@/components/page-search/index'
// 列表组件
import PageContent from '@/components/page-content/index'
// 配置文件
import { fromConfig } from './config/search.config'
import { contentTableList } from './config/content.config'
// 引入公共方法
import { usePageSearch } from '@/hooks/use-page-search.ts'
export default defineComponent({
  name: 'goods',
  components: { PageSearch, PageContent },
  setup() {
    const pageName = 'goods'
    const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()
    return {
      fromConfig,
      contentTableList,
      pageName,
      usePageSearch,
      pageContentRef,
      resetBtnClick,
      queryBtnClick
    }
  }
})
</script>

<style scoped lang="less"></style>
