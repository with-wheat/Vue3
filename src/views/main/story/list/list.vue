<template>
  <div>list</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { getStoryList } from '@/service/main/story/index'
const storyList = reactive({})
onMounted(async () => {
  const storyData = await getStoryList('/story/list')
  storyList.value = storyData.data
  console.log(storyList.value, 'storyList')
})
</script>

<style scoped></style>
