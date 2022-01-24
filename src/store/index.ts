import { createStore } from 'vuex'

import login from './login'
import { IRootState } from './types'
const store = createStore<IRootState>({
  state: {
    name: '',
    age: 18
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

// 数据持久化(防止数据刷新登录信息丢失)
export function setUpStore() {
  store.dispatch('persistence')
}

export default store
