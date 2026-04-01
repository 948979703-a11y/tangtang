<template>
  <view class="page-bg">
    <view class="header-nav">
      <text class="title">小表单数据明细</text>
    </view>
    
    <view class="filter-bar">
      <view class="filter-item active"><text>全部线索 (128)</text></view>
      <view class="filter-item"><text>已加微</text></view>
      <view class="filter-item"><text>未加微</text></view>
    </view>
    
    <scroll-view class="list-container" scroll-y>
      <!-- PRD要求：每一行整体能点击并跳转 -->
      <view class="list-item" v-for="item in leadList" :key="item.id" @click="goDetail(item.id)">
        <view class="item-top">
          <text class="name">{{ item.name }}</text>
          <text class="phone">{{ item.phone }}</text>
          <text :class="['tag', item.added ? 'green' : 'gray']">{{ item.added ? '已加微' : '未加微' }}</text>
        </view>
        <view class="item-bottom">
          <text class="source">来源: 2026春季数学讲座报名表</text>
          <text class="time">提交时间: {{ item.time }}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const leadList = ref([
  { id: '1001', name: '李阿姨', phone: '138****0001', added: true, time: '2026-04-01 10:23:05' },
  { id: '1002', name: '张先生', phone: '139****0002', added: false, time: '2026-04-01 09:12:30' },
  { id: '1003', name: '赵同学', phone: '137****0003', added: true, time: '2026-03-31 18:45:11' },
])

const goDetail = (id: string) => {
  uni.showToast({
    title: `跳转H5明细页: id=${id}`,
    icon: 'none'
  })
}
</script>

<style scoped>
.page-bg { background-color: #f5f6f8; min-height: 100vh; display: flex; flex-direction: column; }
.header-nav { padding: 16px; background: #fff; border-bottom: 1px solid #eee; }
.title { font-size: 18px; font-weight: bold; }

.filter-bar { display: flex; background: #fff; padding: 10px 16px; margin-bottom: 10px; }
.filter-item { margin-right: 20px; font-size: 14px; color: #666; padding-bottom: 4px; }
.filter-item.active { color: #1890ff; font-weight: bold; border-bottom: 2px solid #1890ff; }

.list-container { flex: 1; padding: 0 12px; }
.list-item { background: #fff; border-radius: 8px; padding: 14px; margin-bottom: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
.list-item:active { background: #fafafa; }
.item-top { display: flex; align-items: center; margin-bottom: 8px; }
.name { font-size: 16px; font-weight: bold; margin-right: 12px; color: #333; }
.phone { font-size: 15px; color: #666; flex: 1; }
.tag { font-size: 11px; padding: 2px 6px; border-radius: 4px; }
.tag.green { background: #e6ffec; color: #52c41a; border: 1px solid #b7eb8f; }
.tag.gray { background: #f5f5f5; color: #888; border: 1px solid #d9d9d9; }

.item-bottom { display: flex; flex-direction: column; gap: 4px; }
.source { font-size: 13px; color: #555; }
.time { font-size: 12px; color: #999; }
</style>
