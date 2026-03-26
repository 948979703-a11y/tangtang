
export default function StatsBar({ openModal }) {
  return (
    <div className="flex gap-3 text-sm">
      <div className="flex-1 bg-blue-50/50 rounded-lg p-3 cursor-pointer border border-blue-100" onClick={() => openModal('modal-opps')}>
        <div className="text-gray-600 mb-1">活跃商机 <span className="text-black font-bold text-lg">6</span></div>
        <div className="text-gray-500 text-xs">名下 <span className="text-blue-600 font-bold ml-1">1</span></div>
      </div>
      <div className="flex-1 bg-teal-50/50 rounded-lg p-3 cursor-pointer border border-teal-100" onClick={() => openModal('modal-emp')}>
        <div className="text-gray-600 mb-1">添加员工 <span className="text-teal-700 font-bold text-lg">3</span></div>
        <div className="text-gray-500 text-xs">群聊 <span className="text-teal-600 font-bold ml-1">2</span></div>
      </div>
    </div>
  );
}
