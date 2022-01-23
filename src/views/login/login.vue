<template>
  <div class="login">
    <LoginPanelVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanelVue from './components/login-panel.vue'

export default defineComponent({
  components: { LoginPanelVue },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/img/login-bg.svg');
}
</style>
