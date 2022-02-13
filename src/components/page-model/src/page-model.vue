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
      <search-form
        ref="searchRef"
        v-bind="modelConfig"
        v-model="modelValue"
      ></search-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitInformation">提交</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineExpose, watch } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
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
  },
  // 引用的页面名
  pageName: {
    type: String,
    required: true
  },
  // 权限选择的节点
  checkedKeys: {
    type: Object,
    default: () => ({})
  }
})

const searchRef = ref<InstanceType<typeof SearchForm>>()

// 表单信息
const modelValue = ref({})
// form弹窗的显示与隐藏
const centerDialogVisible = ref(false)

// 监听编辑回显的值更新
watch(
  () => props.handelModelValue,
  (newValue) => {
    props.modelConfig.formItem.forEach((res) => {
      modelValue.value[`${res.field}`] = newValue[`${res.field}`]
    })
  },
  { deep: true }
)

const store = useStore()
// 提交信息
const submitInformation = () => {
  // 验证表单
  searchRef.value.SearchFormRef.validate((valid) => {
    if (valid) {
      // 编辑
      if (Object.keys(props.handelModelValue).length > 0) {
        const pageName = props.pageName
        store
          .dispatch('system/oldUserInformation', {
            pageName,
            queryData: { ...modelValue.value, ...props.checkedKeys },
            id: props.handelModelValue.id
          })
          .then(() => {
            // 关闭弹窗
            centerDialogVisible.value = false
          })
      } else {
        // 新增
        // 验证密码和确认密码是否一致
        if (modelValue.value.password !== modelValue.value.passwordOK) {
          return ElMessage.error('密码与确认密码不一致！')
        }
        // 删除确认密码
        delete modelValue.value.passwordOK
        const pageName = props.pageName
        store
          .dispatch('system/newUserInformation', {
            pageName,
            queryData: { ...modelValue.value, ...props.checkedKeys }
          })
          .then(() => {
            // 关闭弹窗
            centerDialogVisible.value = false
            return false
          })
      }
    } else {
      ElMessage({
        message: '请完善表单！',
        type: 'warning'
      })
      return false
    }
  })
}

defineExpose({
  centerDialogVisible
})
</script>
<style lang="less" scope></style>
