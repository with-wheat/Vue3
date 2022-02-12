<template>
  <div class="modelDialog">
    <!-- 新增弹窗 -->
    <el-dialog
      v-model="centerDialogVisible"
      :title="modeTitle"
      :width="modelWidth"
      :center="modelCenter"
      destroy-on-close
    >
      <search-form v-bind="modelConfig" v-model="modelValue"></search-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >提交</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineExpose, watch } from 'vue'
// form组件
import SearchForm from '@/base-ui/form/index'
const props = defineProps({
  // 弹窗标题
  modeTitle: {
    type: String,
    required: true
  },
  // 弹窗是否居中
  modelCenter: {
    type: Boolean,
    default: true
  },
  //   // 配置文件
  modelConfig: {
    type: Object,
    required: true
  },
  // 弹窗大小
  modelWidth: {
    type: String,
    default: '30%'
  },
  // 编辑回显的值
  handelModelValue: {
    type: Object,
    default: () => ({})
  }
})
// 定义modelValue
const modelValue = ref({})
// form弹窗的显示与隐藏
const centerDialogVisible = ref(false)

// 监听handelModelValue
watch(
  () => props.handelModelValue,
  (newValue) => {
    props.modelConfig.formItem.forEach((res) => {
      modelValue.value[`${res.field}`] = newValue[`${res.field}`]
    })
  },
  { deep: true }
)
defineExpose({
  centerDialogVisible
})
</script>
<style lang="less" scope></style>
