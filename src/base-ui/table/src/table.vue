<template>
  <div class="table">
    <div class="content">
      <el-table border :data="props.data" style="width: 100%">
        <template v-for="item in props.listData" :key="item.prop">
          <el-table-column v-bind="item" align="center">
            <template #default="scope">
              <slot :name="item.slotName" :row="scope.row">
                {{ scope.row[item.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  listData: {
    type: Array,
    required: true
  }
})
</script>
<style lang="less" scoped>
.content {
  padding: 10px;
  box-sizing: border-box;
  border-top: 20px solid #f0f2f5;
}
</style>
