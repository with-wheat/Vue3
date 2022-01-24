<template>
  <div class="account">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="rules"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, defineExpose } from 'vue'
import { useStore } from 'vuex'
import type { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
// 获取store
const store = useStore()

const formSize = ref('large')
// 表单
const loginFormRef = ref<InstanceType<typeof ElForm>>()
// 表单值
const loginForm = reactive({
  name: 'coderwhy', // 用户名
  password: '123456' // 密码
})
// 验证规则
const rules = reactive({
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '密码最少6位最多10位',
      trigger: 'blur'
    }
  ]
})
const loginSubmit = (isKeepPassword: boolean) => {
  loginFormRef.value.validate((temp) => {
    if (temp) {
      if (isKeepPassword) {
        // 本地缓存
        localCache.setCache('name', loginForm.name)
        localCache.setCache('password', loginForm.password)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }
      // 发送登录请求
      store.dispatch('login/accountLoginAction', { ...loginForm })
    }
  })
}
// 将方法暴露出去
defineExpose({ loginSubmit, loginForm })
</script>
<style lang="less" scoped></style>
