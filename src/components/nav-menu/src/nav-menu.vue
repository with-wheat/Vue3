<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!props.isCollapse"> VUE3+TS </span>
    </div>
    <el-menu
      :default-active="active"
      class="el-menu-vertical"
      :collapse="props.isCollapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in useMenu" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon"><Menu /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="menuClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <el-icon v-if="item.icon"><Menu /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps, ref, onMounted } from 'vue'
import { userStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import { pathToMenu } from '@/utils/map-menus'
// props
const props = defineProps({
  isCollapse: Boolean
})
// 获取store的菜单
const store = userStore()
const useMenu = computed(() => store.state.login.userMenus)
// 默认激活的index
onMounted(() => {
  // console.log(firstMenu)
})
// 路由
// 获取路由
const router = useRouter()
// 获取路由对象
const route = useRoute()

// 获取当前路径
const currentPath = route.path
// 查找当前路由对象
const currenRoute = pathToMenu(useMenu.value, currentPath)
let active = ref(currenRoute.id + '')
// 路由点击事件
const menuClick = (data: any) => {
  const { url } = data
  // 跳转到对应的路由
  router.push(url ?? '/not-found')
}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }

    .el-menu {
      border-right: none;
    }

    // 目录
    .el-submenu {
      background-color: #001529 !important;
      // 二级菜单 ( 默认背景 )
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135 !important;
      }
    }

    ::v-deep .el-submenu__title {
      background-color: #001529 !important;
    }

    // hover 高亮
    .el-menu-item:hover {
      color: #fff !important; // 菜单
    }

    .el-menu-item.is-active {
      color: #fff !important;
      background-color: #0a60bd !important;
    }
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
  }
}
</style>
