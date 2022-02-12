<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in breadCrumbsData"
        :key="index"
        :to="{ path: item.path }"
        >{{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, onMounted } from 'vue'
onMounted(() => {
  console.log(props.breadCrumbsData)
})
// 导入接收类型
import { IBreadcrumb } from '../types'

// props
const props = defineProps({
  breadCrumbsData: {
    type: Array as IBreadcrumb,
    default: () => []
  }
})
</script>
<style lang="less" scoped></style>
