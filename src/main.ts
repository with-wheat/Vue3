import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'

import { setUpStore } from '@/store'
// 登录信息持久化
setUpStore()
// 引入引入element-plus
import { globalRegister } from './global'
globalRegister(createApp(App))

// 引入element-plus-icon
import { Avatar, Cellphone } from '@element-plus/icons-vue'

// hyRequest.request<DataType>({
//   url: '/home/multidata',
//   method: 'GET',
//   headers: {},
//   interceptors: {
//     requestInterceptor: (config: any) => {
//       console.log('单独请求的config')
//       config.headers['token'] = '123455555'
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       console.log(res)
//       return res
//     }
//   }
// })
createApp(App)
  .component('Cellphone', Cellphone)
  .component('avatar', Avatar)
  .use(store)
  .use(router)
  .mount('#app')
