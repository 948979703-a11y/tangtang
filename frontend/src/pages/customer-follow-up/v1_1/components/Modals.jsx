
import React, { useEffect } from 'react';

const ModalOverlay = ({ isOpen, onClose, isBottom = true, isCenter = false, title, children, actions }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={(e) => { if (e.target.className.includes('modal-overlay')) onClose(); }}>
      {isBottom && (
        <div className="modal-bottom h-[85vh]">
          <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white rounded-t-2xl z-10 shadow-sm">
            <h2 className="text-lg font-bold">{title}</h2>
            <i className="fa fa-times text-gray-400 text-xl cursor-pointer" onClick={onClose}></i>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-gray-50/30">
            {children}
          </div>
          {actions && (
            <div className="p-4 bg-white border-t pb-8">
              {actions}
            </div>
          )}
        </div>
      )}
      {isCenter && (
        <div className="modal-center">
          <div className="p-5 border-b flex justify-between items-center">
            <h2 className="text-lg font-bold">{title}</h2>
            <i className="fa fa-times text-gray-400 cursor-pointer" onClick={onClose}></i>
          </div>
          <div className="p-5 space-y-4">
            {children}
          </div>
          {actions && (
            <div className="p-4 flex gap-3">
              {actions}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function Modals({ activeModal, closeModal }) {
  return (
    <>
      <ModalOverlay
        isOpen={activeModal === 'modal-edit-student'}
        onClose={closeModal}
        title="学员信息"
        actions={<button className="w-full bg-teal-500 text-white py-3 rounded-lg font-medium text-lg" onClick={closeModal}>提交</button>}
      >
        <div className="flex items-center"><span className="w-24 text-gray-600"><span className="text-red-500">*</span>姓名</span><input type="text" className="flex-1 p-2 bg-transparent outline-none border-b border-gray-200 focus:border-teal-500" defaultValue="测试" /></div>
        <div className="flex justify-between items-center border-b border-gray-100 pb-2 mt-4"><span className="text-gray-600">地区</span><div className="flex items-center text-gray-800">北京市 <i className="fa fa-chevron-right text-gray-300 ml-2"></i></div></div>
        <div className="mt-4"><span className="block text-gray-600 mb-2">性格备注</span><textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 outline-none focus:border-teal-500 resize-none h-24" defaultValue="比较内向的孩子，不是很喜欢表达"></textarea></div>
      </ModalOverlay>

      <ModalOverlay
        isOpen={activeModal === 'modal-phone'}
        onClose={closeModal}
        isBottom={false}
        isCenter={true}
        title="手机号"
        actions={
          <>
            <button className="flex-1 border border-teal-500 text-teal-500 py-2.5 rounded-full" onClick={closeModal}>取消</button>
            <button className="flex-1 bg-teal-500 text-white py-2.5 rounded-full" onClick={closeModal}>保存</button>
          </>
        }
      >
        <div className="flex justify-between items-center border-b pb-3">
          <span className="font-medium text-lg text-gray-800">173 7656 7788</span>
          <span className="text-sm text-gray-400 pl-3 border-l cursor-pointer hover:text-red-500">删除</span>
        </div>
        <div className="text-gray-400 py-3 border-b cursor-pointer">添加手机号</div>
      </ModalOverlay>
    </>
  );
}
