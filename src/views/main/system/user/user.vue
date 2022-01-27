<template>
  <div class="user">
    <!-- 检索 -->
    <page-search :fromConfig="fromConfig" />
    <!-- 表格信息 -->
    <page-table :data="userInfo" :listData="propList">
      <template #state="scope">
        <div>
          <el-tag class="ml-2" :type="scope.row.enable ? 'success' : 'info'">{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-tag>
        </div>
      </template>
      <template #createAt="scope">
        <strong>{{ scope.row.createAt }}</strong>
      </template>
    </page-table>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, computed } from 'vue'
import { fromConfig } from './config/search.config'
import { useStore } from 'vuex'

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
    prop: 'enable',
    label: '状态',
    minWidth: '100',
    slotName: 'state'
  },
  {
    prop: 'cellphone',
    label: '号码',
    minWidth: '150'
  },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '150',
    slotName: 'createAt'
  }
]
</script>

<style scoped lang="less"></style>
