<template>
  <div class="SearchForm">
    <!-- 搜索组件 -->
    <header>
      <slot name="header"></slot>
    </header>
    <el-form
      ref="SearchFormRef"
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
                v-model="SearchForm[`${item.field}`]"
                :show-password="item.type === 'password'"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select
                v-model="SearchForm[`${item.field}`]"
                :placeholder="item.placeholder"
              >
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
                v-model="SearchForm[`${item.field}`]"
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
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import {
  ref,
  reactive,
  defineProps,
  defineEmits,
  PropType,
  onMounted,
  watch
} from 'vue'
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
  },
  // 表单值绑定
  modelValue: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

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

// 获取双向绑定的数据
const SearchForm = ref({ ...props.modelValue })
// 监听数据的改变
watch(
  SearchForm,
  (newValue) => {
    // 跟新父组件实现双向绑定，父组件不需要调用此函数
    emit('update:modelValue', newValue)
  },
  { deep: true }
)
</script>
<style lang="less" scoped>
.SearchForm {
  padding: 10px;
  box-sizing: border-box;
}
</style>
