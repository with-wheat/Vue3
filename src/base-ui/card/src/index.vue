<template>
  <div class="pageCard">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <slot name="cardTitleLeft"></slot>
          <slot name="cardTitleRight"></slot>
        </div>
      </template>
      <slot name="count"></slot>
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
