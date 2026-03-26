
export default function TagsArea({ openModal }) {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs">已报未读老生</span>
      <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs">TESSBM99449...</span>
      <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs cursor-pointer" onClick={() => openModal('modal-region')}>
        北京市 <i className="fa fa-chevron-right text-[10px]"></i>
      </span>
      <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs">23岁 <i className="fa fa-chevron-right text-[10px]"></i></span>
      <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs">八年级 <i className="fa fa-chevron-right text-[10px]"></i></span>
      <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs">北京桥郡国际学校... <i className="fa fa-chevron-right text-[10px]"></i></span>
      <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs">务实型 <i className="fa fa-chevron-right text-[10px]"></i></span>
      <span className="text-gray-400 text-xs ml-1 mt-1 cursor-pointer" onClick={() => openModal('modal-edit-student')}>
        <i className="fa fa-pen"></i> 编辑
      </span>
    </div>
  );
}
