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
        v-model:currentPage="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue'
defineProps({
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
  }
})
// 向父组件发送选中的数据
const emit = defineEmits(['handleSelectionChange'])
// 选中事件
const handleSelectionChange = (even) => {
  emit('handleSelectionChange', even)
}

/* 分页 */
const currentPage4 = ref(1)
// 每页显示多少条改变事件
const handleSizeChange = (even) => {
  console.log(even)
}
// 改变页数
const handleCurrentChange = (even) => {
  console.log(even)
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
}
</style>
