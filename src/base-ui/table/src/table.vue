<template>
  <div class="table">
    <div class="content">
      <div class="header">
        <slot name="header">
          <div class="title">
            {{ title }}
          </div>
          <div class="handle">
            <!-- 右边自定义处理 -->
            <slot name="headerHandle"></slot>
          </div>
        </slot>
      </div>
      <el-table
        border
        :data="data"
        @selection-change="handleSelectionChange"
        style="width: 100%"
        v-bind="childrenProps"
      >
        <el-table-column v-if="showSelection" type="selection" width="55" />
        <el-table-column
          v-if="showIndex"
          type="index"
          label="序号"
          align="center"
          width="80"
        ></el-table-column>
        <template v-for="item in listData" :key="item.prop">
          <el-table-column v-bind="item" align="center">
            <template #default="scope">
              <slot :name="item.slotName" :row="scope.row">
                {{ scope.row[item.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        v-if="showFooter"
        :page-sizes="[10, 20, 30]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  // 总数据
  data: {
    type: Array,
    required: true
  },
  // 表头配置
  listData: {
    type: Array,
    required: true
  },
  // 是否显示序号
  showIndex: {
    type: Boolean,
    default: false
  },
  // 是否开启选择事件
  showSelection: {
    type: Boolean,
    default: false
  },
  // title名
  title: {
    type: String,
    default: '标题'
  },
  // 当前数据的总条数
  total: {
    type: Number,
    default: 0
  },
  // 分页数据
  page: {
    type: Object,
    default: () => ({
      currentPage: 1,
      pageSize: 10
    })
  },
  // 树形展开行
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  // 是否显示分页
  showFooter: {
    type: Boolean,
    default: true
  }
})
// 向父组件发送选中的数据
const emit = defineEmits(['handleSelectionChange', 'update:page'])
// 选中事件
const handleSelectionChange = (even: any) => {
  emit('handleSelectionChange', even)
}

/* 分页 */
// 每页显示多少条改变事件
const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize })
}
// 改变页数
const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.page, currentPage })
}
</script>
<style lang="less" scoped>
.content {
  padding: 10px;
  box-sizing: border-box;
  border-top: 20px solid #f0f2f5;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 10px 0;
    box-sizing: border-box;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .el-pagination {
    text-align: right;
    margin-top: 10px;
  }
  // 照片预览被遮盖问题
  /deep/.el-table .el-table__cell {
    z-index: auto !important;
  }
}
</style>
