
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="app-container shadow-xl bg-gray-50 min-h-screen">
      <header className="bg-gradient-to-r from-teal-500 to-indigo-600 p-6 text-white text-center rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2"><i className="fa fa-layer-group mr-2"></i>原型设计走廊</h1>
        <p className="text-teal-100 text-sm">选择下方具体的项目模块与版本进行预览</p>
      </header>

      <div className="p-5 space-y-6">
        <div>
          <h2 className="text-sm font-bold text-gray-500 mb-3 ml-1 uppercase tracking-widest">客户跟进 (Customer Follow-up)</h2>
          <div className="space-y-3">
            <Link to="/customer/v1.1" className="block bg-white p-4 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-indigo-500 group-hover:w-3 transition-all"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800 text-lg">v1.1 最新版</span>
                <span className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded font-bold">含分层测</span>
              </div>
              <p className="text-gray-500 text-xs mt-1">包含老带新明细、分层测折叠数据卡片及所有弹窗交互</p>
            </Link>

            <Link to="/customer/v1.0" className="block bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">v1.0 基础底座</span>
                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">静态还原</span>
              </div>
              <p className="text-gray-400 text-xs mt-1">仅基于原始18张截图的全量1:1静态还原</p>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-500 mb-3 ml-1 uppercase tracking-widest">老带新活动 (Referral)</h2>
          <div className="space-y-3">
            <Link to="/referral/v1.0" className="block bg-white p-4 rounded-xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-teal-500 group-hover:w-3 transition-all"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800 text-lg">v1.0 16:9 展示款</span>
                <span className="bg-teal-50 text-teal-600 text-xs px-2 py-1 rounded font-bold">已打通</span>
              </div>
              <p className="text-gray-500 text-xs mt-1">支持动态学段 Tab、16:9 极简活动海报及动态文案控制</p>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-500 mb-3 ml-1 uppercase tracking-widest">小课堂 (Small Class)</h2>
          <div className="space-y-3">
            <Link to="/small-class/v1.1/group-buy" className="block bg-white p-4 rounded-xl shadow-sm border border-orange-200 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-orange-600 group-hover:w-3 transition-all"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800 text-lg">v1.1 阶梯拼团奖</span>
                <span className="bg-orange-50 text-orange-600 text-xs px-2 py-1 rounded font-bold">新上线</span>
              </div>
              <p className="text-gray-500 text-xs mt-1">支持 2人/5人团动态梯度。主页由经典橘色升级为 Screenshot-style 棕色系，详情页保持橘色全胶囊按钮风格。</p>
            </Link>

            <Link to="/small-class/v1.0/group-buy" className="block bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-gray-400 group-hover:w-3 transition-all"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">v1.0 基础普通版</span>
                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">稳定</span>
              </div>
              <p className="text-gray-400 text-xs mt-1">团长/团员积分动态展示机制，固定人数拼团模型。</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
