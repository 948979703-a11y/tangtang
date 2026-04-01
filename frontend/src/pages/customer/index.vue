<template>
  <view class="app-container shadow-xl bg-white min-h-screen flex flex-col pt-10">
    <!-- Header -->
    <view class="bg-teal-50/30 p-4 border-b border-gray-100">
      <view class="flex justify-between items-center mb-3">
        <text class="text-lg font-bold text-gray-800">
          Bahati口 <i class="fa fa-pen text-gray-400 text-sm ml-1 cursor-pointer" @click="showToast('编辑身份')"></i> 身份
        </text>
        <text class="text-sm text-gray-400 cursor-pointer">收起 <i class="fa fa-chevron-up"></i></text>
      </view>
      <view class="space-y-3 mt-4">
        <view class="flex justify-between items-center cursor-pointer">
          <text class="text-gray-500 text-sm">手机号: <text class="text-gray-800 font-semibold ml-2">17376567788</text></text>
          <i class="fa fa-chevron-right text-gray-300 text-sm"></i>
        </view>
        <view class="flex justify-between items-center cursor-pointer">
          <text class="text-gray-500 text-sm flex items-center">企业标签: <text class="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs ml-2">八年级</text></text>
          <i class="fa fa-chevron-right text-gray-300 text-sm"></i>
        </view>
        <view class="flex justify-between items-center cursor-pointer">
          <text class="text-gray-500 text-sm">描述: <text class="text-gray-800 ml-2">【表单填写】测试-测试-小班</text></text>
          <i class="fa fa-chevron-right text-gray-300 text-sm"></i>
        </view>
      </view>
    </view>

    <!-- 主板区 -->
    <view class="p-4 bg-white mt-1 border-b border-gray-100 shadow-sm relative z-10">
      <view class="flex justify-between items-center mb-4">
        <view class="flex items-center gap-2">
          <text class="text-xl font-bold">测试</text>
          <i class="fa fa-venus text-pink-400 text-sm"></i>
          <i class="fa fa-pen text-gray-400 text-sm cursor-pointer ml-1" @click="showToast('编辑学员')"></i>
          <text class="text-gray-500 text-sm ml-2"><i class="fa fa-phone text-xs"></i> 156****2375</text>
        </view>
        <view class="text-teal-500 text-sm font-medium cursor-pointer flex items-center bg-teal-50 px-2 py-1 rounded-full">
          <i class="fa fa-exchange-alt mr-1"></i> 学员(9)
        </view>
      </view>

      <!-- TagsArea -->
      <view class="flex flex-wrap gap-2 mb-5">
        <text class="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs">已报未读老生</text>
        <text class="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs">TESSBM99449...</text>
        <view class="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs cursor-pointer flex items-center gap-1">
          北京市 <i class="fa fa-chevron-right text-[10px]"></i>
        </view>
        <view class="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs flex items-center gap-1">23岁 <i class="fa fa-chevron-right text-[10px]"></i></view>
        <view class="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs flex items-center gap-1">八年级 <i class="fa fa-chevron-right text-[10px]"></i></view>
        <view class="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs flex items-center gap-1">北京桥郡国际学校... <i class="fa fa-chevron-right text-[10px]"></i></view>
        <view class="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs flex items-center gap-1">务实型 <i class="fa fa-chevron-right text-[10px]"></i></view>
        <text class="text-gray-400 text-xs ml-1 mt-1 cursor-pointer">
          <i class="fa fa-pen"></i> 编辑
        </text>
      </view>

      <!-- ProfileDetails -->
      <view class="space-y-4 mb-5">
        <view class="flex justify-between items-center cursor-pointer">
          <text class="text-gray-400 text-sm w-20">联系人</text>
          <text class="text-sm text-gray-700 truncate flex-1 text-right">子-156****2375, 爸爸-182****...</text>
          <i class="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
        </view>
        <view class="flex justify-between items-center cursor-pointer">
          <text class="text-gray-400 text-sm w-20">薄弱科目</text><text class="text-gray-300 text-sm flex-1 text-right">未填</text><i class="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
        </view>
        <view class="flex justify-between items-center cursor-pointer">
          <text class="text-gray-400 text-sm w-20">科目成绩</text><text class="text-gray-300 text-sm flex-1 text-right">未填</text><i class="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
        </view>
        <view class="flex justify-between items-center cursor-pointer">
          <text class="text-gray-400 text-sm w-20">考级考证</text><text class="text-gray-300 text-sm flex-1 text-right">未填</text><i class="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
        </view>
        <view class="flex justify-between items-center cursor-pointer">
          <text class="text-gray-400 text-sm w-20">辅导经历</text><text class="text-gray-300 text-sm flex-1 text-right">未填</text><i class="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
        </view>
        <view class="flex justify-between items-center cursor-pointer">
          <text class="text-gray-400 text-sm w-20">需求目标</text><text class="text-gray-300 text-sm flex-1 text-right">未填</text><i class="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
        </view>
        <view class="flex justify-between items-center cursor-pointer">
          <text class="text-gray-400 text-sm w-24">报班偏好</text>
          <text class="text-sm text-gray-700 truncate flex-1 text-right">主讲老师偏好-GDtess教师六,...</text>
          <i class="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
        </view>
      </view>

      <!-- StatsBar -->
      <view class="flex gap-3 text-sm">
        <view class="flex-1 bg-blue-50/50 rounded-lg p-3 cursor-pointer border border-blue-100 shadow-sm" @click="showToast('活跃商机')">
          <view class="text-gray-600 mb-1">活跃商机 <text class="text-black font-bold text-lg">6</text></view>
          <view class="text-gray-500 text-xs">名下 <text class="text-blue-600 font-bold ml-1">1</text></view>
        </view>
        <view class="flex-1 bg-teal-50/50 rounded-lg p-3 cursor-pointer border border-teal-100 shadow-sm" @click="showToast('添加员工')">
          <view class="text-gray-600 mb-1">添加员工 <text class="text-teal-700 font-bold text-lg">3</text></view>
          <view class="text-gray-500 text-xs">群聊 <text class="text-teal-600 font-bold ml-1">2</text></view>
        </view>
      </view>

    </view>

    <!-- Tab栏 -->
    <view class="flex px-4 py-3 gap-6 overflow-x-auto whitespace-nowrap bg-white border-b border-gray-100 text-gray-500">
      <view class="text-black font-bold border-b-2 border-teal-500 pb-1 relative">画像 <view class="absolute w-4 h-1 bg-teal-500 bottom-0 left-1/2 -translate-x-1/2 rounded-full"></view></view>
      <text>轨迹</text>
      <text>报班</text>
      <text>跟进</text>
      <text>商机</text>
      <text>学情</text>
    </view>

    <!-- 底部详情栏 -->
    <view class="bg-gray-50 flex-1 pb-10">
      <view class="p-4">
        <view class="flex flex-wrap gap-2 mb-4">
          <text class="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">近一年参与活动39次</text>
          <text class="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">1天未活跃</text>
        </view>
        <view class="border-t border-dashed border-gray-300 my-4"></view>
      </view>

      <!-- ActivitiesInfo -->
      <view class="px-4 mb-4">
        <view class="flex justify-between items-center mb-3">
          <text class="font-bold text-gray-800 text-[15px]">报班信息</text>
          <text class="text-teal-500 text-sm font-medium">总金额: ¥1,000</text>
        </view>
        <view class="bg-white border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm">
          <text class="text-gray-800 font-medium">2035上学期 - 高三</text>
          <text class="text-gray-500 text-sm">全科</text>
        </view>
      </view>

      <view class="px-4 mb-4">
        <text class="font-bold text-gray-800 mb-3 block text-[15px]">评测信息</text>
        <view class="bg-white border border-gray-100 rounded-lg p-4 mb-3 shadow-sm">
          <view class="flex justify-between mb-3 cursor-pointer">
            <text class="font-bold text-gray-800 text-sm">分层测</text>
            <view class="text-teal-500 text-sm flex items-center">
              明细 <i class="fa fa-chevron-down text-xs ml-1 transition-transform duration-200"></i>
            </view>
          </view>
          
          <view class="flex items-center gap-1 flex-wrap">
            <text class="text-[11px] text-gray-400 shrink-0">2024</text>
            <text class="text-gray-200 shrink-0 mx-1">|</text>
            <view class="flex items-center gap-1">
              <text class="text-[11px] text-gray-500">数学</text>
              <view class="text-[15px] font-bold text-blue-600 mx-1">85<text class="text-[9px] font-normal text-gray-400">分</text></view>
              <text class="border px-[4px] py-[2px] rounded text-[10px] font-bold bg-blue-50 text-blue-600 border-blue-200">B+</text>
            </view>
            <view class="flex items-center gap-1 ml-1">
              <text class="text-gray-200 text-[10px] mr-1">·</text>
              <text class="text-[11px] text-gray-500">英语</text>
              <view class="text-[15px] font-bold text-orange-600 mx-1">60<text class="text-[9px] font-normal text-gray-400">分</text></view>
              <text class="border px-[4px] py-[2px] rounded text-[10px] font-bold bg-orange-50 text-orange-600 border-orange-200">C</text>
            </view>
          </view>
        </view>
      </view>

      <view class="px-4">
        <text class="font-bold text-gray-800 mb-3 block text-[15px]">活动信息</text>
        <view class="bg-white border border-gray-100 rounded-lg p-4 mb-3 shadow-sm">
          <view class="flex justify-between mb-3 cursor-pointer">
            <text class="font-bold text-gray-800 text-sm">老带新</text>
            <view class="text-teal-500 text-sm flex items-center">
              明细 <i class="fa fa-chevron-down text-xs ml-1 transition-transform duration-200"></i>
            </view>
          </view>
          <view class="flex text-sm text-gray-500 mb-3">
            <view class="w-1/2">带 <text class="font-bold text-black text-[20px] mx-1">0</text> 人绑定</view>
            <view class="w-1/2">带 <text class="font-bold text-black text-[20px] mx-1">0</text> 人报名</view>
          </view>
        </view>

        <!-- 到店信息块 -->
        <view class="bg-white border border-gray-100 rounded-lg p-4 shadow-sm mt-3">
          <view class="flex justify-between mb-3 cursor-pointer">
            <text class="font-bold text-gray-800 text-sm">到店</text>
            <view class="text-teal-500 text-sm flex items-center">
              明细 <i class="fa fa-chevron-down text-xs ml-1 transition-transform duration-200"></i>
            </view>
          </view>
          <view class="flex text-sm text-gray-500 mb-3">
            <view class="w-1/2">诺访 <text class="font-bold text-black text-xl mx-1">6</text> 次</view>
            <view class="w-1/2">到店 <text class="font-bold text-black text-xl mx-1">3</text> 次</view>
          </view>
          <view class="text-sm font-medium text-gray-700 bg-gray-50 p-2 rounded mb-1">
            体验 <text class="text-blue-900 font-bold ml-1">语文,Python,英语,编程</text>
          </view>
        </view>
      </view>

    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showToast = (msg: string) => {
  uni.showToast({ title: msg, icon: 'none' })
}
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
