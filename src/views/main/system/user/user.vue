<template>
  <div class="user">
    <div class="search">
      <search v-bind="fromConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import search from '@/base-ui/form/index'
import { fromConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: { search },
  setup() {
    return { fromConfig }
  }
})
</script>

<style scoped></style>
