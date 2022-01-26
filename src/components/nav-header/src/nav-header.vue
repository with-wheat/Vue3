<template>
  <div class="nav-header">
    <el-icon v-if="!foldValue" class="icon" size="25" @click="handleFold"
      ><fold
    /></el-icon>
    <el-icon v-else class="icon" size="25" @click="handleFold"
      ><Expand
    /></el-icon>
    <div class="content">
      <div>
        <nav-breadcrumb :breadCrumbsData="breadCrumbsDataInfo" />
      </div>
      <div><user-info /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { userStore } from '@/store'
import { useRoute } from 'vue-router'
import UserInfo from './user-info.vue'
import NavBreadcrumb from '@/base-ui/breadcrumb/index'
// 导入保存面包屑数据
import { breadCrumbsData } from '@/utils/map-menus'

export default defineComponent({
  components: { UserInfo, NavBreadcrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    let foldValue = ref(false)
    const handleFold = () => {
      foldValue.value = !foldValue.value
      emit('foldChange', foldValue.value)
    }
    // 获取面包屑数据
    const store = userStore()
    // 计算属性监听当前路由变化然后调用对应的方法获取面包屑
    const breadCrumbsDataInfo = computed(() => {
      const userMenus = store.state.login.userMenus
      // 获取当前路径
      const route = useRoute()
      const currentPath = route.path
      return breadCrumbsData(userMenus, currentPath)
    })
    return { foldValue, handleFold, breadCrumbsData, breadCrumbsDataInfo }
  }
})
</script>
<style lang="less">
.nav-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  .icon {
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
