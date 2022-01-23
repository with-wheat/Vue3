<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>
            账号登录
          </span>
        </template>
        <Login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="phone">
        <template #label>
          <span>
            <el-icon><cellphone /></el-icon>
            手机登录
          </span>
        </template>
        <Phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>
<script lang="ts" setup>
import Phone from './login-phone.vue'
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
// tabs的切换 默认值为account
const currentTab = ref('0')
// 获取账号密码
const accountRef = ref(null)
// 手机号登录
const phoneRef = ref<InstanceType<typeof Phone>>()
// 记住密码
const isKeepPassword = ref(false)

// 登录
const handleLoginClick = () => {
  if (currentTab.value === '0') {
    accountRef.value?.loginSubmit(isKeepPassword.value)
  } else {
    console.log('使用手机号登录')
  }
}
</script>
<style lang="less">
.login-panel {
  .el-tabs {
    width: 300px;
  }
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
