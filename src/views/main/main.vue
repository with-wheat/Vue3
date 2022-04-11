<!--
 * @Description: 首页
 * @Author: Lxy
 * @Date: 2022-02-08 15:43:38
 * @LastEditTime: 2022-04-11 10:24:43
 * @LastEditors:
-->
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
          <transition name="slide-fade">
            <router-view></router-view>
          </transition>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
export default defineComponent({
  components: { NavMenu, NavHeader },
  setup() {
    const isCollapse = ref(false)
    // 监听头部收缩点击事件
    const foldChange = (flag) => {
      isCollapse.value = flag
    }
    return { isCollapse, foldChange }
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

    /*
      进入和离开动画可以使用不同
      持续时间和速度曲线。
    */
    .slide-fade-enter-active {
      transition: all 0.4s ease-out;
    }

    .slide-fade-leave-active {
      transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
      transform: translateX(30px);
      opacity: 0;
    }
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
