<template>
  <div class="user">
    <!-- 检索 -->
    <page-search :fromConfig="fromConfig" />
    <!-- 表格信息 -->
    <page-table
      :showIndex="showIndex"
      :showSelection="showSelection"
      :data="userInfo"
      :listData="propList"
      :title="title"
      @handleSelectionChange="handleSelectionChange"
    >
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
import { defineComponent, ref, computed } from 'vue'
import { fromConfig } from './config/search.config'
import { useStore } from 'vuex'
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete
} from '@element-plus/icons-vue'

import { systemInfo } from '@/service/main/system/types'
// 获取搜索组件
import PageSearch from '@/components/page-search/index'
// 列表组件
import PageTable from '@/base-ui/table/index'
// 获取用户数据
const store = useStore()
// 搜索参数
store.dispatch('system/getSystemList', {
  url: '/users/list',
  info: {
    offset: 0,
    size: 10
  }
})
// 获取用户信息
const userInfo = computed(() => store.state.system.UserList)
const userCount = computed(() => store.state.system.userCount)
// 表格配置
const propList = [
  {
    prop: 'name',
    label: '姓名',
    minWidth: '100'
  },
  {
    prop: 'realname',
    label: '真实姓名',
    minWidth: '100'
  },
  {
    prop: 'cellphone',
    label: '号码',
    minWidth: '150'
  },
  {
    prop: 'enable',
    label: '状态',
    minWidth: '100',
    slotName: 'state'
  },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '150',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '150',
    slotName: 'updateAt'
  },
  // 操作
  {
    label: '操作',
    minWidth: '150',
    slotName: 'handler',
    fixed: 'right'
  }
]
// 是否显示序号
const showIndex = ref(true)
// 是否开启选择
const showSelection = ref(true)
// 获取选中的数据
const handleSelectionChange = (even) => {
  console.log(even, 'even')
}
// 标题
const title = ref('用户列表')
</script>

<style scoped lang="less"></style>
