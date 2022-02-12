<template>
  <div class="page-content">
    <page-table
      :data="userInfo"
      :total="total"
      v-model:page="pageInfo"
      v-bind="contentTableList"
    >
      <!-- 表格插槽  -->
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handel-btn">
          <!-- 自定义按钮 -->
          <template>
            <slot name="headerBtn" :row="scope"></slot>
          </template>
          <el-button
            type="danger"
            size="small"
            plain
            :icon="Edit"
            v-if="isDelete"
            @click="handleDelete(scope)"
            >删除</el-button
          >
          <el-button
            type="primary"
            size="small"
            plain
            :icon="Edit"
            v-if="isUpdate"
            @click="handelUpdate(scope)"
            >编辑</el-button
          >
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
import {
  defineProps,
  computed,
  defineExpose,
  ref,
  watch,
  defineEmits
} from 'vue'
import { useStore } from 'vuex'
import { Edit, Check, Delete } from '@element-plus/icons-vue'
// 获取用户权限
import { usePermission } from '@/hooks/use-permission'
const isDelete = usePermission(props.pageName, 'delete')
const isUpdate = usePermission(props.pageName, 'update')
const isCreate = usePermission(props.pageName, 'create')
const isQuery = usePermission(props.pageName, 'query')

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
const emit = defineEmits(['handelUpdate'])
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
// 获取用户信息
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

// 删除/编辑/新增/方法
const handleDelete = (data) => {
  // 获取id
  const { id } = data.row

  const payload = {
    id,
    pageName: props.pageName
  }
  console.log(payload)
  store.dispatch('system/deleteUserInfo', payload)
}
const handelUpdate = (data) => {
  emit('handelUpdate', data)
}

// 暴露出请求方法
defineExpose({
  getPageData
})
</script>
<style lang="less" scoped></style>
