<template>
  <view class="home-container">
    <view class="header">
      <text class="title">招生工具平台</text>
      <text class="subtitle">原型设计走廊 (UniApp 版)</text>
    </view>

    <view class="module-group">
      <view class="module-title">客户跟进 (Customer Follow-up)</view>
      <view class="card" @click="navigateTo('/pages/customer/index')">
        <text class="card-label">v1.1 最新版</text>
        <text class="card-desc">微信跟进改版逻辑、学生档案卡测试</text>
      </view>
    </view>

    <view class="module-group">
      <view class="module-title">小表单 (Mini Form)</view>
      <view class="card" @click="navigateTo('/pages/mini-form/index')">
        <text class="card-label">v1.0 基础版</text>
        <text class="card-desc">线索明细交互、留资分析页面 (待 UniApp 转换)</text>
      </view>
    </view>

    <view class="module-group">
      <view class="module-title">老带新 (Referral)</view>
      <view class="card" @click="navigateTo('/pages/referral/index')">
        <text class="card-label">v1.0 奖励系统</text>
        <text class="card-desc">邀约提成奖励面板、多层级下发 (待 UniApp 转换)</text>
      </view>
    </view>
  </view>
</template>

<script setup>
const navigateTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style scoped>
.home-container {
  padding: 20px;
  background-color: #f5f6f8;
  min-height: 100vh;
}
.header {
  margin-bottom: 24px;
}
.title {
  font-size: 24px;
  font-weight: bold;
  display: block;
}
.subtitle {
  font-size: 14px;
  color: #888;
}
.module-group {
  margin-bottom: 20px;
}
.module-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #333;
}
.card {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.card:active {
  background: #f9f9f9;
}
.card-label {
  font-size: 15px;
  font-weight: 600;
  color: #1890ff;
  display: block;
  margin-bottom: 4px;
}
.card-desc {
  font-size: 13px;
  color: #666;
}
</style>
