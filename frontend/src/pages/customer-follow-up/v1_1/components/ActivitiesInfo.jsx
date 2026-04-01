import { useState } from 'react';
import placementData from '../placementData.json';

const levelColorMap = {
  indigo: { badge: 'bg-indigo-50 text-indigo-600 border-indigo-200', score: 'text-indigo-600', dot: 'bg-indigo-500' },
  blue:   { badge: 'bg-blue-50 text-blue-600 border-blue-200',       score: 'text-blue-600',   dot: 'bg-blue-500'   },
  amber:  { badge: 'bg-amber-50 text-amber-600 border-amber-200',     score: 'text-amber-600',  dot: 'bg-amber-500'  },
};

function SubjectRow({ subjectData }) {
  const { subject, records } = subjectData;

  return (
    <div className="mb-2 last:mb-0">
      {records.map((rec, idx) => {
        const colors = levelColorMap[rec.levelColor] || levelColorMap.blue;
        return (
          <div key={idx} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0">
            <span className="w-8 text-xs font-bold text-gray-700 shrink-0">
              {idx === 0 ? subject : ''}
            </span>
            <span className={`text-base font-bold ${colors.score} w-12 shrink-0`}>
              {rec.score}<span className="text-[10px] font-normal text-gray-400">分</span>
            </span>
            <span className={`border px-1 py-0.5 rounded text-[9px] font-bold shrink-0 ${colors.badge}`}>
              {rec.level}
            </span>
            <span className="text-gray-300 text-[9px] shrink-0">{rec.grade}</span>
            <span className="text-gray-300 text-[9px] flex-1">{rec.date}</span>
            <a href={rec.reportUrl} className="text-teal-500 text-[9px] font-medium flex items-center shrink-0 hover:text-teal-600">
              报告 <i className="fa fa-link ml-0.5 text-[8px]"></i>
            </a>
          </div>
        );
      })}
    </div>
  );
}

function YearSection({ group }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md mb-1.5 ${group.isLatest ? 'bg-indigo-50' : 'bg-gray-50'}`}>
        <span className={`font-bold text-xs ${group.isLatest ? 'text-indigo-700' : 'text-gray-600'}`}>{group.year}</span>
        {group.isLatest && (
          <span className="bg-indigo-500 text-white text-[8px] px-1 py-0.5 rounded font-bold ml-auto">最新</span>
        )}
      </div>
      <div className="px-2">
        {group.subjects.map((s) => (
          <SubjectRow key={s.subject} subjectData={s} />
        ))}
      </div>
    </div>
  );
}

export default function ActivitiesInfo({ openModal }) {
  const [placementOpen, setPlacementOpen] = useState(false);
  const [referOpen, setReferOpen] = useState(false);
  const [visitOpen, setVisitOpen] = useState(false);

  const latest = placementData[0];

  return (
    <>
      <div className="p-4">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800">报班信息</h3>
            <span className="text-teal-500 text-sm font-medium">总金额: ¥1,000</span>
          </div>
          <div className="bg-white border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm">
            <span className="text-gray-800 font-medium">2035上学期 - 高三</span>
            <span className="text-gray-500 text-sm">全科</span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-gray-800 mb-3">评测信息</h3>
          <div className="bg-white border border-gray-100 rounded-lg p-4 mb-3 shadow-sm">
            <div className="flex justify-between mb-3 cursor-pointer" onClick={() => setPlacementOpen(!placementOpen)}>
              <span className="font-bold text-gray-800 text-sm">分层测</span>
              <span className="text-teal-500 text-sm flex items-center">
                明细 <i className={`fa fa-chevron-down text-xs ml-1 transition-transform duration-200 ${placementOpen ? 'rotate-180' : ''}`}></i>
              </span>
            </div>

            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-[10px] text-gray-400 shrink-0">{latest.year}</span>
              <span className="text-gray-200 shrink-0">|</span>
              {latest.subjects.map((subj, idx) => {
                const rec = subj.records[0];
                const colors = levelColorMap[rec.levelColor] || levelColorMap.blue;
                return (
                  <span key={subj.subject} className="flex items-center gap-1">
                    {idx > 0 && <span className="text-gray-200 text-[10px]">·</span>}
                    <span className="text-[10px] text-gray-500">{subj.subject}</span>
                    <span className={`text-sm font-bold ${colors.score}`}>{rec.score}<span className="text-[9px] font-normal text-gray-400">分</span></span>
                    <span className={`border px-1 py-0.5 rounded text-[8px] font-bold ${colors.badge}`}>{rec.level}</span>
                  </span>
                );
              })}
            </div>

            {placementOpen && (
              <div className="border-t border-gray-100 pt-3 mt-3">
                {placementData.map((group) => (
                  <YearSection key={group.year} group={group} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-3">活动信息</h3>

          <div className="bg-white border border-gray-100 rounded-lg p-4 mb-3 shadow-sm">
            <div className="flex justify-between mb-3 cursor-pointer" onClick={() => setReferOpen(!referOpen)}>
              <span className="font-bold text-gray-800 text-sm">老带新</span>
              <span className="text-teal-500 text-sm flex items-center">
                明细 <i className={`fa fa-chevron-down text-xs ml-1 transition-transform duration-200 ${referOpen ? 'rotate-180' : ''}`}></i>
              </span>
            </div>
            <div className="flex text-sm text-gray-500 mb-3">
              <div className="w-1/2">带 <span className="font-bold text-black text-xl mx-1">0</span> 人绑定</div>
              <div className="w-1/2">带 <span className="font-bold text-black text-xl mx-1">0</span> 人报名</div>
            </div>
            {referOpen && (
              <div className="border-t border-gray-100 pt-3 mt-2">
                <p className="text-xs text-center text-gray-400 py-4"><i className="fa fa-inbox text-2xl mb-2 text-gray-200"></i><br/>暂无老带新明细数据</p>
              </div>
            )}
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between mb-3 cursor-pointer" onClick={() => setVisitOpen(!visitOpen)}>
              <span className="font-bold text-gray-800 text-sm">到店</span>
              <span className="text-teal-500 text-sm flex items-center">
                明细 <i className={`fa fa-chevron-down text-xs ml-1 transition-transform duration-200 ${visitOpen ? 'rotate-180' : ''}`}></i>
              </span>
            </div>
            <div className="flex text-sm text-gray-500 mb-3">
              <div className="w-1/2">诺访 <span className="font-bold text-black text-xl mx-1">6</span> 次</div>
              <div className="w-1/2">到店 <span className="font-bold text-black text-xl mx-1">3</span> 次</div>
            </div>
            <div className="text-sm font-medium text-gray-700 bg-gray-50 p-2 rounded mb-1">
              体验 <span className="text-blue-900 font-bold">语文,Python,英语,编程</span>
            </div>
            {visitOpen && (
              <div className="border-t border-gray-100 pt-4 mt-3 space-y-4">
                <div className="relative pl-4 border-l-2 border-blue-200">
                  <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[5px] top-1.5 shadow-[0_0_0_3px_#eff6ff]"></div>
                  <div className="text-xs text-gray-400 mb-1">2024-03-24 14:30</div>
                  <div className="text-sm text-gray-800 font-medium">参加了Python体验课</div>
                  <div className="text-xs text-gray-500 mt-1">接待跟进：张老师</div>
                </div>
                <div className="relative pl-4 border-l-2 border-teal-200">
                  <div className="absolute w-2 h-2 bg-teal-500 rounded-full -left-[5px] top-1.5 shadow-[0_0_0_3px_#f0fdf4]"></div>
                  <div className="text-xs text-gray-400 mb-1">2024-03-22 10:00</div>
                  <div className="text-sm text-gray-800 font-medium">语文学科研讨活动到店</div>
                  <div className="text-xs text-gray-500 mt-1">接待跟进：李老师</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
