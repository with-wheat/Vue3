<template>
  <div class="user">
    <!-- 检索 -->
    <page-search
      :fromConfig="fromConfig"
      @resetBtnClick="resetBtnClick"
      @queryBtnClick="queryBtnClick"
    />
    <!-- 表格信息 -->
    <page-content
      ref="pageContentRef"
      :pageName="pageName"
      :contentTableList="contentTableList"
      @handelUpdate="handelUpdate"
    >
      <!-- 自定义表头 -->
      <template #headerHandle>
        <div>
          <el-button type="success" @click="handelInsertUser"
            >新增角色</el-button
          >
        </div>
      </template>
    </page-content>
    <page-model
      ref="pageModelRef"
      :modelConfig="modelConfig"
      :modeTitle="modeTitle"
      :handelModelValue="handelModelValue"
      :pageName="pageName"
      :checkedKeys="checkedKeys"
    >
      <div class="model-tree">
        <el-tree
          ref="treeRef"
          :data="entryMenu"
          show-checkbox
          node-key="id"
          highlight-current
          :props="{
            children: 'children',
            label: 'name'
          }"
          @Check="handelCheckChange"
        />
      </div>
    </page-model>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useStore } from 'vuex'
// 获取搜索组件
import PageSearch from '@/components/page-search/index'
// 列表组件
import PageContent from '@/components/page-content/index'
// 引入model组件
import PageModel from '@/components/page-model/index'
// 配置文件
import { fromConfig } from './config/search.config'
import { contentTableList } from './config/content.config'
import { modelConfig } from './config/model.config'
import type { ElTree } from 'element-plus'

// 导入处理node节点的方法
import { getLeafNodes } from '@/utils/map-menus.ts'

const pageName = 'role'
const treeRef = ref<InstanceType<typeof ElTree>>()

// 引入公共方法搜索重置
import { usePageSearch } from '@/hooks/use-page-search.ts'
const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()

const modeTitle = ref('新建角色')
import { userPageModel } from '@/hooks/use-page-model.ts'

const store = useStore()

// 编辑回调函数
const updateFnc = (data: any) => {
  const leafNodes = getLeafNodes(data.value.menuList)
  const leafNodesKeys = leafNodes.map((res) => {
    return res.id
  })
  console.log(leafNodesKeys, leafNodes, data.value.menuList)

  // 使用nextTick将在dom加载完后执信
  nextTick(() => {
    treeRef.value!.setCheckedKeys(leafNodesKeys)
  })
}

// 获取封装的数据和方法
const [pageModelRef, handelInsertUser, handelUpdate, handelModelValue] =
  userPageModel(null, updateFnc)

// 获取权限菜单信息
const entryMenu = computed(() => {
  return store.state.entryMenuList
})

// 当节点改变时调用
const handelCheckChange = () => {
  getCheckedKeys()
}

// 获取所有的keys
const checkedKeys = ref({})
const getCheckedKeys = () => {
  const getCheckedKeys = treeRef.value!.getCheckedKeys(false)
  const getHalfCheckedKeys = treeRef.value!.getHalfCheckedKeys(false)

  checkedKeys.value = { menuList: [...getCheckedKeys, ...getHalfCheckedKeys] }
}
</script>

<style scoped lang="less">
.model-tree {
  padding-left: 100px;
  box-sizing: border-box;
}
</style>
