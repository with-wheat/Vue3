<template>
  <div class="chat">
    <wang-editor
      v-model:valueHtml="valueHtml"
      :toolbarConfig="toolbarConfig"
      :editorConfig="editorConfig"
    ></wang-editor>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import wangEditor from '@/components/wang-editor'
// 内容 HTML
const valueHtml = ref('qqqq')
const toolbarConfig = {}
const editorConfig = {
  placeholder: '请输入内容...'
}
</script>

<style scoped></style>
