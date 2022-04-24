<template>
  <div class="chat">
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtmlValue"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {
  onBeforeUnmount,
  ref,
  shallowRef,
  onMounted,
  defineProps,
  defineEmits,
  watch
} from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const props = defineProps({
  valueHtml: {
    type: String,
    default: ''
  },
  toolbarConfig: {
    type: Object,
    default: {}
  },
  editorConfig: {
    type: Object,
    default: {
      placeholder: ''
    }
  }
})

onMounted(() => {
  valueHtmlValue.value = props.valueHtml
})

const emits = defineEmits(['update:valueHtml'])

const valueHtmlValue = ref('')

watch(valueHtmlValue, () => {
  emits('update:valueHtml', valueHtmlValue.value)
})

const mode = 'default'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  console.log(1111, editor.value)
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<style scoped></style>
