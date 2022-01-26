<template>
  <div class="user">
    <!-- 检索 -->
    <page-search :fromConfig="fromConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import { fromConfig } from './config/search.config'
// 获取搜索组件
import PageSearch from '@/components/page-search/index'
</script>

<style scoped lang="less"></style>
