/** 小表单 · 老师端数据看数 —— 原型 Mock */

export const FORM_THEME = '#00B578';

export const summaryKeys = [
  { key: 'forms', label: '推广表单' },
  { key: 'visits', label: '访问数' },
  { key: 'collections', label: '采集数' },
  { key: 'directFriends', label: '直加好友数' },
  { key: 'totalFriends', label: '总加好友数' },
  { key: 'leads', label: '线索数' },
  { key: 'opportunities', label: '商机数' },
  { key: 'orders', label: '成单数' },
];

export const overviewGridKeys = [
  { key: 'visits', label: '访问数' },
  { key: 'collections', label: '采集数' },
  { key: 'directFriends', label: '直加好友数' },
  { key: 'totalFriends', label: '总加好友数' },
  { key: 'leads', label: '线索数' },
  { key: 'opportunities', label: '商机数' },
  { key: 'orders', label: '成单数' },
];

export const globalSummary = {
  today: { forms: 21, visits: 0, collections: 0, directFriends: 0, totalFriends: 0, leads: 0, opportunities: 0, orders: 0 },
  yesterday: { forms: 21, visits: 12, collections: 3, directFriends: 1, totalFriends: 2, leads: 5, opportunities: 4, orders: 0 },
};

const leadDetailTemplate = {
  submitData: {
    submitAt: '2026-03-12 17:50:16',
    phone: '133****9494',
    gender: '男',
  },
  wechatAdd: {
    status: '未添加',
    wechatId: '未设置微信',
    adderAccount: '-',
    addTime: '-',
  },
  userBasic: {
    avatarUrl: null,
    nickname: '-',
    studentType: '未在读老生',
    location: '北京市海淀区海淀街道海兴大厦',
    nearestCampus: 'TESSBM3东方教学区(0.9 km)',
  },
  channel: {
    channel: '市场地推-学校地推',
    campus: '-',
    promoter: 'zhangjinfeng15@xdf.cn',
  },
};

export const forms = [
  {
    id: 'registration-1',
    title: '报名表单',
    status: '进行中',
    statusTone: 'orange',
    updatedAt: '2026-01-07 17:03:58',
    listMetrics: { visits: 0, collections: 0, totalFriends: 0, directFriends: 0 },
    overviewByPeriod: {
      today: { visits: 0, collections: 0, directFriends: 0, totalFriends: 0, leads: 0, opportunities: 0, orders: 0 },
      yesterday: { visits: 2, collections: 1, directFriends: 0, totalFriends: 1, leads: 3, opportunities: 2, orders: 0 },
    },
    detailSummaryByPeriod: {
      today: { visits: 0, collections: 1, directFriends: 0, totalFriends: 1, leads: 29, opportunities: 29, orders: 0 },
      yesterday: { visits: 1, collections: 0, directFriends: 0, totalFriends: 0, leads: 8, opportunities: 7, orders: 0 },
    },
    promoters: [
      {
        id: 'me',
        badge: '我',
        account: 'zhangjinfeng15@xdf.cn',
        metrics: { visits: 0, collections: 0, totalFriends: 0, directFriends: 0 },
      },
    ],
    leads: [
      {
        id: 'lead-1',
        name: '--',
        phone: '133****9494',
        directFriend: '是',
        entryMethod: '自主录入',
        submitTime: '2026-01-07 17:06:09',
        detail: leadDetailTemplate,
      },
      {
        id: 'lead-2',
        name: '张同学',
        phone: '138****1024',
        directFriend: '否',
        entryMethod: '自主录入',
        submitTime: '2026-01-06 10:20:00',
        detail: {
          ...leadDetailTemplate,
          submitData: { submitAt: '2026-01-06 10:20:00', phone: '138****1024', gender: '女' },
          wechatAdd: { status: '已添加', wechatId: 'wxid_demo', adderAccount: 'staff01', addTime: '2026-01-06 11:00:00' },
          userBasic: {
            ...leadDetailTemplate.userBasic,
            nickname: '小张',
            location: '北京市朝阳区',
            nearestCampus: 'TESSBM1测试校区(1.2 km)',
          },
        },
      },
    ],
  },
];

export function getFormById(id) {
  return forms.find((f) => f.id === id);
}

export function getLead(form, leadId) {
  return form?.leads?.find((l) => l.id === leadId);
}
