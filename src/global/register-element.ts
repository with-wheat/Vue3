import { App } from 'vue'

import 'element-plus/dist/index.css'

import {
  ElAlert,
  ElAside,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElIcon,
  ElTabs,
  ElTabPane
} from 'element-plus'

const components = [
  ElAlert,
  ElAside,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElIcon,
  ElTabs,
  ElTabPane
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
