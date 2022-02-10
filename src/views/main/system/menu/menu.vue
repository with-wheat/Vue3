<template>
  <div class="menu">
    <!-- 表格信息 -->
    <page-content
      ref="pageContentRef"
      :pageName="pageName"
      :contentTableList="contentTableList"
    >
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 列表组件
import PageContent from '@/components/page-content/index'
// 引入配置文件
import { contentTableList } from './config/content.config'

export default defineComponent({
  name: 'menu',
  components: { PageContent },
  setup() {
    const pageName = 'menu'
    return { contentTableList, pageName }
  }
})
</script>

<style scoped></style>
