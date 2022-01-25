import { Store, createStore, useStore as useVuexStore } from 'vuex'

import login from './login'
import { IRootState, IStoreType } from './types'
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
  store.dispatch('login/persistence')
}
// 获取数据，支持ts
export function userStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
