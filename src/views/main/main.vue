<template>
  <el-container class="main-content">
    <el-aside :width="isCollapse ? '60px' : '210px'">
      <nav-menu :isCollapse="isCollapse" />
    </el-aside>
    <el-container class="page">
      <el-header class="page-header">
        <nav-header @foldChange="foldChange" />
      </el-header>
      <el-main class="page-content">
        <div class="page-info">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header/nav-header.vue'
export default defineComponent({
  components: { NavMenu, NavHeader },
  setup() {
    const requests = () => {
      console.log(Request)
    }
    const isCollapse = ref(false)
    // 监听头部收缩点击事件
    const foldChange = (flag) => {
      isCollapse.value = flag
    }
    return { requests, isCollapse, foldChange }
  }
})
</script>

<style scoped lang="less">
.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
