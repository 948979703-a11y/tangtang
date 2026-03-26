import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ACTIVITIES from './activities.json';
import './Index.css';

const TABS = [
  { key: 'primary', label: '小学' },
  { key: 'middle', label: '初中' },
  { key: 'high', label: '高中' },
];

const DEPT_META = {
  primary: { label: '推荐小学新生', color: 'bg-orange-100 text-orange-600', dot: 'bg-orange-400' },
  middle: { label: '推荐初中新生', color: 'bg-teal-100 text-teal-600', dot: 'bg-teal-400' },
  high: { label: '推荐高中新生', color: 'bg-indigo-100 text-indigo-600', dot: 'bg-indigo-400' },
};

function ActivityCard({ activity }) {
  const dept = DEPT_META[activity.dept];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-4">
      {/* 16:9 Image */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <img
          src={activity.image}
          alt="活动海报"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Bottom bar: dept tag + action */}
      <div className="px-3 py-2.5 flex items-center justify-between">
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${dept.color}`}>{dept.label}</span>
        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-teal-500 text-white active:bg-teal-600">
          立即参与
        </button>
      </div>
    </div>
  );
}

function DeptSection({ deptKey, activities }) {
  const dept = DEPT_META[deptKey];
  return (
    <div className="mb-2">
      <div className="flex items-center gap-2 mb-3">
        <span className={`w-2.5 h-2.5 rounded-full ${dept.dot}`}></span>
        <span className="font-bold text-gray-700 text-sm">{dept.label}</span>
        <span className="text-gray-300 text-xs">{activities.length} 个活动</span>
      </div>
      {activities.map(act => <ActivityCard key={act.id} activity={act} />)}
    </div>
  );
}

export default function ReferralActivities() {
  const navigate = useNavigate();
  const countByDept = (key) => ACTIVITIES.filter(a => a.dept === key).length;

  // Dynamically filter tabs based on activity data
  const availableTabs = TABS.filter(tab => countByDept(tab.key) > 0);

  // Set initial tab to the first available one, or use 'primary' if no activities
  const defaultTab = availableTabs.length > 0 ? availableTabs[0].key : 'primary';
  const [activeTab, setActiveTab] = useState(defaultTab);

  const filtered = ACTIVITIES.filter(a => a.dept === activeTab);

  return (
    <div className="app-container shadow-xl bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="text-gray-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          <i className="fa fa-chevron-left text-sm"></i>
        </button>
        <div className="flex-1">
          <h1 className="font-bold text-gray-800 text-base">老带新专属活动</h1>
        </div>
      </div>
      {/* Info Bar & Tab Filter - Only show if there's more than one visible department */}
      {availableTabs.length > 1 && (
        <>
          <div className="mx-4 mt-4 bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 mb-2 flex items-start gap-2">
            <i className="fa fa-info-circle text-teal-400 mt-0.5 shrink-0"></i>
            <p className="text-teal-700 text-xs leading-relaxed">选择适合好友孩子的学段活动，推荐成功可获得专属福利。</p>
          </div>
          <div className="bg-white border-b border-gray-100 px-4 sticky top-[57px] z-10">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
              {availableTabs.map(tab => {
                const count = countByDept(tab.key);
                const active = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${active
                      ? 'bg-teal-500 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                  >
                    {tab.label}
                    <span className={`text-[9px] px-1 rounded-full ${active ? 'bg-white/30 text-white' : 'bg-white text-gray-400'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Activity List */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Page description */}

        {/* Use DeptSection even for single dept to show the header and count */}
        <DeptSection deptKey={activeTab} activities={filtered} />


        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-300">
            <i className="fa fa-inbox text-4xl mb-3"></i>
            <p className="text-sm">暂无活动</p>
          </div>
        )}
      </div>
    </div>
  );
}
