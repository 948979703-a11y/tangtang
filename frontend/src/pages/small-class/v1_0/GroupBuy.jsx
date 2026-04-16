import React, { useState } from 'react';

export default function GroupBuy() {
  const [pageView, setPageView] = useState('course'); // 'course' or 'group_detail'
  const [role, setRole] = useState('leader'); // 'leader' or 'member'
  const [status, setStatus] = useState('pending'); // 'pending' or 'success'
  const [hasJoined, setHasJoined] = useState(false);
  const [sharePoints, setSharePoints] = useState(0);
  const [activeTab, setActiveTab] = useState('detail');

  // Switch between different mock situations
  const togglePageView = () => setPageView(p => p === 'course' ? 'group_detail' : 'course');
  const toggleRole = () => {
    setRole(r => r === 'leader' ? 'member' : 'leader');
    if (role === 'leader') {
      setStatus('pending'); // Reset to pending when switching to member to easily jump states
    }
    setHasJoined(false); // Reset joined status
  };
  const toggleStatus = () => setStatus(s => s === 'pending' ? 'success' : s === 'success' ? 'failed' : 'pending');
  const toggleHasJoined = () => setHasJoined(h => !h);

  const handleShare = (actionType) => {
    if (actionType === 'poster') {
      alert('生成专属朋友圈海报流程');
    } else {
      alert('请点击右上角「发送给朋友」完成转发分享流程');
    }

    // 模拟真实的分享异步回调，静默增加演示积分
    setTimeout(() => {
      if (sharePoints < 20) {
        setSharePoints(prev => prev + 5);
      }
    }, 1500);
  };

  const handleInitiateGroup = () => {
    setPageView('group_detail');
    setRole('leader');
    setStatus('pending');
  };

  const handleJoin = () => {
    if (role === 'member' && !hasJoined) {
      setHasJoined(true);
      alert('已顺利参团！参团奖励 5 积分已进账。等待好友加入，成团后将再获得 10 积分额外奖励！');
    }
  };

  const PointRewardsCard = ({ showMargin = true }) => (
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
                <li>分享好友：每次得 <span className="font-bold text-red-500">5</span> 积分（封顶 20 积分）</li>
                <li>拼团成功：团长得 <span className="font-bold text-red-500">80</span> 积分</li>
              </ul>
            ) : (
              <ul className="pl-3 list-disc space-y-0.5">
                <li>参团奖励：参团立得 <span className="font-bold text-red-500">5</span> 积分</li>
                <li>拼团成功：团员得 <span className="font-bold text-red-500">10</span> 积分</li>
                <li>分享好友：每次得 <span className="font-bold text-red-500">5</span> 积分（封顶 20 积分）</li>
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

  // Calculate total points based on config logic
  let totalLeaderPoints = role === 'leader' ? sharePoints + (status === 'success' ? 80 : 0) : 0;
  let totalMemberPoints = role === 'member' ? sharePoints + (hasJoined ? 5 : 0) + (status === 'success' && hasJoined ? 10 : 0) : 0;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pb-24 font-sans max-w-md mx-auto shadow-xl relative">
      {/* Dev Controls */}
      <div className="absolute top-0 right-0 p-2 bg-black/80 text-white text-[10px] rounded-bl z-50 flex gap-2">
        <button onClick={togglePageView} className="border border-white/30 px-1 rounded">页面：{pageView === 'course' ? '课包主页' : '拼团详情'}</button>
        {pageView === 'group_detail' && (
          <>
            <button onClick={toggleRole}>身份：{role === 'leader' ? '团长' : '团员'}</button>
            <button onClick={toggleStatus}>状态：{status === 'pending' ? '拼团中' : status === 'success' ? '已满/成功' : '失败/过期'}</button>
            {role === 'member' && (
              <button onClick={toggleHasJoined} className="bg-orange-500/80 px-1 rounded">入团：{hasJoined ? '已参与' : '未参与'}</button>
            )}
          </>
        )}
      </div>

      {/* Header */}
      <div className="w-full bg-white flex items-center justify-between p-4 border-b">
        <span className="text-xl">×</span>
        <h1 className="text-lg font-medium text-gray-800 truncate px-4">
          {pageView === 'course' ? '寒假20天听力训练顶顶顶顶顶' : '拼团详情'}
        </h1>
        <span className="text-xl">...</span>
      </div>

      {/* Hero / Banner */}
      <div className="w-full relative">
        <img src="/images/course_banner.png" alt="Course Banner" className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">2人团</div>
        {/* Replace hardcoded 0 with generic string if needed, based on screenshots */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-400 to-red-500 h-12 flex justify-between items-center px-4 text-white">
          <div className="flex items-end">
            <span className="text-xs bg-white text-red-500 px-1 py-0.5 rounded mr-2">2人团</span>
            <span className="text-lg font-bold">¥0</span>
          </div>
          <div className="text-right">
            <div className="text-[10px] opacity-80">距离活动结束仅剩</div>
            <div className="text-sm font-mono mt-0.5">15天 : 03 : 29 : 09</div>
          </div>
        </div>
      </div>

      {/* ------------- PAGE VIEW: COURSE DETAIL ------------- */}
      {pageView === 'course' && (
        <div className="w-full flex-grow flex flex-col items-center bg-gray-50">
          {/* Course Title Area */}
          <div className="w-full bg-white px-4 py-3 border-b">
            <h2 className="text-lg font-medium">寒假20天听力训练顶顶顶顶顶</h2>
            <div className="text-gray-500 text-sm mt-1 flex items-center">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              3人已报名
            </div>
          </div>

          {/* Tabs */}
          <div className="w-full bg-white flex justify-around border-b mt-2 relative">
            <button onClick={() => setActiveTab('detail')} className={`py-3 text-sm font-medium ${activeTab === 'detail' ? 'text-blue-500' : 'text-gray-600'}`}>详情</button>
            <button onClick={() => setActiveTab('directory')} className={`py-3 text-sm font-medium ${activeTab === 'directory' ? 'text-blue-500' : 'text-gray-600'}`}>目录</button>
            <button onClick={() => setActiveTab('materials')} className={`py-3 text-sm font-medium ${activeTab === 'materials' ? 'text-blue-500' : 'text-gray-600'}`}>资料</button>
            {/* Active Indication Bar mock */}
            <div className={`absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ${activeTab === 'detail' ? 'left-[14%] w-8' : activeTab === 'directory' ? 'left-[46%] w-8' : 'left-[78%] w-8'}`} ></div>
          </div>

          <div className="w-full px-4 pt-4">
            <PointRewardsCard showMargin={false} />
          </div>

          {/* Empty State */}
          <div className="w-full bg-white flex-grow flex flex-col items-center justify-center py-20">
            <div className="text-gray-300 text-6xl mb-4">📋</div>
            <p className="text-gray-400 text-sm">暂无详情</p>
          </div>

          {/* Bottom Sticky Action */}
          <div className="fixed bottom-0 w-full max-w-md bg-white p-2 border-t flex justify-center pb-8 z-40">
            <button onClick={handleInitiateGroup} className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full py-3 font-medium">
              ¥0.00 <span className="ml-1 opacity-90 text-sm">2人拼团</span>
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

              {/* Member Avatar 1 */}
              <div className={`ml-4 flex items-center justify-center w-12 h-12 rounded-full border-2 ${status === 'success' || (role === 'member' && hasJoined) ? 'border-transparent' : 'border-dashed border-gray-300'} text-gray-400 text-xl font-light`}>
                {status === 'success' || (role === 'member' && hasJoined) ? (
                  <img src="https://i.pravatar.cc/100?img=5" className="w-12 h-12 rounded-full" alt="Member" />
                ) : '+'}
              </div>

              {/* Member Avatar 2 (To simulate a 3-person group for the intermediate state) */}
              <div className={`ml-4 flex items-center justify-center w-12 h-12 rounded-full border-2 ${status === 'success' ? 'border-transparent' : 'border-dashed border-gray-300'} text-gray-400 text-xl font-light`}>
                {status === 'success' ? (
                  <img src="https://i.pravatar.cc/100?img=9" className="w-12 h-12 rounded-full" alt="Member" />
                ) : '+'}
              </div>
            </div>

            {status === 'pending' ? (
              <>
                <h3 className="text-xl font-medium text-gray-800">
                  还差 <span className="text-red-500">{hasJoined ? '1' : '2'}人</span>，快呼唤小伙伴参加吧
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
                role === 'leader' ? (
                  <div className="w-full flex gap-3">
                    <button onClick={() => handleShare('invite')} className="flex-1 bg-white border border-orange-400 text-orange-500 font-medium py-3 rounded-full active:bg-orange-50">
                      邀请好友参团
                    </button>
                    <button onClick={() => handleShare('poster')} className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 rounded-full shadow hover:shadow-md transition-shadow">
                      朋友圈海报
                    </button>
                  </div>
                ) : (
                  !hasJoined ? (
                    <button onClick={handleJoin} className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 rounded-full shadow hover:shadow-md transition-shadow">
                      我要参团（参团/成团拿两份）
                    </button>
                  ) : (
                    <div className="w-full flex gap-3">
                      <button onClick={() => handleShare('invite')} className="flex-1 bg-white border border-orange-400 text-orange-500 font-medium py-3 rounded-full active:bg-orange-50">
                        邀请好友参团
                      </button>
                      <button onClick={() => handleShare('poster')} className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 rounded-full shadow hover:shadow-md transition-shadow">
                        朋友圈海报
                      </button>
                    </div>
                  )
                )
              ) : status === 'failed' ? (
                <button onClick={() => { setPageView('course'); setRole('leader'); setStatus('pending'); }} className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 rounded-full shadow hover:shadow-md transition-shadow">
                  重新开团
                </button>
              ) : (
                status === 'success' && role === 'member' && !hasJoined ? (
                  <button onClick={() => { setPageView('course'); setRole('leader'); setStatus('pending'); }} className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 rounded-full shadow hover:shadow-md transition-shadow">
                    再开一团
                  </button>
                ) : (
                  <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 rounded-full shadow hover:shadow-md transition-shadow">
                    开始学习
                  </button>
                )
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

          {/* WeChat QR Area */}
          <div className="w-full bg-white mt-3 pb-8 pt-4 flex flex-col items-center flex-grow">
            <h3 className="text-blue-500 font-medium mb-1">扫码关注公众号</h3>
            <p className="text-xs text-gray-500 mb-4">扫码获取上课提醒与老师一起学习</p>
            <div className="border border-gray-200 rounded p-1 mb-2">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example" alt="QR Code" className="w-32 h-32 opacity-80" />
            </div>
            <p className="text-[10px] text-gray-400">长按二维码，或保存截图</p>
          </div>
        </div>
      )}

    </div>
  );
}
