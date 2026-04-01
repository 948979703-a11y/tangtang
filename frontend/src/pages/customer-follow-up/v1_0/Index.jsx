
export default function PageCustomerfollowupV10() {
  return (
    <div className="app-container shadow-xl bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white px-4 py-3 border-b border-gray-100 sticky top-0 z-10">
        <h1 className="text-lg font-bold text-gray-800">客户跟进 v1.0</h1>
        <p className="text-xs text-gray-400 mt-1">基础底座预览</p>
      </header>

      <div className="flex-1 p-4 space-y-4">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-700">学员基础信息</span>
            <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded-full">v1.0</span>
          </div>
          <div className="mt-3 text-sm text-gray-500 leading-7">
            <div>姓名：测试同学</div>
            <div>手机号：156****2375</div>
            <div>最近跟进：1 天前</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="text-sm font-bold text-gray-700 mb-3">跟进记录</div>
          <div className="space-y-3 text-sm text-gray-500">
            <div className="border-l-2 border-teal-200 pl-3">2026-03-26 试听课后回访，家长反馈良好。</div>
            <div className="border-l-2 border-teal-200 pl-3">2026-03-24 已发送课程资料，待确认报班意向。</div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 py-2">
          当前为 v1.0 基础展示页面（非完整交互版）
        </div>
      </div>
    </div>
  );
}
