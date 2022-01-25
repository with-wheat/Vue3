<template>
  <div class="nav-header">
    <el-icon v-if="!foldValue" class="icon" size="25" @click="handleFold"
      ><fold
    /></el-icon>
    <el-icon v-else class="icon" size="25" @click="handleFold"
      ><Expand
    /></el-icon>
    <div class="content">
      <div>面包屑</div>
      <div><user-info /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './components/user-info.vue'
export default defineComponent({
  components: { UserInfo },
  emits: ['foldChange'],
  setup(props, { emit }) {
    let foldValue = ref(false)
    const handleFold = () => {
      foldValue.value = !foldValue.value
      emit('foldChange', foldValue.value)
    }
    return { foldValue, handleFold }
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
