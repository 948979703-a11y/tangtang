import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getFormById, overviewGridKeys, FORM_THEME } from '../mockData';

const periods = [
  { key: 'today', label: '今日数据' },
  { key: 'yesterday', label: '昨日数据' },
  { key: 'custom', label: '自定义' },
];

export default function SingleForm() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') === 'detail' ? 'detail' : 'overview';
  const [period, setPeriod] = useState('today');

  const form = useMemo(() => getFormById(formId), [formId]);
  if (!form) {
    return (
      <div className="p-6 text-center text-gray-500 text-sm">
        未找到表单
        <button type="button" className="block mx-auto mt-4 text-[#00B578]" onClick={() => navigate('/mini-form/v1.0')}>
          返回总览
        </button>
      </div>
    );
  }

  const setTab = (next) => {
    setSearchParams(next === 'detail' ? { tab: 'detail' } : {});
  };

  const overviewMetrics = form.overviewByPeriod[period] || form.overviewByPeriod.today;
  const detailMetrics = form.detailSummaryByPeriod[period] || form.detailSummaryByPeriod.today;

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5]" style={{ ['--mini-green']: FORM_THEME }}>
      <header className="text-white pt-2 px-2 pb-0 shrink-0 sticky top-0 z-20" style={{ backgroundColor: FORM_THEME }}>
        <div className="flex items-center h-10">
          <button type="button" className="w-10 h-10 flex items-center justify-center" aria-label="返回" onClick={() => navigate('/mini-form/v1.0')}>
            <i className="fa fa-chevron-left text-lg" />
          </button>
          <h1 className="flex-1 text-center text-base font-semibold truncate px-2">{form.title}</h1>
          <div className="flex items-center gap-1 pr-1">
            <span className="w-8 h-7 rounded-full bg-black/10 flex items-center justify-center text-xs">•••</span>
            <span className="w-8 h-7 rounded-full bg-black/10 flex items-center justify-center text-xs">○</span>
          </div>
        </div>

        <div className="flex justify-center gap-8 pb-0 px-2">
          <button
            type="button"
            onClick={() => setTab('overview')}
            className={`pb-2 text-sm font-medium relative ${tab === 'overview' ? 'text-white' : 'text-white/70'}`}
          >
            数据概览
            {tab === 'overview' && <span className="absolute left-1/2 -translate-x-1/2 bottom-0 block w-8 h-0.5 bg-white rounded-full" />}
          </button>
          <button
            type="button"
            onClick={() => setTab('detail')}
            className={`pb-2 text-sm font-medium relative ${tab === 'detail' ? 'text-white' : 'text-white/70'}`}
          >
            数据明细
            {tab === 'detail' && <span className="absolute left-1/2 -translate-x-1/2 bottom-0 block w-10 h-0.5 bg-white rounded-full" />}
          </button>
        </div>

        <div className="flex items-center gap-2 px-2 py-2 overflow-x-auto">
          {periods.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => p.key !== 'custom' && setPeriod(p.key)}
              className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border border-white/50 ${
                p.key === 'custom'
                  ? 'bg-white/10 text-white flex items-center gap-1'
                  : period === p.key
                    ? 'bg-white text-[#00B578]'
                    : 'text-white'
              }`}
            >
              {p.label}
              {p.key === 'custom' && <i className="fa fa-caret-down text-[10px]" />}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-white/75 px-3 pb-2">注：访问数据仅保留近7天数据</p>
      </header>

      {tab === 'overview' && (
        <div className="p-3 flex-1 pb-8">
          <div className="bg-white rounded-xl shadow-sm p-3 mb-3">
            <div className="grid grid-cols-4 gap-y-3 text-center">
              {overviewGridKeys.slice(0, 4).map(({ key, label }) => (
                <div key={key}>
                  <div className="text-lg font-bold text-gray-900">{overviewMetrics[key]}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-y-3 text-center border-t border-gray-100 mt-3 pt-3">
              {overviewGridKeys.slice(4).map(({ key, label }) => (
                <div key={key}>
                  <div className="text-lg font-bold text-gray-900">{overviewMetrics[key]}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-2 pl-1">
            <div className="flex items-center gap-2">
              <span className="w-1 h-4 rounded-full" style={{ backgroundColor: FORM_THEME }} />
              <h2 className="text-sm font-bold text-gray-800">推广人数据({form.promoters.length})</h2>
            </div>
            <button type="button" className="text-xs text-gray-500 flex items-center gap-0.5">
              数据表 <i className="fa fa-caret-down text-[10px]" />
            </button>
          </div>

          {form.promoters.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow-sm p-3 mb-2">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0"
                  style={{ backgroundColor: FORM_THEME }}
                >
                  {p.badge}
                </span>
                <span className="text-xs text-gray-800 break-all">{p.account}</span>
              </div>
              <div className="grid grid-cols-4 gap-1 text-center text-[10px]">
                {[
                  ['访问数', p.metrics.visits],
                  ['采集数', p.metrics.collections],
                  ['总加好友数', p.metrics.totalFriends],
                  ['直加好友数', p.metrics.directFriends],
                ].map(([label, val]) => (
                  <div key={label}>
                    <div className="text-sm font-bold text-gray-900">{val}</div>
                    <div className="text-[9px] text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="text-center text-xs text-gray-400 py-4">到底了～</p>
        </div>
      )}

      {tab === 'detail' && (
        <div className="p-3 flex-1 pb-8">
          <div className="bg-white rounded-xl shadow-sm p-3 mb-3">
            <div className="grid grid-cols-4 gap-y-2 text-center">
              {overviewGridKeys.slice(0, 4).map(({ key, label }) => (
                <div key={key}>
                  <div className="text-lg font-bold text-gray-900">{detailMetrics[key]}</div>
                  <div className="text-[10px] text-gray-500">{label}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-y-2 text-center border-t border-gray-100 mt-2 pt-2">
              {overviewGridKeys.slice(4).map(({ key, label }) => (
                <div key={key}>
                  <div className="text-lg font-bold text-gray-900">{detailMetrics[key]}</div>
                  <div className="text-[10px] text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mb-3 items-stretch">
            <div className="flex-1 flex items-center bg-gray-100 rounded-lg px-2 py-1.5 gap-2">
              <i className="fa fa-magnifying-glass text-gray-400 text-xs" />
              <input type="search" placeholder="请输入名称搜索" className="flex-1 bg-transparent text-xs outline-none min-w-0" />
            </div>
            <button type="button" className="shrink-0 px-4 rounded-lg text-white text-xs font-medium" style={{ backgroundColor: FORM_THEME }}>
              搜索
            </button>
          </div>
          <div className="flex justify-end mb-2">
            <button type="button" className="text-xs text-gray-600 flex items-center gap-1">
              全部推广人 <i className="fa fa-caret-down text-gray-400" />
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-12 gap-1 px-2 py-2 text-[10px] text-gray-500 border-b border-gray-100 bg-gray-50/80">
              <span className="col-span-3">姓名</span>
              <span className="col-span-3">手机号</span>
              <span className="col-span-3">直加好友</span>
              <span className="col-span-3">录入方式</span>
            </div>
            {form.leads.map((row) => (
              <Link
                key={row.id}
                to={`lead/${row.id}`}
                className="grid grid-cols-12 gap-1 px-2 py-3 text-xs border-b border-gray-100 last:border-0 active:bg-gray-50 items-start"
              >
                <div className="col-span-3">
                  <div className="text-gray-900">{row.name}</div>
                  <div className="text-[10px] text-gray-400 mt-1">{row.submitTime}</div>
                </div>
                <span className="col-span-3 text-gray-800 break-all">{row.phone}</span>
                <span className="col-span-3 text-gray-800">{row.directFriend}</span>
                <span className="col-span-3 text-gray-800">{row.entryMethod}</span>
              </Link>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 py-4">到底了～</p>
        </div>
      )}
    </div>
  );
}
