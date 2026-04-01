<template>
  <view class="page-bg">
    <!-- 原型走廊里提到的“老带新 v1.0 奖励系统” -->
    <view class="header-card">
      <view class="title-row">
        <text class="title">我的邀约战绩</text>
        <text class="rule-link" @click="showToast('弹窗：老带新提成规则')">提成规则 ?</text>
      </view>
      <view class="dash-grid">
        <view class="dash-item">
          <text class="dash-val">28</text>
          <text class="dash-label">名下线索(人)</text>
        </view>
        <view class="dash-item">
          <text class="dash-val">5</text>
          <text class="dash-label">成功拓客(人)</text>
        </view>
        <view class="dash-item highlight">
          <text class="dash-val">¥ 1,200</text>
          <text class="dash-label">待发奖励</text>
        </view>
      </view>
    </view>
    
    <view class="list-card">
      <view class="list-title">拓客奖励明细</view>
      <view class="record-item" v-for="i in 4" :key="i">
        <view class="record-left">
          <text class="stu-name">王小花 (新报学员)</text>
          <text class="course">报名: 秋季进阶英语提分班</text>
        </view>
        <view class="record-right">
          <text class="reward">+ ¥300</text>
          <text class="status text-green">达标待结</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const showToast = (msg: string) => {
  uni.showToast({ title: msg, icon: 'none' })
}
</script>

<style scoped>
.page-bg { background-color: #f5f6f8; min-height: 100vh; padding: 12px; }

.header-card { background: linear-gradient(135deg, #1890ff, #096dd9); border-radius: 12px; padding: 16px; margin-bottom: 12px; color: white; box-shadow: 0 4px 12px rgba(24,144,255,0.3); }
.title-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.title { font-size: 18px; font-weight: bold; }
.rule-link { font-size: 13px; opacity: 0.8; }

.dash-grid { display: flex; justify-content: space-around; }
.dash-item { display: flex; flex-direction: column; align-items: center; }
.dash-val { font-size: 22px; font-weight: bold; margin-bottom: 4px; }
.dash-label { font-size: 12px; opacity: 0.8; }
.highlight .dash-val { color: #ffe58f; }

.list-card { background: white; border-radius: 12px; padding: 16px; }
.list-title { font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #333; }
.record-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #f0f0f0; }
.record-item:last-child { border-bottom: none; }
.record-left { display: flex; flex-direction: column; gap: 4px; }
.stu-name { font-size: 15px; color: #222; font-weight: 500; }
.course { font-size: 12px; color: #888; }

.record-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
.reward { font-size: 16px; color: #f5222d; font-weight: bold; }
.status { font-size: 12px; }
.text-green { color: #52c41a; }
</style>
