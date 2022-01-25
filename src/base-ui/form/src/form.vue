<template>
  <div class="SearchForm">
    <el-form
      ref="SearchForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="ruleForm.pwd"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="喜欢的运动">
            <el-select
              v-model="ruleForm.region"
              placeholder="请选择你喜欢的运动"
            >
              <el-option label="跑步" value="1"></el-option>
              <el-option label="游泳" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="ruleForm.time"
              type="datetime"
              placeholder="选择创建时间"
              :shortcuts="shortcuts"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
const formSize = ref('')
const ruleForm = reactive({
  name: '',
  pwd: '',
  region: '',
  time: ''
})
// 快捷选择方式
const shortcuts = [
  {
    text: 'Today',
    value: new Date()
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    }
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    }
  }
]
</script>
<style lang="less"></style>
