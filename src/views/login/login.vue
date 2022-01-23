<template>
  <div>登录</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  created() {
    console.log(process.env.NODE_ENV)
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped></style>
