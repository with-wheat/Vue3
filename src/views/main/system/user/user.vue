<template>
  <div class="user">
    <div class="search">
      <search v-bind="fromConfig" v-model="searchForm" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import search from '@/base-ui/form/index'
import { fromConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: { search },
  setup() {
    const searchForm = ref({
      id: '',
      name: '',
      password: '',
      movement: '',
      createTime: ''
    })

    return { fromConfig, searchForm }
  }
})
</script>

<style scoped></style>
