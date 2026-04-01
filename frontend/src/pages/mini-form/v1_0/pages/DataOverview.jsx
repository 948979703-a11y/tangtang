import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { forms, globalSummary, summaryKeys, FORM_THEME } from '../mockData';

const periods = [
  { key: 'today', label: '今日数据' },
  { key: 'yesterday', label: '昨日数据' },
  { key: 'custom', label: '自定义' },
];

export default function DataOverview() {
  const navigate = useNavigate();
  const [period, setPeriod] = useState('today');
  const summary = period === 'yesterday' ? globalSummary.yesterday : globalSummary.today;
  const form = forms[0];
  const listPlaceholders = Array.from({ length: 21 }, (_, i) => i);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f6f8] pb-16" style={{ ['--mini-green']: FORM_THEME }}>
      <header
        className="text-white pt-safe px-3 pb-3 shrink-0 sticky top-0 z-20"
        style={{ backgroundColor: FORM_THEME }}
      >
        <div className="flex items-center h-11">
          <button type="button" className="w-10 h-10 flex items-center justify-start opacity-90" aria-label="返回" onClick={() => navigate(-1)}>
            <i className="fa fa-chevron-left text-lg" />
          </button>
          <h1 className="flex-1 text-center text-base font-semibold pr-10">表单数据</h1>
        </div>
        <div className="flex items-center gap-2 px-1 pb-2 overflow-x-auto scrollbar-hide">
          {periods.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => p.key !== 'custom' && setPeriod(p.key)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border border-white/40 ${
                p.key === 'custom'
                  ? 'bg-white/10 text-white flex items-center gap-1'
                  : period === p.key
                    ? 'bg-white text-[#00B578]'
                    : 'text-white/95'
              }`}
            >
              {p.label}
              {p.key === 'custom' && <i className="fa fa-caret-down text-[10px]" />}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-white/80 px-1 pb-1">注：访问数据仅保留近7天数据</p>
      </header>

      <div className="p-3 flex-1">
        <div className="bg-white rounded-xl shadow-sm p-3 mb-3">
          <div className="grid grid-cols-4 gap-y-3 text-center">
            {summaryKeys.map(({ key, label }) => (
              <div key={key} className="py-1">
                <div className="text-lg font-bold text-gray-900 leading-tight">{summary[key]}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2 pl-1">
          <span className="w-1 h-4 rounded-full" style={{ backgroundColor: FORM_THEME }} />
          <h2 className="text-sm font-bold text-gray-800">我推广的表单(21)</h2>
        </div>

        <div className="space-y-2 relative pb-8">
          {listPlaceholders.map((i) => (
            <Link
              key={i}
              to={`form/${form.id}`}
              className="block bg-white rounded-xl shadow-sm p-3 active:opacity-90"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-gray-900 text-sm">{form.title}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-orange-50 text-orange-600 font-medium shrink-0">
                  {form.status}
                </span>
              </div>
              <div className="text-[11px] text-gray-400 mb-2">{form.updatedAt}</div>
              <div className="grid grid-cols-4 gap-1 text-center border-t border-gray-100 pt-2">
                {[
                  ['访问数', form.listMetrics.visits],
                  ['采集数', form.listMetrics.collections],
                  ['总加好友数', form.listMetrics.totalFriends],
                  ['直加好友数', form.listMetrics.directFriends],
                ].map(([label, val]) => (
                  <div key={label}>
                    <div className="text-sm font-bold text-gray-900">{val}</div>
                    <div className="text-[9px] text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="fixed right-4 bottom-24 w-11 h-11 rounded-full bg-gray-700 text-white shadow-lg flex items-center justify-center z-30 active:scale-95"
        aria-label="刷新"
      >
        <i className="fa fa-rotate-right text-sm" />
      </button>

      <nav className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white border-t border-gray-200 flex z-40 safe-area-pb">
        <button type="button" className="flex-1 py-2 flex flex-col items-center text-gray-400 text-[10px]">
          <i className="fa fa-file-lines text-lg mb-0.5" />
          推广表单
        </button>
        <div className="flex-1 py-2 flex flex-col items-center text-[10px]" style={{ color: FORM_THEME }}>
          <i className="fa fa-chart-line text-lg mb-0.5" />
          表单数据
        </div>
      </nav>
    </div>
  );
}
