<template>
  <div class="page-content">
    <page-table :data="userInfo" v-bind="props.contentTableList">
      <!-- 表格插槽  -->
      <template #state="scope">
        <div>
          <el-tag class="ml-2" :type="scope.row.enable ? 'success' : 'info'">{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-tag>
        </div>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handel-btn">
          <el-button type="danger" size="small" :icon="Delete">删除</el-button>
          <el-button type="primary" size="small" :icon="Edit">编辑</el-button>
        </div>
      </template>
      <!-- 自定义表头 -->
      <template #headerHandle>
        <div>
          <el-button type="success">新建用户</el-button>
        </div>
      </template>
    </page-table>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
// 列表组件
import PageTable from '@/base-ui/table/index'
const props = defineProps({
  contentTableList: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})
// 获取用户数据
const store = useStore()
// 搜索参数
store.dispatch('system/getSystemList', {
  info: {
    offset: 0,
    size: 10
  },
  pageName: props.pageName
})
// 获取用户信息
const userInfo = computed(() =>
  store.getters['system/pageListData'](props.pageName)
)
// const userCount = computed(() => store.state.system.userCount)
</script>
<style lang="less" scoped></style>
