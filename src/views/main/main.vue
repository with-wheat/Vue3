<template>
  <el-container class="main-content">
    <el-aside :width="isCollapse ? '60px' : '210px'">
      <nav-menu />
    </el-aside>
    <el-container class="page">
      <el-header class="page-header"> 头部 </el-header>
      <el-main class="page-content">
        <div class="page-info">内容</div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue'
import NavMenu from '@/components/nav-menu'
export default defineComponent({
  components: { NavMenu },
  setup() {
    const requests = () => {
      console.log(Request)
    }
    return { requests }
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

  // .page-info {
  //   background-color: #fff;
  //   border-radius: 5px;
  // }
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
