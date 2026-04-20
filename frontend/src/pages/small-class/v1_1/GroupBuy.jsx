import React, { useState } from 'react';

export default function GroupBuy() {
  const [pageView, setPageView] = useState('course'); // 'course' or 'group_detail'
  const [role, setRole] = useState('leader'); // 'leader' or 'member'
  const [status, setStatus] = useState('pending'); // 'pending' or 'success'
  const [hasJoined, setHasJoined] = useState(false);
  const [sharePoints, setSharePoints] = useState(0);
  const [activeTab, setActiveTab] = useState('detail');
  
  // New States for Tiered Group Buy
  const [isTiered, setIsTiered] = useState(true); // Toggle to simulate tiered vs standard
  const [selectedTier, setSelectedTier] = useState(0); // 0: 2人团, 1: 5人团
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const tiers = [
    { name: '2人团', count: 2, price: '¥0.10', leaderPoints: 80, memberPoints: 10, sharePoints: 5, joinPoints: 5 },
    { name: '5人团', count: 5, price: '¥0.00', leaderPoints: 150, memberPoints: 20, sharePoints: 8, joinPoints: 10 }
  ];

  const currentTier = tiers[selectedTier] || tiers[0];

  // Switch between different mock situations
  const togglePageView = () => setPageView(p => p === 'course' ? 'group_detail' : 'course');
  const toggleRole = () => {
    setRole(r => r === 'leader' ? 'member' : 'leader');
    if (role === 'leader') {
      setStatus('pending');
    }
    setHasJoined(false);
  };
  const toggleStatus = () => setStatus(s => s === 'pending' ? 'success' : s === 'success' ? 'failed' : 'pending');
  const toggleHasJoined = () => setHasJoined(h => !h);
  const toggleIsTiered = () => setIsTiered(t => !t);

  const handleShare = (actionType) => {
    if (actionType === 'poster') {
      alert('生成专属朋友圈海报流程');
    } else {
      alert('请点击右上角「发送给朋友」完成转发分享流程');
    }

    setTimeout(() => {
      if (sharePoints < 20) {
        setSharePoints(prev => prev + currentTier.sharePoints);
      }
    }, 1500);
  };

  const openSelectionSheet = () => {
    if (isTiered) {
      setIsSheetOpen(true);
    } else {
      handleInitiateGroup();
    }
  };

  const handleInitiateGroup = () => {
    setIsSheetOpen(false);
    setPageView('group_detail');
    setRole('leader');
    setStatus('pending');
    setSharePoints(0);
  };

  const handleJoin = () => {
    if (role === 'member' && !hasJoined) {
      setHasJoined(true);
      alert(`已顺利参团！参团奖励 ${currentTier.joinPoints} 积分已进账。等待好友加入，成团后将再获得 ${currentTier.memberPoints} 积分额外奖励！`);
    }
  };

  const PointRewardsCard = ({ showMargin = true }) => {
    if (pageView === 'course' && isTiered) {
      // Home Page - Tiered Mode (Based on the screenshot you provided)
      return (
        <div className={`w-full bg-[#FCF6EC] p-4 rounded-xl flex items-start gap-3 relative ${showMargin ? 'mt-3 mb-2' : ''}`}>
          <div className="w-10 h-10 rounded-full bg-[#FEEDD8] flex items-center justify-center shrink-0 mt-1">
            <span className="text-xl">🎁</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <span className="text-base text-[#8B4513] font-bold">拼团赚积分</span>
            </div>
            <div className="text-xs text-orange-700/90 leading-tight">
              <div className="flex flex-col gap-3 mt-1.5 pt-0.5">
                {tiers.map((tier, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="text-[#8B4513] font-bold text-sm tracking-tight flex items-center">
                      <span className="mr-1 opacity-60">·</span>{tier.name}
                    </div>
                    <div className="pl-3 space-y-1 text-[#8B4513] opacity-90 text-[11px] leading-relaxed">
                      <div>分享好友：每次得 <span className="font-bold">{tier.sharePoints}</span> 积分（封顶 20 积分）</div>
                      <div>拼团成功：团长得 <span className="font-bold">{tier.leaderPoints}</span> 积分</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="absolute top-4 right-4 text-[10px] bg-white/60 border border-[#8B4513]/20 text-[#8B4513] px-2.5 py-1 rounded-full font-bold shadow-sm active:bg-white/90">
            点击兑换 &gt;
          </button>
        </div>
      );
    }

    // Default Style (Accurately restored from V1.0)
    return (
      <div className={`w-full bg-orange-50 p-3 rounded-lg flex items-center justify-between border border-orange-200 ${showMargin ? 'mt-3 mb-2' : ''}`}>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mr-2 shrink-0">
            <span className="text-lg leading-none">🎁</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm text-orange-800 font-bold mb-1">
              拼团赚积分
            </span>
            <div className="text-xs text-orange-700/90 leading-tight">
              {pageView === 'course' || role === 'leader' || status === 'failed' || (role === 'member' && status === 'success' && !hasJoined) ? (
                <ul className="pl-3 list-disc space-y-0.5">
                  <li>分享好友：每次得 <span className="font-bold text-red-500">{currentTier.sharePoints}</span> 积分（封顶 20 积分）</li>
                  <li>拼团成功：团长得 <span className="font-bold text-red-500">{currentTier.leaderPoints}</span> 积分</li>
                </ul>
              ) : (
                <ul className="pl-3 list-disc space-y-0.5">
                  <li>参团奖励：参团立得 <span className="font-bold text-red-500">{currentTier.joinPoints}</span> 积分</li>
                  <li>拼团成功：团员得 <span className="font-bold text-red-500">{currentTier.memberPoints}</span> 积分</li>
                  <li>分享好友：每次得 <span className="font-bold text-red-500">{currentTier.sharePoints}</span> 积分（封顶 20 积分）</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <button className="text-[10px] bg-white border border-orange-300 text-orange-600 px-2 py-1 rounded-full font-medium shadow-sm shrink-0 ml-1 active:bg-orange-50">
          点击兑换 &gt;
        </button>
      </div>
    );
  };

  // Selection Sheet Component
  const TieredSelectionSheet = () => (
    <>
      <div className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${isSheetOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsSheetOpen(false)}></div>
      <div className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white rounded-t-2xl z-[70] p-4 transition-transform duration-300 transform ${isSheetOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3">
            <img src="/images/course_banner.png" className="w-20 h-20 rounded-lg object-cover bg-gray-100" />
            <div>
              <div className="text-red-500 font-bold text-lg">
                拼团价 <span className="text-xl">¥0.00 - 0.10</span>
              </div>
              <div className="text-gray-400 text-xs line-through mt-1">原价 ¥2.00</div>
              <div className="text-gray-800 text-sm mt-1">已选择：{currentTier.name}</div>
            </div>
          </div>
          <button onClick={() => setIsSheetOpen(false)} className="text-gray-400 text-2xl leading-none">×</button>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-800 mb-3">拼团类型</h4>
          <div className="flex gap-3">
            {tiers.map((tier, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedTier(idx)}
                className={`flex-1 border-2 rounded-xl p-3 flex flex-col items-center cursor-pointer transition-all ${selectedTier === idx ? 'border-orange-500 bg-orange-50' : 'border-gray-100 bg-gray-50'}`}
              >
                <span className={`text-sm font-bold ${selectedTier === idx ? 'text-orange-600' : 'text-gray-600'}`}>{tier.name}</span>
                <span className="text-[10px] text-orange-400 mt-1">成团奖{tier.leaderPoints}分</span>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleInitiateGroup} className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-3.5 rounded-full font-bold shadow-lg shadow-orange-200 active:scale-95 transition-transform">
          确定
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pb-24 font-sans max-w-md mx-auto shadow-xl relative">
      {/* Dev Controls - Compact Horizontal Layout */}
      <div className="absolute top-0 right-0 p-2 bg-black/80 text-white text-[10px] rounded-bl z-50 flex flex-wrap max-w-[350px] gap-1.5 justify-end">
        {pageView === 'course' && (
          <button onClick={toggleIsTiered} className={`px-1.5 py-0.5 rounded border border-white/30 ${isTiered ? 'bg-indigo-600' : 'bg-gray-700'}`}>
            模式：{isTiered ? '阶梯' : '普通'}
          </button>
        )}
        <button onClick={togglePageView} className="px-1.5 py-0.5 border border-white/30 rounded bg-gray-700">
          视图：{pageView === 'course' ? '课程主页' : '拼团详情'}
        </button>
        {pageView === 'group_detail' && (
          <>
            <button onClick={toggleRole} className="px-1.5 py-0.5 rounded bg-blue-600 border border-white/30">
              身份：{role === 'leader' ? '团长' : '团员'}
            </button>
            <button onClick={toggleStatus} className={`px-1.5 py-0.5 rounded border border-white/30 ${status === 'success' ? 'bg-emerald-600' : status === 'failed' ? 'bg-rose-600' : 'bg-orange-600'}`}>
              状态：{status === 'pending' ? '拼团中' : status === 'success' ? '拼团成功' : '拼团失败'}
            </button>
            {role === 'member' && (
              <button onClick={toggleHasJoined} className={`px-1.5 py-0.5 rounded border border-white/30 ${hasJoined ? 'bg-teal-600' : 'bg-gray-500'}`}>
                参与：{hasJoined ? '已参与' : '未参与'}
              </button>
            )}
          </>
        )}
      </div>

      <TieredSelectionSheet />

      {/* Header */}
      <div className="w-full bg-white flex items-center justify-between p-4 border-b">
        <span className="text-xl">×</span>
        <h1 className="text-lg font-medium text-gray-800 truncate px-4">
          {pageView === 'course' ? '寒假20天听力训练课' : '拼团详情'}
        </h1>
        <span className="text-xl">...</span>
      </div>

      {/* Hero / Banner Area */}
      <div className="w-full relative">
        <img src="/images/course_banner.png" alt="Course Banner" className="w-full h-48 object-cover bg-gray-200" />
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded shadow-sm">{currentTier.name}</div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 h-14 flex justify-between items-center px-4 text-white shadow-inner">
          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-white text-red-500 px-2 py-0.5 rounded-sm font-bold">{currentTier.name}优惠</span>
            <span className="text-2xl font-black">{currentTier.price}</span>
            <span className="text-[10px] line-through opacity-70">¥2.00</span>
          </div>
          <div className="text-right">
            <div className="text-[9px] opacity-80 uppercase tracking-wider">距离活动结束</div>
            <div className="text-sm font-mono font-bold leading-none mt-1">15d:03h:29m</div>
          </div>
        </div>
      </div>

      {/* ------------- PAGE VIEW: COURSE DETAIL ------------- */}
      {pageView === 'course' && (
        <div className="w-full flex-grow flex flex-col items-center bg-gray-50">
          <div className="w-full bg-white px-4 py-4 border-b">
            <h2 className="text-lg font-bold text-gray-800 leading-snug">寒假20天听力训练：顶尖牛津外教原声伴读</h2>
            <div className="text-gray-400 text-xs mt-2 flex items-center">
              <span className="mr-3">已报名 1,280 人</span>
              <span className="text-orange-400">🔥 正在疯抢中</span>
            </div>
          </div>

          <div className="w-full bg-white flex justify-around border-b mt-2 relative">
            <button onClick={() => setActiveTab('detail')} className={`py-3 text-sm font-bold ${activeTab === 'detail' ? 'text-blue-600' : 'text-gray-400'}`}>课程详情</button>
            <button onClick={() => setActiveTab('directory')} className={`py-3 text-sm font-bold ${activeTab === 'directory' ? 'text-blue-600' : 'text-gray-400'}`}>课程目录</button>
            <button onClick={() => setActiveTab('materials')} className={`py-3 text-sm font-bold ${activeTab === 'materials' ? 'text-blue-600' : 'text-gray-400'}`}>配套资料</button>
            <div className={`absolute bottom-0 h-1 bg-blue-600 rounded-t-full transition-all duration-300 ${activeTab === 'detail' ? 'left-[14%] w-8' : activeTab === 'directory' ? 'left-[46%] w-8' : 'left-[78%] w-8'}`} ></div>
          </div>

          <div className="w-full px-4 pt-4">
            <PointRewardsCard showMargin={false} />
          </div>

          {/* Course Body Content */}
          <div className="w-full px-4 py-6 bg-white flex-grow mt-2">
            <div className="aspect-video w-full bg-gray-100 rounded-xl overflow-hidden mb-4 flex items-center justify-center border border-gray-100">
               <span className="text-gray-300 text-4xl">▶</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              本课程由清华大学名师团队打造，专为小学3-6年级学生设计的听力强化计划。涵盖24个生活场景，3000+核心高频词汇。
            </p>
            <div className="grid grid-cols-2 gap-3">
               {[1,2,3,4].map(i => <div key={i} className="h-20 bg-gray-50 rounded-lg border border-gray-100 border-dashed"></div>)}
            </div>
          </div>

          {/* Bottom Sticky Action */}
          <div className="fixed bottom-0 w-full max-w-md bg-white p-3 border-t flex gap-3 pb-8 z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
            <button className="flex flex-col items-center justify-center px-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-lg">🛒</span>
              <span className="text-[10px] text-gray-500">立即选购</span>
            </button>
            <button onClick={openSelectionSheet} className="flex-1 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl py-3 font-bold shadow-lg shadow-orange-100 flex flex-col items-center leading-none">
              <span className="text-lg mb-0.5">{tiers[0].price} 起</span>
              <span className="text-[10px] opacity-90">{isTiered ? '多档阶梯拼团' : '立即拼团'}</span>
            </button>
          </div>
        </div>
      )}

      {/* ------------- PAGE VIEW: GROUP BUY DETAILS ------------- */}
      {pageView === 'group_detail' && (
        <div className="w-full flex flex-col items-center bg-gray-50 flex-grow pb-10">

          {/* Group Status Area */}
          <div className="w-full bg-white p-5 flex flex-col items-center shadow-sm relative">
            {status === 'success' && role === 'member' && !hasJoined && (
              <div className="flex items-center text-gray-700 text-lg mb-6 mt-2">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-400 font-bold text-sm mr-2">!</div>
                晚来一步，拼团已结束
              </div>
            )}

            {status === 'failed' && (
              <div className="flex items-center text-gray-700 text-lg mb-6 mt-2">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-sm mr-2">!</div>
                很抱歉，当前拼团已结束（未成团）
              </div>
            )}

            <div className="flex mb-4">
              {/* Leader Avatar */}
              <div className="relative">
                <img src="https://i.pravatar.cc/100?img=1" className="w-12 h-12 rounded-full border-2 border-orange-300" alt="Leader" />
                <div className="absolute -bottom-2 -left-1 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">团长</div>
              </div>

              {/* Dynamic Member Slots */}
              {[...Array(currentTier.count - 1)].map((_, i) => (
                <div key={i} className={`ml-4 flex items-center justify-center w-12 h-12 rounded-full border-2 ${status === 'success' || (role === 'member' && hasJoined && i === 0) ? 'border-transparent' : 'border-dashed border-gray-300'} text-gray-400 text-xl font-light relative overflow-hidden`}>
                   {(status === 'success' || (role === 'member' && hasJoined && i === 0)) ? (
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-full h-full rounded-full" alt="Member" />
                   ) : '+'}
                </div>
              ))}
            </div>

            {status === 'pending' ? (
              <>
                <h3 className="text-xl font-medium text-gray-800">
                  还差 <span className="text-red-500">{hasJoined ? currentTier.count - 2 : currentTier.count - 1}人</span>，快呼唤小伙伴参加吧
                </h3>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span className="mr-2">剩余</span>
                  <span className="bg-gray-800 text-white px-1.5 rounded mx-0.5">1天</span>
                  <span className="bg-gray-800 text-white px-1.5 rounded mx-0.5">22</span>:
                  <span className="bg-gray-800 text-white px-1.5 rounded mx-0.5">54</span>:
                  <span className="bg-gray-800 text-white px-1.5 rounded mx-0.5">46</span>
                  <span className="ml-2">结束</span>
                </div>
              </>
            ) : status === 'failed' ? (
              <div className="flex items-center text-gray-400 text-sm">
                倒计时已结束，未达到成团人数要求
              </div>
            ) : !(role === 'member' && !hasJoined) && (
              <div className="flex items-center text-emerald-500 text-xl font-medium">
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                拼团成功
              </div>
            )}

            <div className="w-full flex justify-center mt-6 gap-3">
              {status === 'pending' ? (
                role === 'leader' || hasJoined ? (
                  <div className="w-full flex gap-3">
                    <button onClick={() => handleShare('invite')} className="flex-1 bg-white border border-orange-400 text-orange-500 font-medium py-3 rounded-full active:bg-orange-50">
                      邀请好友参团
                    </button>
                    <button onClick={() => handleShare('poster')} className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 rounded-full shadow hover:shadow-md transition-shadow">
                      朋友圈海报
                    </button>
                  </div>
                ) : (
                  <button onClick={handleJoin} className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 rounded-full shadow hover:shadow-md transition-shadow">
                    参团立得 {currentTier.joinPoints} 积分
                  </button>
                )
              ) : (
                <button onClick={() => { setPageView('course'); setRole('leader'); setStatus('pending'); }} className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 rounded-full shadow hover:shadow-md transition-shadow">
                  {status === 'failed' || (role === 'member' && !hasJoined) ? '重新开团' : '开始学习'}
                </button>
              )}
            </div>

            <PointRewardsCard />
          </div>

          {/* Rules Area */}
          <div className="w-full bg-white p-4 mt-3 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium text-gray-800">拼团玩法</h4>
              <span className="text-xs text-gray-400 cursor-pointer">详细规则 &gt;</span>
            </div>
            <div className="flex justify-between items-center px-2">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mb-2">
                  📝
                </div>
                <span className="text-[10px] text-gray-500">选择课程开团/参团</span>
              </div>
              <div className="h-px w-8 bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mb-2">
                  👥
                </div>
                <span className="text-[10px] text-gray-500">邀请好友参团</span>
              </div>
              <div className="h-px w-8 bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mb-2">
                  ✅
                </div>
                <span className="text-[10px] text-gray-500">达到人数拼团成功</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
