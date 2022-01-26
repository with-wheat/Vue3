<template>
  <div class="page-search">
    <div class="search">
      <search v-bind="props.fromConfig" v-model="searchForm">
        <template #header>
          <div class="searchHeader">
            <h4>检索数据</h4>
          </div>
        </template>
        <template #footer>
          <div class="searchFooter">
            <el-button type="primary" :icon="Edit">重置</el-button>
            <el-button type="primary" :icon="Search">搜索</el-button>
          </div>
        </template>
      </search>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { Edit, Search } from '@element-plus/icons-vue'
import search from '@/base-ui/form/index'
const props = defineProps({
  // 获取配置
  fromConfig: {
    type: Object,
    required: true
  }
})
// 双向绑定的值
const searchForm = ref({
  id: '',
  name: '',
  password: '',
  movement: '',
  createTime: ''
})
</script>
<style lang="less" scoped>
.searchHeader {
  color: pink;
  text-align: center;
}
.searchFooter {
  text-align: right;
}
</style>
