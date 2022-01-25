<template>
  <div class="user">
    <div class="search">
      <search />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import search from '@/base-ui/form/index'
export default defineComponent({
  name: 'user',
  components: { search },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
