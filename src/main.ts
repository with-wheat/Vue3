import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
// 引入引入element-plus
import { globalRegister } from './global'
globalRegister(createApp(App))

// icon
import { Avatar, Cellphone } from '@element-plus/icons-vue'

// import hyRequest from './service'
// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

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

// hyRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     showLoading: true
//   })
//   .then((res) => {
//     console.log(res)
//   })

createApp(App)
  .component('Cellphone', Cellphone)
  .component('avatar', Avatar)
  .use(store)
  .use(router)
  .mount('#app')
