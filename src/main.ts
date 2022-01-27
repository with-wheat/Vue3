import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
import { setUpStore } from '@/store'
const app = createApp(App)
// 引入引入element-plus
import { globalRegister } from './global'
globalRegister(app)
// 引入element-plus-icon
import {
  Avatar,
  Cellphone,
  Fold,
  Expand,
  Menu,
  ArrowDown,
  Shop,
  CircleCloseFilled
} from '@element-plus/icons-vue'

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
// 登录信息持久化 必须放在注册路由之前
setUpStore()
app
  .component('Cellphone', Cellphone)
  .component('avatar', Avatar)
  .component('Fold', Fold)
  .component('Expand', Expand)
  .component('Menu', Menu)
  .component('arrow-down', ArrowDown)
  .component('shop', Shop)
  .component('circle-close-filled', CircleCloseFilled)
  .use(store)
  .use(router)
  .mount('#app')
