<template>
  <view class="app-container">
    <!-- 测试控制栏 (仅作原型调试) -->
    <view class="mock-bar">
      <text class="mock-btn" @click="toggleStudentState">
        切换测试状态：当前为【{{ hasStudent ? '有匹配学员' : '无对应学员' }}】
      </text>
    </view>

    <!-- 共有顶部部件：微信好友信息 -->
    <view class="card">
      <view class="card-header" @click="toggleWechatInfo">
        <text class="card-title">企微信息：小明妈妈-微信</text>
        <text class="card-icon">{{ wechatInfoExpanded ? '收起 ▲' : '明细 ▼' }}</text>
      </view>
      
      <view class="card-body wechat-body" v-if="wechatInfoExpanded">
        <view class="info-row">
          <text class="label">微信昵称：</text>
          <text class="value">Lily妈妈</text>
        </view>
        <view class="info-row">
          <text class="label">分数等级：</text>
          <text class="value highlight">S级</text>
        </view>
        <view class="info-row">
          <text class="label">身份角色：</text>
          <text class="value link" @click="showToast('弹出身份切换窗')">家长 (点击修改)</text>
        </view>
        <view class="info-row">
          <text class="label">备注手机：</text>
          <text class="value">13800138000</text>
        </view>
        <view class="tags-container mt-2">
          <text class="custom-tag">特优生</text>
          <text class="custom-tag">重点跟进</text>
          <text class="custom-tag add-tag" @click="showToast('添加企业标签')">+ 企微标签</text>
        </view>
      </view>
    </view>

    <!-- 场景一：无学员时的业务区 -->
    <template v-if="!hasStudent">
      <view class="card action-box">
        <view class="card-header border-none">
          <text class="card-title">学员建档操作</text>
        </view>
        <view class="card-body btn-group">
          <button class="btn btn-outline" @click="showToast('保存微信信息')">保存信息</button>
          <button class="btn btn-primary" @click="showToast('进入新建学员流')">创建学员</button>
        </view>
      </view>
    </template>

    <!-- 场景二：有学员时的业务区 -->
    <template v-else>
      <!-- 学员档案信息 -->
      <view class="card student-profile">
        <view class="stu-base-info">
          <view class="stu-name-area" @click="showToast('修改昵称/性别')">
            <text class="stu-name">王小明</text>
            <text class="stu-gender">男</text>
          </view>
          <text class="stu-phone" @click="showToast('拨打手机号')">138****8000</text>
          <button class="btn-micro" @click="showToast('切换绑定的其它学员')">切换学员(2)</button>
        </view>
        
        <view class="stu-system-tags">
          <text class="badge blue">老生</text>
          <text class="badge">北京</text>
          <text class="badge">五年级</text>
          <text class="badge">人大附小</text>
          <text class="badge">外向活泼</text>
          <text class="badge">晚辅导学员</text>
          <text class="badge hover-more" @click="showToast('弹窗展示: 特长、学习习惯、爱好等其他信息')">更多信息点我...</text>
        </view>
        
        <view class="stu-detail-grid">
           <view class="grid-item" @click="showToast('编辑联系人')">联系人(2)</view>
           <view class="grid-item" @click="showToast('编辑科目成绩')">薄弱科目: 数学</view>
           <view class="grid-item" @click="showToast('编辑考证录入')">考级考证: 无</view>
           <view class="grid-item" @click="showToast('编辑辅导经历')">辅导经历: 新东方</view>
        </view>

        <!-- 分层测模块 (恢复v1.1遗留) -->
        <view class="level-test-box mt-2" @click="showToast('进入分层测详情')">
          <view class="test-header">
            <text class="test-title">分层测情况 (v1.1遗留)</text>
            <text class="test-status highlight-blue">已测 2 次</text>
          </view>
          <text class="test-desc">最新：初一数学秋季基础测 - 综合评级 B+</text>
        </view>
      </view>

      <!-- 活跃商机 和 添加员工按钮 -->
      <view class="card flex-row-card">
        <button class="half-btn" @click="showToast('打开商机弹窗')">活跃商机 (3)</button>
        <button class="half-btn outline-blue" @click="showToast('添加群聊推荐员工')">添加员工微信</button>
      </view>

      <!-- 画布与活动 Tab 列表 -->
      <view class="tab-scroller">
        <view class="tab-header-list">
          <text v-for="t in sysTabs" 
                :key="t.key" 
                :class="['tab-nav', activeTab === t.key ? 'active-nav' : '']"
                @click="activeTab = t.key">
            {{ t.label }}
          </text>
        </view>
        
        <view class="tab-body">
          <view v-if="activeTab === 'profile'" class="tab-panel">
            <text class="panel-title">系统标签与洞察</text>
            <view class="insight-row">手机型号: iPhone 14 Pro</view>
            <view class="insight-row text-red">近365天未活跃，需促活</view>
            <view class="tags-container">
              <text class="custom-tag gray">小初高通杀</text>
              <text class="custom-tag gray">重点公立校</text>
            </view>
          </view>

          <view v-if="activeTab === 'classes'" class="tab-panel flex-col">
            <view class="class-card">
              <text class="class-title">25春季-初二-进阶数学</text>
              <text class="class-desc">高端 剩余12课时 / 总共30课时</text>
            </view>
            <view class="class-card">
              <text class="class-title">英语学习机-高难度VIP</text>
              <text class="class-desc">月卡 · 英语听说</text>
            </view>
          </view>

          <view v-if="activeTab === 'activities'" class="tab-panel">
            <text class="panel-title">活动参与历史</text>
            <view class="activity-row">老带新活动：绑定被邀请人 2 名</view>
            <view class="activity-row">打卡计划：20天计划满勤率 100%</view>
            <view class="activity-row">测评活动：1月入学考测 (B段)</view>
          </view>

          <view v-if="activeTab === 'ops'" class="tab-panel">
            <text class="empty-holder">暂无最新商机跟进记录</text>
          </view>

          <view v-if="activeTab === 'study'" class="tab-panel">
            <text class="empty-holder">【嵌入区】用户中心学情 SDK 数据视图</text>
          </view>
        </view>
      </view>
    </template>
  </view>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// ==== 数据与状态逻辑 ====
const hasStudent = ref(true)
const wechatInfoExpanded = ref(false)
const activeTab = ref('profile')

const sysTabs = [
  { key: 'profile', label: '画像/标签' },
  { key: 'classes', label: '报班数据' },
  { key: 'activities', label: '活动参与' },
  { key: 'ops', label: '商机列表' },
  { key: 'study', label: '动态学情' }
]

// 监听学员状态，决定企微信息默认展开还是折叠
watch(hasStudent, (val) => {
  // 无学员时默认展开，有学员时默认收起
  wechatInfoExpanded.value = !val
}, { immediate: true })

// ==== 方法定义 ====
const toggleStudentState = () => {
  hasStudent.value = !hasStudent.value
}

const toggleWechatInfo = () => {
  wechatInfoExpanded.value = !wechatInfoExpanded.value
}

const showToast = (msg: string) => {
  // 在真实真机环境中，使用 uni.showToast
  uni.showToast({
    title: msg,
    icon: 'none',
    duration: 1500
  })
}
</script>

<style lang="scss">
page {
  background-color: #f5f6f8;
  font-family: -apple-system, Helvetica, Arial, sans-serif;
}

.app-container {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 调试工具栏 */
.mock-bar {
  background: #ffecd1;
  border: 1px dashed #ffa940;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
}
.mock-btn {
  font-size: 14px;
  color: #d46b08;
  font-weight: bold;
}

/* 通用卡片外观 */
.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}
.border-none {
  border-bottom: none !important;
}
.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}
.card-icon {
  font-size: 13px;
  color: #888;
}

.card-body {
  padding-top: 10px;
}
.info-row {
  display: flex;
  font-size: 14px;
  margin-bottom: 6px;
  .label {
    color: #666;
    width: 80px;
  }
  .value {
    color: #222;
  }
}
.highlight { color: #f5222d !important; font-weight: bold; }
.link { color: #1890ff !important; text-decoration: underline; }

.mt-2 { margin-top: 8px; }

/* 标签体系 */
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.custom-tag {
  font-size: 12px;
  padding: 2px 8px;
  background: #e6f7ff;
  color: #1890ff;
  border-radius: 4px; border: 1px solid #91d5ff;
}
.add-tag {
  background: #f6ffed; border-color: #b7eb8f; color: #52c41a;
}
.custom-tag.gray {
  background: #fafafa; border-color: #d9d9d9; color: #595959;
}

/* 按钮组合 */
.btn-group {
  display: flex; 
  gap: 12px;
  button { flex: 1; font-size: 15px; border-radius: 20px; }
}
.btn {
  padding: 8px 0; border: none; font-weight: 500;
}
.btn-outline {
  background: #fff; border: 1px solid #d9d9d9; color: #333;
}
.btn-primary {
  background: #1890ff; color: #fff;
}

/* 学员档案卡 */
.student-profile {
  .stu-base-info {
    display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
  }
  .stu-name { font-size: 18px; font-weight: bold; color: #222; }
  .stu-gender { font-size: 13px; color: #666; }
  .stu-phone { font-size: 15px; color: #1890ff; font-weight: 500; }
  .btn-micro {
    margin-left: auto; font-size: 12px; padding: 2px 8px; 
    border-radius: 12px; background: #f0f0f0; border: none; margin: 0;
  }
  
  .stu-system-tags {
    margin-top: 10px; display: flex; flex-wrap: wrap; gap: 6px;
    padding-bottom: 12px; border-bottom: 1px dashed #eee;
  }
  .badge {
    font-size: 11px; padding: 2px 6px; border-radius: 4px;
    background: #f5f5f5; color: #666;
  }
  .badge.blue { background: #e6f7ff; color: #1890ff; }
  .hover-more { background: #fff1f0; color: #f5222d; }
  
  .stu-detail-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 12px;
    .grid-item {
      font-size: 12px; color: #555; background: #fafafa;
      padding: 6px; border-radius: 4px;
    }
  }
}

/* 活跃与工具按钮 */
.flex-row-card {
  display: flex; gap: 12px; flex-direction: row; padding: 12px;
}
.half-btn {
  flex: 1; border: none; padding: 8px 0; border-radius: 8px; font-size: 14px;
  background: #fff; border: 1px solid #1890ff; color: #1890ff; line-height: 1.6;
}
.outline-blue {
  background: #e6f7ff;
}

/* Tab 层与滑动面板 */
.tab-scroller {
  background: #fff; border-radius: 12px; overflow: hidden;
}
.tab-header-list {
  display: flex; overflow-x: auto; white-space: nowrap; border-bottom: 1px solid #eee;
}
.tab-nav {
  padding: 12px 14px; font-size: 14px; color: #666; flex-shrink: 0;
  border-bottom: 2px solid transparent; transition: all 0.2s;
}
.active-nav {
  color: #1890ff; font-weight: bold; border-bottom-color: #1890ff;
}
.tab-body {
  padding: 14px;
  min-height: 200px;
}
.panel-title {
  display: block; font-size: 15px; font-weight: bold; margin-bottom: 10px; color: #333;
}
.insight-row, .activity-row {
  font-size: 13px; color: #555; margin-bottom: 6px;
  padding: 6px; background: #fafafa; border-radius: 4px;
}
.text-red { color: #f5222d; }

.class-card {
  background: #f9fbfd; border: 1px solid #e6f0fa; border-radius: 6px;
  padding: 10px; margin-bottom: 8px; display: flex; flex-direction: column;
}
.class-title { font-size: 14px; font-weight: 500; color: #222; }
.class-desc { font-size: 12px; color: #888; margin-top: 4px; }

.empty-holder {
  display: block; width: 100%; text-align: center; color: #aaa; margin-top: 40px; font-size: 14px;
}

.highlight-blue { font-weight: bold; color: #1890ff; }
.level-test-box {
  background: #f0f7ff; border: 1px solid #cce4ff; border-radius: 6px; padding: 10px;
}
.test-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.test-title { font-size: 14px; font-weight: 500; color: #222; }
.test-status { font-size: 13px; }
.test-desc { font-size: 12px; color: #666; display: block; }
</style>
