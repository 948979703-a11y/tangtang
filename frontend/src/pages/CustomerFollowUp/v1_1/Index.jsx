
import { useState } from 'react';
import Header from './components/Header';
import TagsArea from './components/TagsArea';
import ProfileDetails from './components/ProfileDetails';
import StatsBar from './components/StatsBar';
import ActivitiesInfo from './components/ActivitiesInfo';
import Modals from './components/Modals';
import './Index.css';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <Header openModal={openModal} />
      
      {/* Main Info Card */}
      <div className="p-4 bg-white mt-1 border-b border-gray-100 shadow-sm relative z-10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">测试</span>
            <i className="fa fa-venus text-pink-400 text-sm"></i>
            <i className="fa fa-pen text-gray-400 text-sm cursor-pointer ml-1" onClick={() => openModal('modal-edit-student')}></i>
            <span className="text-gray-500 text-sm ml-2"><i className="fa fa-phone text-xs"></i> 156****2375</span>
          </div>
          <div className="text-teal-500 text-sm font-medium cursor-pointer flex items-center bg-teal-50 px-2 py-1 rounded-full" onClick={() => openModal('modal-switch-student')}>
            <i className="fa fa-exchange-alt mr-1"></i> 学员(9)
          </div>
        </div>

        <TagsArea openModal={openModal} />
        <ProfileDetails openModal={openModal} />
        <StatsBar openModal={openModal} />
      </div>

      {/* Navigation Tabs */}
      <div className="flex px-4 py-3 gap-6 overflow-x-auto whitespace-nowrap bg-white border-b border-gray-100 text-gray-500">
        <span className="text-black font-bold border-b-2 border-teal-500 pb-1 relative">画像 <div className="absolute w-4 h-1 bg-teal-500 bottom-0 left-1/2 -translate-x-1/2 rounded-full"></div></span>
        <span>轨迹</span>
        <span>报班</span>
        <span>跟进</span>
        <span>商机</span>
        <span>学情</span>
      </div>

      <div className="bg-gray-50 flex-1 pb-10">
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">近一年参与活动39次</span>
            <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">1天未活跃</span>
          </div>
          <div className="border-t border-dashed border-gray-300 my-4"></div>
        </div>
        
        <ActivitiesInfo openModal={openModal} />
      </div>

      <Modals activeModal={activeModal} closeModal={closeModal} />
    </>
  );
}
