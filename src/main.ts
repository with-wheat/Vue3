import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入引入element-plus
import { globalRegister } from './global'
globalRegister(createApp(App))

createApp(App).use(store).use(router).mount('#app')
