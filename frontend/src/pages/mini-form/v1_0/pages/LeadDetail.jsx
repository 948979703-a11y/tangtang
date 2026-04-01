import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFormById, getLead, FORM_THEME } from '../mockData';

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-1 h-4 rounded-sm shrink-0" style={{ backgroundColor: FORM_THEME }} />
      <h2 className="text-sm font-bold text-gray-900">{children}</h2>
    </div>
  );
}

function Row({ label, value, className = '' }) {
  return (
    <div className={`py-2 ${className}`}>
      <div className="flex items-center">
        <span className="text-xs text-gray-500 w-20 shrink-0">{label}</span>
        <div className="text-sm text-gray-900 flex-1 break-all">{value}</div>
      </div>
    </div>
  );
}

export default function LeadDetail() {
  const { formId, leadId } = useParams();
  const navigate = useNavigate();

  const { form, lead, detail } = useMemo(() => {
    const f = getFormById(formId);
    const l = getLead(f, leadId);
    return { form: f, lead: l, detail: l?.detail };
  }, [formId, leadId]);

  if (!form || !lead || !detail) {
    return (
      <div className="p-6 text-center text-gray-500 text-sm">
        未找到线索
        <button type="button" className="block mx-auto mt-4 text-[#00B578]" onClick={() => navigate(`/mini-form/v1.0/form/${formId}?tab=detail`)}>
          返回列表
        </button>
      </div>
    );
  }

  const back = () => navigate(`/mini-form/v1.0/form/${formId}?tab=detail`);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="sticky top-0 z-10 flex items-center h-11 px-2 border-b border-gray-100 bg-white">
        <button type="button" className="w-10 h-10 flex items-center justify-center text-gray-700" aria-label="返回" onClick={back}>
          <i className="fa fa-chevron-left" />
        </button>
        <h1 className="flex-1 text-center text-base font-semibold text-gray-900 pr-10">线索明细</h1>
      </header>

      <div className="p-4 flex-1 pb-10">
        <section className="mb-6">
          <SectionTitle>提交数据</SectionTitle>
          <Row label="表单提交时间" value={detail.submitData.submitAt} />
          <Row label="手机" value={detail.submitData.phone} />
          <Row label="性别" value={detail.submitData.gender} />
          <Row label="表单提交时间" value={detail.submitData.submitAt} />
        </section>

        <section className="mb-6">
          <SectionTitle>添加微信好友</SectionTitle>
          <div className="grid grid-cols-2 gap-x-4">
            <Row label="状态" value={detail.wechatAdd.status} />
            <Row label="添加微信号" value={detail.wechatAdd.wechatId} />
          </div>
          <Row label="添加人账号" value={detail.wechatAdd.adderAccount} />
          <Row label="添加时间" value={detail.wechatAdd.addTime} />
        </section>

        <section className="mb-6">
          <SectionTitle>用户基本信息（系统采集）</SectionTitle>
          <div className="flex items-center gap-3 py-2">
            <span className="text-xs text-gray-500 w-20 shrink-0">微信头像</span>
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <i className="fa fa-user text-gray-400 text-xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <Row label="微信昵称" value={detail.userBasic.nickname} />
            <Row label="新老生" value={detail.userBasic.studentType} />
          </div>
          <Row label="地理位置" value={detail.userBasic.location} />
          <Row label="最近校区" value={detail.userBasic.nearestCampus} />
        </section>

        <section>
          <SectionTitle>渠道信息</SectionTitle>
          <Row label="渠道" value={detail.channel.channel} />
          <Row label="推广校区" value={detail.channel.campus} />
          <Row label="推广人" value={detail.channel.promoter} />
        </section>
      </div>
    </div>
  );
}
