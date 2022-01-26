<template>
  <div class="userInfo">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <span>{{ userName }} </span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon><circle-close-filled /></el-icon>
            退出登录
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><avatar /></el-icon>
            用户信息
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><shop /></el-icon>
            系统管理
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'

const store = useStore()
// 获取用户名
const userName = store.state.login.userInfo.name
</script>
<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
