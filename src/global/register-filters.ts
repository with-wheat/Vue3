import { App } from 'vue'
import { formateUtcString } from '../utils/dataFormate'
export default function pageFilters(app: App) {
  app.config.globalProperties.$filters = {
    // 过滤时间
    formatTime(value: string) {
      return formateUtcString(value)
    }
  }
}
