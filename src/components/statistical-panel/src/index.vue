<template>
  <div class="statistical">
    <div class="header">
      <span>{{ panelData.title }}</span>
      <el-tooltip :content="panelData.tips" placement="top" effect="light">
        <el-icon><warning-filled /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <counter-up :number="panelData.number1" :option="counterOption2" />
    </div>
    <div class="footer">
      <span>
        {{ panelData.subtitle }}
        <counter-up :number="panelData.number2" :option="counterOption1" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import counterUp from '@/base-ui/count-up'

export default defineComponent({
  components: {
    counterUp
  },
  props: {
    panelData: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },

  setup() {
    const counterOption1 = {
      decimalPlaces: 0, // 保留两位
      prefix: '' // 单位
    }
    const counterOption2 = {
      decimalPlaces: 0, // 保留两位
      prefix: '￥' // 单位
    }
    return {
      counterOption1,
      counterOption2
    }
  }
})
</script>

<style scoped lang="less">
@h: 40px;

.statistical {
  display: flex;
  padding: 10px 20px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 2px 12px 0 rgb(0 0 0/10%);
  margin: 10px 0;
  .header {
    display: flex;
    height: @h;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    // border: 1px solid red;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    display: flex;
    margin-left: -5px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .footer {
    display: flex;
    height: @h;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
