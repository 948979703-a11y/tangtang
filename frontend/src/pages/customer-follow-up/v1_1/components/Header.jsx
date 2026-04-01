
export default function Header({ openModal }) {
  return (
    <>
      <header className="bg-teal-50/30 p-4 border-b border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-lg font-bold text-gray-800">
            Bahati口 <i className="fa fa-pen text-gray-400 text-sm ml-1 cursor-pointer" onClick={() => openModal('modal-edit-student')}></i> 身份
          </h1>
          <span className="text-sm text-gray-400 cursor-pointer">收起 <i className="fa fa-chevron-up"></i></span>
        </div>
        <div className="space-y-3 mt-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => openModal('modal-phone')}>
            <span className="text-gray-500 text-sm">手机号: <span className="text-gray-800 font-semibold ml-2">17376567788</span></span>
            <i className="fa fa-chevron-right text-gray-300 text-sm"></i>
          </div>
          <div className="flex justify-between items-center cursor-pointer" onClick={() => openModal('modal-tags')}>
            <span className="text-gray-500 text-sm">企业标签: <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs ml-2">八年级</span></span>
            <i className="fa fa-chevron-right text-gray-300 text-sm"></i>
          </div>
          <div className="flex justify-between items-center cursor-pointer" onClick={() => openModal('modal-desc')}>
            <span className="text-gray-500 text-sm">描述: <span className="text-gray-800 ml-2">【表单填写】测试-测试-小班</span></span>
            <i className="fa fa-chevron-right text-gray-300 text-sm"></i>
          </div>
        </div>
      </header>
    </>
  );
}
