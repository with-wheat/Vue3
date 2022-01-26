<template>
  <div class="SearchForm">
    <!-- 搜索组件 -->
    <el-form
      ref="SearchForm"
      :model="ruleForm"
      :rules="rules"
      :label-width="props.labelWidth"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-row>
        <el-col
          v-for="(item, index) in props.formItem"
          :key="index"
          :span="props.spanLayout"
        >
          <el-form-item :style="props.itemStyle" :label="item.label">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select :placeholder="item.placeholder">
                <el-option
                  v-for="item in item.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker
                :type="item.otherOptions.type"
                unlink-panels
                range-separator="To"
                :start-placeholder="item.otherOptions.startPlaceholder"
                :end-placeholder="item.otherOptions.endPlaceholder"
                :shortcuts="shortcuts"
              >
              </el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, defineProps, PropType, onMounted } from 'vue'
import { IFromItem } from '../types'

onMounted(() => {
  console.log('')
})
const props = defineProps({
  formItem: {
    type: Array as PropType<IFromItem[]>,
    default: () => []
  },
  fromConfig: {
    type: Object,
    default: () => ({})
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px, 48px' })
  },
  // 不同尺寸改变span的值
  spanLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})

const formSize = ref('')
const ruleForm = reactive({
  name: '',
  pwd: '',
  region: '',
  time: ''
})
// 快捷选择方式
const shortcuts = [
  {
    text: '今天',
    value: new Date()
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    }
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    }
  }
]
</script>
<style lang="less" scoped>
.SearchForm {
  padding: 10px;
  box-sizing: border-box;
}
</style>
