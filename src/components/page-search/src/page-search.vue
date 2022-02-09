<template>
  <div class="page-search">
    <div class="search">
      <search v-bind="props.fromConfig" v-model="searchFormData">
        <template #header>
          <div class="searchHeader">
            <h4>检索数据</h4>
          </div>
        </template>
        <template #footer>
          <div class="searchFooter">
            <el-button type="primary" @click="handelResetClick" :icon="Edit"
              >重置</el-button
            >
            <el-button type="primary" @click="handelSearch" :icon="Search"
              >搜索</el-button
            >
          </div>
        </template>
      </search>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'
import { Edit, Search } from '@element-plus/icons-vue'
import search from '@/base-ui/form/index'
const props = defineProps({
  // 获取配置
  fromConfig: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['resetBtnClick', 'queryBtnClick'])
// 双向绑定的值为配置文件的field
const fromItems = props.fromConfig?.formItem ?? []
// 定义初始值
const formOriginData: any = {}
for (const item of fromItems) {
  formOriginData[item.field] = ''
}
// 将初始值赋值给双向绑定的值
const searchFormData = ref(formOriginData)

// 重置
const handelResetClick = () => {
  searchFormData.value = formOriginData
  emit('resetBtnClick')
}
// 搜索
const handelSearch = () => {
  emit('queryBtnClick', searchFormData.value)
}
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
