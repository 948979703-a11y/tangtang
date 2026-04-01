
export default function ProfileDetails({ openModal }) {
  return (
    <div className="space-y-4 mb-5">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => openModal('modal-contacts')}>
        <span className="text-gray-400 text-sm w-20">联系人</span>
        <span className="text-sm text-gray-700 truncate flex-1 text-right">子-156****2375, 爸爸-182****...</span>
        <i className="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
      </div>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => openModal('modal-weak-subjects')}>
        <span className="text-gray-400 text-sm w-20">薄弱科目</span><span className="text-gray-300 text-sm flex-1 text-right">未填</span><i className="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
      </div>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => openModal('modal-scores')}>
        <span className="text-gray-400 text-sm w-20">科目成绩</span><span className="text-gray-300 text-sm flex-1 text-right">未填</span><i className="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
      </div>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => openModal('modal-certs')}>
        <span className="text-gray-400 text-sm w-20">考级考证</span><span className="text-gray-300 text-sm flex-1 text-right">未填</span><i className="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
      </div>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => openModal('modal-experience')}>
        <span className="text-gray-400 text-sm w-20">辅导经历</span><span className="text-gray-300 text-sm flex-1 text-right">未填</span><i className="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
      </div>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => openModal('modal-target')}>
        <span className="text-gray-400 text-sm w-20">需求目标</span><span className="text-gray-300 text-sm flex-1 text-right">未填</span><i className="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
      </div>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => openModal('modal-prefs')}>
        <span className="text-gray-400 text-sm w-24">报班偏好</span>
        <span className="text-sm text-gray-700 truncate flex-1 text-right">主讲老师偏好-GDtess教师六,...</span>
        <i className="fa fa-chevron-right text-gray-300 ml-2 text-sm"></i>
      </div>
    </div>
  );
}
