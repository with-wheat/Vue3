<template>
  <div class="page-content">
    <page-table
      :data="userInfo"
      :total="total"
      v-model:page="pageInfo"
      v-bind="props.contentTableList"
    >
      <!-- 表格插槽  -->
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
        <slot name="headerHandle"></slot>
      </template>
      <!-- 动态插入插槽 -->
      <template
        v-for="item in contentTable"
        :key="item.slotName"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </page-table>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed, defineExpose, ref, watch, onMounted } from 'vue'
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
// 定义数据请求的参数
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
// 监听pageInfo的变化
watch(
  pageInfo,
  () => {
    getPageData()
  },
  { deep: true }
)
// 获取用户数据
const store = useStore()
// 发送网络请求
const getPageData = (queryInfo: any = {}) => {
  // 去掉空键值对
  for (const key in queryInfo) {
    if (queryInfo[key] === '') {
      delete queryInfo[key]
    }
  }
  store.dispatch('system/getSystemList', {
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    },
    pageName: props.pageName
  })
}
getPageData()
// 获取用户信息
const userInfo = computed(() =>
  store.getters['system/pageListData'](props.pageName)
)
// 获取当前信息的总条数
const total = computed(() =>
  store.getters['system/pageListCount'](props.pageName)
)
// 获取所有的插槽
let contentTable = []
props.contentTableList.listData.forEach((res) => {
  if (
    res.slotName !== 'handler' &&
    res.slotName !== 'createAt' &&
    res.slotName !== 'updateAt' &&
    res.slotName
  ) {
    return contentTable.push(res)
  }
})

onMounted(() => {
  console.log(contentTable, 'contentTable')
})

// 暴露出请求方法
defineExpose({
  getPageData
})
</script>
<style lang="less" scoped></style>
