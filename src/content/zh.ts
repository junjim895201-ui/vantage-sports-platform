import type { ShuttleProduct } from "./products";
import { factoryCapabilities as enFactoryCapabilities } from "./products";

// TODO: Replace with official production contact information before public launch
export const site = {
  name: "VANTAGE SPORTS",
  brand: "VANTAGE SPORTS",
  tagline: "东南亚体育分销与 OEM 平台",
  description:
    "VANTAGE SPORTS 帮助分销商、羽毛球俱乐部、体育用品店和 OEM 买家，在泰国、马来西亚、菲律宾和越南获取工厂直供羽毛球及贴牌装备。",
  url: "https://vantage-sports.vercel.app",
  email: "contact@vantagesports.com",
  whatsapp: "60123456789",
  whatsappDisplay: "+60 12-345 6789",
  facebook: "https://facebook.com/vantagesports",
  line: "https://line.me/R/ti/p/@vantagesports",
  markets: ["泰国", "马来西亚", "菲律宾", "越南"],
  audiences: ["分销商", "羽毛球俱乐部", "体育用品店", "OEM 买家"],
  coreBusiness: [
    "羽毛球分销",
    "OEM / 贴牌服务",
    "分销商招募",
    "俱乐部试打计划",
    "东南亚市场开发",
  ],
};

export const nav = [
  { label: "首页", path: "/" },
  { label: "产品", path: "/products" },
  { label: "对比", path: "/product-comparison" },
  { label: "分销商", path: "/distributor-program" },
  { label: "伙伴", path: "/factory-partners" },
  { label: "下载", path: "/download-center" },
];

export const footerNav = [
  { label: "分销商 CRM", path: "/distributor-crm" },
  { label: "试打数据库", path: "/club-testing-database" },
  { label: "试打计划", path: "/shuttle-testing" },
  { label: "下载中心", path: "/download-center" },
  { label: "资源中心", path: "/distributor-resources" },
];

export const home = {
  seo: {
    title: "VANTAGE SPORTS | 东南亚体育分销与 OEM 平台",
    description:
      "VANTAGE SPORTS — 羽毛球分销、OEM 贴牌、分销商招募与俱乐部试打，覆盖泰国、马来西亚、菲律宾和越南。",
  },
  eyebrow: "东南亚 · B2B 体育平台",
  title: "面向东南亚的工厂直供羽毛球供应链",
  subtitle:
    "VANTAGE SPORTS 是分销与 OEM 平台，而非零售商店。我们通过精选中国制造合作伙伴，帮助伙伴获取赛事级羽毛球、贴牌制造及东盟市场开发支持。",
  ctaProducts: "羽毛球产品系列",
  ctaDistributor: "分销商计划",
  ctaTesting: "俱乐部试打计划",
  pillarsTitle: "核心业务",
  pillars: [
    {
      title: "羽毛球分销",
      desc: "G4、G6、G7 合作产品系列 — 从赛事到经济训练 — 出口级品控。",
    },
    {
      title: "OEM / 贴牌",
      desc: "与精选中国制造商合作，在东盟市场推出您的品牌。",
    },
    {
      title: "市场开发",
      desc: "在泰国、马来西亚、菲律宾和越南开展分销商招募、俱乐部试打及渠道支持。",
    },
  ],
  audiencesTitle: "服务对象",
  audiences: [
    { title: "分销商", desc: "工厂直供、分级定价及区域上市支持。" },
    { title: "羽毛球俱乐部", desc: "样品试打计划与稳定羽毛球供应。" },
    { title: "体育用品店", desc: "高毛利 SKU、组合装及零售包装。" },
    { title: "OEM 买家", desc: "通过认证制造伙伴获取贴牌羽毛球及装备。" },
  ],
  ctaTitle: "准备与 VANTAGE SPORTS 合作？",
  ctaDesc: "告知您的国家、渠道类型及月采购量。我们将在 2 个工作日内回复。",
};

export const products = {
  seo: {
    title: "羽毛球产品系列 | VANTAGE SPORTS",
    description:
      "G4 赛事级、G6 俱乐部训练、G7 经济训练羽毛球 — VANTAGE SPORTS 在东南亚分销的合作产品系列。",
  },
  title: "羽毛球产品系列",
  subtitle:
    "G4、G6、G7 构成合作产品阶梯 — 从赛事到经济训练。由 INFIV 等精选 OEM 伙伴制造。",
  partnerNote: "合作产品系列 · 制造伙伴：INFIV（精彩永恒）及精选中国工厂",
  shuttleTitle: "合作产品系列",
  accessoryTitle: "装备与配件",
  specs: [
    "免熏蒸出口流程",
    "49 道品控 · 0.1% 羽毛缺陷容差",
    "AI + 显微 + 人工检验",
    "提供适合东盟气候的 77–79 速球",
    "大货前可提供样品筒",
  ],
  note: "出口报价由 VANTAGE SPORTS 按市场单独提供。请联系我们进行到岸成本规划。",
  gradeLegend: [
    { sku: "G4", label: "赛事级", desc: "专利鹅毛 · 竞技飞行" },
    { sku: "G6", label: "俱乐部训练", desc: "0.15mm 鹅毛 · 极高耐用" },
    { sku: "G7", label: "经济训练", desc: "黄金鸭毛 · 高性价比" },
  ],
};

export const oem = {
  seo: {
    title: "OEM 制造 | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS OEM 与贴牌服务 — 与精选中国制造商合作，为东盟市场生产羽毛球及装备。",
  },
  title: "OEM 制造",
  subtitle:
    "我们与精选中国制造商合作 — 包括 INFIV 作为 OEM 伙伴 — 为东南亚推出贴牌羽毛球、定制包装及联合品牌装备。",
  partnerIntro:
    "VANTAGE SPORTS 不拥有工厂。我们通过认证制造伙伴进行采购、审核与管理生产，提供出口级品控及东盟包装支持。",
  scopes: [
    { title: "羽毛球 OEM", desc: "筒身设计、标识、球速及多语言东盟包装。" },
    { title: "球拍 OEM", desc: "框型、涂装、标识、握把及穿线贴牌。" },
    { title: "配件 OEM", desc: "球包、握把胶、袜品及队服渠道专属组合。" },
  ],
  steps: [
    "向 VANTAGE SPORTS 提供品牌简介、目标市场及销量预测",
    "通过精选制造伙伴打样",
    "品控确认及包装本地化",
    "排产及出口单证",
  ],
  moq: [
    "羽毛球 OEM：每个球速 500 筒起",
    "球拍 OEM：每个型号 300 支起",
    "配件 OEM：起订量因品类而异 — 请联系询价",
  ],
  brandTypes: [
    {
      title: "贴牌",
      desc: "您的品牌印在工厂产出上 — 羽毛球、筒身及球速按市场定位定制。",
    },
    {
      title: "定制包装",
      desc: "多语言筒身设计、条码及零售盒，面向泰、马、菲、越市场。",
    },
    {
      title: "分销商品牌",
      desc: "区域分销商专属联合品牌或白牌系列 — 保护区域与毛利。",
    },
    {
      title: "学院品牌",
      desc: "俱乐部或学院标识印在羽毛球及队服上 — 稳定供应计划配合工厂品控。",
    },
  ],
};

export const distributor = {
  seo: {
    title: "分销商计划 | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS 帮助分销商在泰国、马来西亚、菲律宾和越南获取工厂直供羽毛球产品。",
  },
  title: "分销商计划",
  subtitle:
    "我们帮助分销商获取工厂直供羽毛球产品 — 羽毛球、装备及 OEM 系列 — 无需独自应对中国供应链。",
  who: [
    "区域体育批发商与进口商",
    "羽毛球专业分销商",
    "多店体育零售集团",
    "覆盖泰国、马来西亚、菲律宾或越南的代理商",
  ],
  benefits: [
    {
      title: "工厂直供",
      desc: "VANTAGE SPORTS 连接认证制造伙伴，提供透明出口报价。",
    },
    {
      title: "清晰 SKU 阶梯",
      desc: "G4 / G6 / G7 定位简化铺货与复购。",
    },
    {
      title: "营销工具包",
      desc: "产品单页、飞行指南及门店 POS 素材。",
    },
    {
      title: "物流指导",
      desc: "东南亚海运协调及到岸成本规划。",
    },
  ],
  steps: [
    "提交含区域信息的分销商申请",
    "获取 G 系列产品样品及出口价格档",
    "与 VANTAGE SPORTS 签署合作协议",
    "在渠道与市场开发支持下上市",
  ],
  leadFormTitle: "分销商意向表",
  leadFormSubtitle: "介绍您的业务。VANTAGE SPORTS 将在 2 个工作日内回复。",
  leadFormNote:
    "提交内容将记录至 VANTAGE 线索系统。团队将在 2 个工作日内回复 — 也可通过 WhatsApp 加快跟进。",
  leadFormFields: {
    country: "国家",
    company: "公司",
    contactPerson: "联系人",
    whatsapp: "WhatsApp",
    email: "邮箱",
    facebookPage: "Facebook 主页",
    currentBrands: "现有品牌",
    monthlyVolume: "月采购量",
    interestedProducts: "感兴趣产品",
    message: "市场说明 / 需求",
    submit: "提交分销商申请",
  },
  volumeOptions: [
    "每月 500 筒以下",
    "每月 500 – 2,000 筒",
    "每月 2,000 – 10,000 筒",
    "每月 10,000 筒以上",
    "暂不确定",
  ],
  productOptions: [
    "G4 赛事级",
    "G6 俱乐部训练",
    "G7 经济训练",
    "球拍",
    "服装与球包",
    "OEM / 贴牌",
  ],
};

export const testing = {
  seo: {
    title: "俱乐部试打计划 | VANTAGE SPORTS",
    description:
      "通过 VANTAGE SPORTS 申请免费 G4、G6、G7 羽毛球样品。大货前验证飞行与耐用性。",
  },
  title: "免费羽毛球试打",
  subtitle: "在您的湿度、海拔及球员水平下，测试合作系列羽毛球，再决定集装箱采购量。",
  who: [
    "评估新供应商线的分销商申请人",
    "拥有 20 名以上活跃会员的俱乐部与学院",
    "开设或升级羽毛球品类的体育用品店",
    "贴牌跑量前验证工厂产出的 OEM 品牌",
  ],
  includes: [
    "2–4 筒 G4 / G6 / G7 及不同球速样品",
    "飞行与耐用性评估清单",
    "您所在市场的出口报价预览",
    "VANTAGE SPORTS 产品团队跟进",
  ],
  steps: [
    "提交含俱乐部或企业信息的申请",
    "3 个工作日内审核",
    "样品寄送至您的地址",
    "反馈试打结果 — 我们协助规划首单大货",
  ],
  note: "各国每月配额有限。优先面向有真实采购潜力的分销商、俱乐部及门店。",
  ctaTitle: "俱乐部试打计划",
  ctaSubtitle: "拥有 20 名以上活跃会员的羽毛球俱乐部与学院可申请免费 G4、G6、G7 样品筒。",
  ctaButton: "申请免费试打",
  applicationTitle: "免费羽毛球试打申请",
  applicationSubtitle: "填写下方表单。符合条件的俱乐部、分销商及体育店可获 2–4 筒样品。",
  applicationNote:
    "申请将记录至 VANTAGE 线索系统。优先面向 20 人以上俱乐部及活跃分销商 — 可通过 WhatsApp 加快审核。",
  organizationTypes: ["羽毛球俱乐部", "学院", "体育用品店", "分销商", "OEM 品牌", "其他"],
  memberOptions: ["20 人以下", "20 – 50 人", "50 – 100 人", "100 人以上", "不适用 — 零售/分销"],
  productTestOptions: [
    "G4 赛事级",
    "G6 俱乐部训练",
    "G7 经济训练",
    "G4 + G6 + G7 组合",
    "不确定",
  ],
  applicationFields: {
    organizationType: "机构类型",
    country: "国家",
    organizationName: "俱乐部 / 公司名称",
    contactPerson: "联系人",
    whatsapp: "WhatsApp",
    email: "邮箱",
    memberCount: "活跃会员 / 业务规模",
    productsInterested: "试打产品",
    courtsOrStores: "球场或门店数量",
    message: "补充说明",
    submit: "提交试打申请",
  },
};

export const catalog = {
  title: "下载产品目录",
  subtitle: "索取面向您市场的 VANTAGE SPORTS 羽毛球与装备完整目录。",
  note: "PDF 目录可按需提供。提交表单后，我们将邮件发送含出口价格档的目录。",
  ctaLabel: "索取目录",
  ctaPath: "/contact",
};

export const common = {
  contact: "联系",
  contactUs: "联系我们",
  quickContact: "快速联系",
  pages: "页面",
  resources: "资源",
  distributorApplication: "分销商申请",
  viewMarketCoverage: "查看完整市场覆盖",
  exploreMarketCoverage: "探索市场覆盖",
  exportStandards: "出口标准",
  bestFor: "适合",
  applyFreeShuttleTesting: "申请免费试打",
  startOemDiscussion: "开始 OEM 洽谈",
  oemBrandSolutions: "OEM 品牌方案",
  oemBrandSolutionsDesc: "面向东盟分销商、学院及零售品牌的四种合作模式。",
  oemScope: "OEM 范围",
  oemWorkflow: "OEM 流程",
  moqGuidance: "起订量参考",
  whoShouldApply: "适合申请者",
  programBenefits: "计划权益",
  howToJoin: "加入流程",
  eligibleApplicants: "申请资格",
  whatYouReceive: "您将获得",
  applicationProcess: "申请流程",
  applyForMarket: "申请您的市场",
  discussOemPartnership: "洽谈 OEM 合作",
  factoryCapabilities: "工厂能力（INFIV OEM 伙伴）",
  activeManufacturingPartners: "活跃制造伙伴",
  marketEntryServices: "市场进入服务",
  opportunityLabel: "市场机会",
  recommendedSkus: "推荐 SKU",
  productLines: "产品线",
  languageSwitcher: "语言",
  facebookPlaceholder: "https://facebook.com/...",
  selectType: "选择类型",
  selectCountry: "选择国家",
  toggleMenu: "切换菜单",
  mainNav: "主导航",
  mobileNav: "移动端导航",
  chatWhatsapp: "WhatsApp 聊天",
  contactWhatsapp: "通过 WhatsApp 联系",
  contactFacebook: "通过 Facebook 联系",
  contactLine: "通过 LINE 联系",
  contactEmail: "通过邮件联系",
  whatsapp: "WhatsApp",
  facebook: "Facebook",
  line: "LINE",
  email: "邮件",
  mediaComingSoon: "媒体即将上线",
  requestMediaAccess: "申请媒体访问",
  heritage: "行业积淀",
  featherVolume: "羽毛处理量",
  capacity: "产能",
  factory: "工厂",
  qc: "品控",
  patents: "专利",
  copyrightMarkets: "市场",
  formSuccessContact:
    "感谢提交！您的意向已记录并纳入 VANTAGE 线索系统。团队将在 2 个工作日内跟进 — 也可通过 WhatsApp 加快回复。",
  formSuccessDistributor:
    "感谢提交！您的分销商申请已记录并纳入跟踪系统。VANTAGE SPORTS 将在 2 个工作日内回复。可通过 WhatsApp 加快跟进。",
  formSuccessTesting:
    "感谢提交！您的试打申请已记录并纳入跟踪系统。VANTAGE SPORTS 将在 3 个工作日内审核。可通过 WhatsApp 加快跟进。",
  whatsappPrefill: "您好 VANTAGE SPORTS，我对合作感兴趣。",
  emailSubject: "VANTAGE SPORTS 合作咨询",
  countries: ["泰国", "马来西亚", "菲律宾", "越南"],
  otherAsean: "其他东盟国家",
  applyFreeShuttleTestingTitle: "申请免费羽毛球试打",
  distributorBrandsPlaceholder: "例如：Yonex、Victor、本地品牌",
  courtsPlaceholder: "例如：4 片球场、2 家门店",
  testingMessagePlaceholder: "请说明试打需求、现有羽毛球品牌、月用量等...",
  seoKeywords: {
    home: "VANTAGE SPORTS, G4 G6 G7 羽毛球, 东南亚羽毛球分销",
    products: "VANTAGE SPORTS, G4 G6 G7 羽毛球, 赛事级, 俱乐部训练, 经济训练, 东南亚羽毛球",
    oem: "VANTAGE SPORTS OEM, 贴牌羽毛球, 定制包装, 中国制造商",
    distributor: "VANTAGE SPORTS 分销商, 工厂直供羽毛球, 泰国 马来西亚 菲律宾 越南",
    testing: "VANTAGE SPORTS 俱乐部试打, 免费羽毛球样品, G4 G6 G7 试打申请",
    aboutFactory: "VANTAGE SPORTS 工厂, INFIV OEM 伙伴, 羽毛球制造 中国",
    contact: "联系 VANTAGE SPORTS, 东南亚羽毛球合作, WhatsApp 分销商",
    marketCoverage: "VANTAGE SPORTS 泰国 马来西亚 菲律宾 越南, 东南亚羽毛球市场开发",
    factoryPartners: "VANTAGE SPORTS 工厂伙伴, INFIV OEM, 羽毛球制造 中国",
    mediaLibrary: "VANTAGE SPORTS 媒体, 羽毛球工厂照片, 产品图片, 羽毛球视频",
    distributorResources: "VANTAGE SPORTS 分销商资源, 产品目录, 东南亚羽毛球 B2B 素材",
    distributorCrm: "VANTAGE SPORTS 分销商 CRM, 线索跟踪, 东盟伙伴招募",
    clubTestingDatabase: "VANTAGE SPORTS 俱乐部试打数据库, 羽毛球样品申请 东盟",
    productComparison: "G4 G6 G7 羽毛球对比, 赛事 俱乐部 经济训练 VANTAGE SPORTS",
    downloadCenter: "VANTAGE SPORTS 下载中心, 产品目录 数据单 分销商素材",
  },
  leadsTable: {
    date: "日期",
    type: "类型",
    country: "国家",
    contact: "联系人",
    status: "状态",
    source: "来源",
    noData: "暂无记录。提交表单后可在此查看。",
    exportJson: "导出 JSON",
    refresh: "刷新",
    total: "线索总数",
    newLeads: "新线索",
    viewCrm: "查看 CRM",
    viewDatabase: "查看数据库",
    localStorageNote: "线索暂存于本浏览器，待后端 CRM 对接后可同步。可导出 JSON 手动导入。",
  },
  leadTypes: { contact: "联系", distributor: "分销商", testing: "俱乐部试打" },
  leadStatuses: { new: "新", reviewing: "审核中", qualified: "合格", closed: "已关闭" },
};

export const marketCoverage = {
  seo: {
    title: "市场覆盖 | VANTAGE SPORTS 东南亚",
    description:
      "VANTAGE SPORTS 在泰国、马来西亚、菲律宾和越南的市场开发 — 分销商招募、俱乐部计划及羽毛球分销。",
  },
  title: "市场覆盖",
  subtitle: "VANTAGE SPORTS 在四个优先东盟市场建设羽毛球分销渠道。",
  intro:
    "我们专注批发、俱乐部及零售渠道开发，而非直接面向消费者零售。每个市场均有专属上市方案、样品计划及到岸成本规划。",
  services: [
    "分销商筛选与区域匹配",
    "俱乐部试打计划协调",
    "按气候推荐球速",
    "出口单证及货运支持",
    "OEM 及贴牌上市协助",
  ],
  regions: [
    {
      country: "泰国",
      code: "TH",
      status: "积极开发",
      highlight: "俱乐部文化浓厚，曼谷批发枢纽发达，省级学院快速扩张。",
      opportunity: "俱乐部密度高、赛事供应需求大、专业店网络增长。",
      channels: ["批发商", "专业店", "俱乐部连锁", "赛事供应"],
      products: ["G6 俱乐部训练", "G4 赛事级", "G7 经济训练"],
    },
    {
      country: "马来西亚",
      code: "MY",
      status: "积极开发",
      highlight: "成熟羽毛球市场，零售、校园项目及州级分销商体系完善。",
      opportunity: "稳定复购、学院连锁、专业零售扩张。",
      channels: ["专业零售", "州级分销", "学院网络", "校园项目"],
      products: ["G4 赛事级", "G6 俱乐部训练", "OEM 贴牌"],
    },
    {
      country: "菲律宾",
      code: "PH",
      status: "增长市场",
      highlight: "参与度上升，马尼拉与宿务为主要分销走廊。",
      opportunity: "价格敏感训练段、校园项目、零售品类建设。",
      channels: ["体育零售", "俱乐部供应", "学校", "区域代理"],
      products: ["G7 经济训练", "G6 俱乐部训练", "入门组合装"],
    },
    {
      country: "越南",
      code: "VN",
      status: "增长市场",
      highlight: "胡志明市与河内球员基数快速增长，OEM 需求涌现。",
      opportunity: "批发开发、俱乐部客户、贴牌品牌上市。",
      channels: ["批发商", "俱乐部客户", "OEM 品牌", "体育连锁"],
      products: ["G6 俱乐部训练", "G7 经济训练", "OEM 羽毛球系列"],
    },
  ],
};

export const factoryPartners = {
  seo: {
    title: "工厂伙伴 | VANTAGE SPORTS 制造网络",
    description:
      "VANTAGE SPORTS 制造伙伴包括 INFIV（OEM 伙伴）及未来 OEM 伙伴 — 认证中国羽毛球工厂，出口级品控。",
  },
  title: "工厂伙伴",
  subtitle: "VANTAGE SPORTS 通过认证制造伙伴网络进行采购与管理。",
  intro:
    "我们不拥有工厂。与精选中国制造商合作进行羽毛球生产、装备采购及 OEM 项目 — 让东盟分销商与品牌专注市场开发。",
  activeTitle: "活跃制造伙伴",
  futureTitle: "未来 OEM 伙伴",
  futureNote:
    "VANTAGE SPORTS 正在引入更多制造伙伴，覆盖球拍、服装及专业 OEM 线。欢迎洽谈早期合作。",
  recruitmentTitle: "与 VANTAGE SPORTS 合作",
  recruitmentDesc:
    "我们招募东盟分销商、俱乐部与体育店 — 不面向终端消费者。工厂伙伴负责生产；VANTAGE SPORTS 负责市场开发、线索跟踪与渠道上市。",
  recruitmentCtas: [
    { label: "申请成为分销商", path: "/distributor-program#apply" },
    { label: "预约工厂参观", path: "/contact" },
    { label: "下载伙伴资料包", path: "/download-center" },
  ],
  partners: [
    {
      name: "INFIV",
      role: "OEM 伙伴 / 制造伙伴",
      status: "活跃",
      desc: "精彩永恒 — 山东精彩体育用品有限公司。羽毛球研发、智能制造、20 万平方米工厂产能。",
      products: ["G4 赛事级", "G6 俱乐部训练", "G7 经济训练", "球拍", "服装", "球包与握把"],
      highlights: [
        "20 年以上行业积淀",
        "年处理 20 亿片羽毛",
        "49 道品控 · 0.1% 缺陷容差",
        "36 项工艺专利",
      ],
    },
    {
      name: "未来 OEM 伙伴",
      role: "制造伙伴（对接中）",
      status: "即将上线",
      desc: "额外认证工厂，覆盖碳素球拍 OEM、服装生产及专业配件线。",
      products: ["球拍 OEM", "队服", "定制配件"],
      highlights: ["资质审核进行中", "要求出口级品控", "东盟包装本地化", "联系 VANTAGE SPORTS 获取早期名额"],
    },
    {
      name: "未来 OEM 伙伴",
      role: "制造伙伴（规划中）",
      status: "计划中",
      desc: "第二条羽毛球产线，为高销量东盟分销商扩展产能与球速选择。",
      products: ["羽毛球", "尼龙训练球"],
      highlights: ["产能扩张规划中", "多工厂冗余保障供应", "欢迎分销商咨询"],
    },
  ],
};

export const mediaLibrary = {
  seo: {
    title: "媒体库 | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS 制造伙伴的工厂照片、产品图片及视频。面向分销商与营销的媒体素材。",
  },
  title: "媒体库",
  subtitle: "工厂影像、产品照片及视频 — 面向分销商、俱乐部及营销团队。",
  intro: "素材持续更新中。分销商及认证伙伴可通过资源中心索取高清文件。",
  categories: [
    { id: "factory", title: "工厂与生产", desc: "产线、品控流程、羽毛加工", count: "即将上线" },
    { id: "products", title: "产品摄影", desc: "G4、G6、G7 羽毛球、球拍、装备", count: "即将上线" },
    { id: "events", title: "活动与试打", desc: "俱乐部试打、赛事、伙伴上市", count: "即将上线" },
    { id: "videos", title: "视频库", desc: "工厂参观、产品演示、飞行测试", count: "即将上线" },
  ],
  placeholderNote: "上传素材至 public/media/ 或 brand-assets/ 以填充媒体库。",
};

export const distributorResources = {
  seo: {
    title: "分销商资源中心 | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS 分销商资源 — 产品单页、目录下载、申请表及面向东盟伙伴的营销素材。",
  },
  title: "分销商资源中心",
  subtitle: "面向 VANTAGE SPORTS 分销伙伴的工具、表单与素材。",
  intro: "获取申请入口、索取目录及下载营销材料。认证分销商可获得扩展素材包。",
  resources: [
    {
      title: "分销商申请",
      desc: "申请在您所在区域进行工厂直供羽毛球分销。",
      cta: "立即申请",
      path: "/distributor-program#apply",
      type: "表单",
    },
    {
      title: "免费羽毛球试打",
      desc: "申请 G4、G6、G7 样品筒进行评估。",
      cta: "申请试打",
      path: "/shuttle-testing#apply",
      type: "表单",
    },
    {
      title: "产品目录",
      desc: "含出口价格档的完整羽毛球与装备目录。",
      cta: "索取目录",
      path: "/contact",
      type: "下载",
    },
    {
      title: "产品数据单",
      desc: "G4、G6、G7 规格、飞行指南及等级定位。",
      cta: "查看产品",
      path: "/products",
      type: "参考",
    },
    {
      title: "媒体库",
      desc: "工厂照片、产品图片及视频素材。",
      cta: "浏览媒体",
      path: "/media-library",
      type: "素材",
    },
    {
      title: "品牌素材",
      desc: "VANTAGE SPORTS 标识、色彩及伙伴联合品牌规范。",
      cta: "联系获取素材",
      path: "/contact",
      type: "品牌",
    },
  ],
};

export const marketsSection = {
  title: "东南亚市场开发",
  subtitle: "VANTAGE SPORTS 在泰国、马来西亚、菲律宾和越南建设分销渠道。",
  regions: [
    {
      country: "泰国",
      code: "TH",
      highlight: "俱乐部文化浓厚，曼谷批发枢纽，省级学院增长。",
      channels: ["批发商", "专业店", "俱乐部连锁"],
    },
    {
      country: "马来西亚",
      code: "MY",
      highlight: "成熟羽毛球市场，零售与校园项目完善。",
      channels: ["专业零售", "州级分销", "学院"],
    },
    {
      country: "菲律宾",
      code: "PH",
      highlight: "参与度上升 — 马尼拉与宿务分销走廊。",
      channels: ["体育零售", "俱乐部供应", "学校"],
    },
    {
      country: "越南",
      code: "VN",
      highlight: "胡志明市与河内球员基数快速增长。",
      channels: ["批发商", "俱乐部客户", "OEM 品牌"],
    },
  ],
};

export const aboutFactory = {
  seo: {
    title: "工厂介绍 | VANTAGE SPORTS 制造伙伴",
    description:
      "VANTAGE SPORTS 与精选中国制造伙伴合作，包括 INFIV — 20 年积淀、年处理 20 亿片羽毛、49 道品控、36 项专利。",
  },
  title: "工厂介绍",
  subtitle: "VANTAGE SPORTS 背后的制造伙伴 — 规模、科技与出口规范。",
  intro:
    "VANTAGE SPORTS 通过精选中国制造商进行采购与管理。主要 OEM 伙伴 INFIV（精彩永恒），由山东精彩体育用品有限公司生产，拥有 20 年以上羽毛球行业积淀及智能羽毛球制造能力。",
  partnersTitle: "制造伙伴",
  stats: [
    { label: "行业积淀", value: enFactoryCapabilities.heritage },
    { label: "羽毛处理", value: enFactoryCapabilities.annualFeatherVolume },
    { label: "羽毛球产能", value: enFactoryCapabilities.shuttleCapacity },
    { label: "工厂规模", value: enFactoryCapabilities.factorySize },
    {
      label: "品控体系",
      value: `${enFactoryCapabilities.qcNodes} · ${enFactoryCapabilities.defectRate} 容差`,
    },
    { label: "专利", value: `${enFactoryCapabilities.patents} 项独家工艺专利` },
  ],
  technology: [
    "批次放行前进行 10,000 次击打耐久模拟",
    "4K 显微筛查及 LAB 色差一致性控制",
    "抗弯强度 ≥1200 MPa（超欧盟基准）",
    "分子级逆向水洗 — 耐用性 +40%，72 小时白度稳定",
    "AI 色差分级 + 显微 + 人工复核，覆盖 16 项羽毛指标",
  ],
  globalTitle: "全球出口足迹",
  globalText:
    "制造伙伴供应日本、韩国、马来西亚、泰国、越南、文莱、印度及英国等市场。VANTAGE SPORTS 专注东南亚市场开发 — 分销商招募、俱乐部试打及 OEM 项目。",
  chain: [
    "VANTAGE SPORTS：东盟市场开发、分销商招募及 OEM 项目管理",
    "制造伙伴：羽毛采购、羽毛球生产及专利研发",
    "渠道伙伴：分销商、俱乐部、体育店及 OEM 品牌负责本地销售",
  ],
  excludedNote:
    "VANTAGE SPORTS 不运营中国国内加盟或零售定价。东盟伙伴仅通过出口分销及 OEM 渠道合作。",
  technologyTitle: "技术与品控",
  valueChainTitle: "价值链",
};

export const contact = {
  seo: {
    title: "联系 | VANTAGE SPORTS",
    description:
      "联系 VANTAGE SPORTS 进行分销商、俱乐部、体育店及 OEM 咨询。WhatsApp、Facebook、LINE、邮件或意向表单。",
  },
  title: "联系",
  subtitle: "通过 WhatsApp、Facebook、LINE、邮件或下方意向表联系 VANTAGE SPORTS 合作团队。",
  formTitle: "VANTAGE SPORTS 意向表",
  formNote: "提交内容将记录至 VANTAGE 线索系统。合作团队将在 2 个工作日内回复。",
  fields: {
    company: "公司 / 机构",
    name: "联系人",
    email: "邮箱",
    phone: "电话 / WhatsApp",
    country: "国家 / 市场",
    interest: "意向",
    message: "留言",
    submit: "提交意向表",
  },
  interests: [
    "分销商计划",
    "俱乐部供应",
    "体育店合作",
    "OEM 制造",
    "免费羽毛球试打",
    "产品目录",
    "其他",
  ],
};

export const distributorCrm = {
  seo: {
    title: "分销商 CRM | VANTAGE SPORTS 伙伴招募",
    description:
      "VANTAGE SPORTS 分销商 CRM — 统一跟踪合作线索、分销商申请及东盟招募管道。",
  },
  title: "分销商 CRM",
  subtitle: "跟踪泰国、马来西亚、菲律宾和越南的分销商及合作线索。",
  intro:
    "VANTAGE SPORTS 招募平台捕获每一条分销商咨询、申请与联系线索。在后端 CRM 对接前，使用本面板审阅管道状态。",
  features: [
    { title: "线索采集", desc: "分销商、联系及试打表单统一写入线索库。" },
    { title: "管道状态", desc: "新线索 → 审核中 → 合格 → 已关闭 招募跟进流程。" },
    { title: "可导出", desc: "导出 JSON，可导入 HubSpot、Salesforce 或自建 CRM。" },
    { title: "语言追踪", desc: "每条线索记录 EN 或 ZH 语言及来源页面，便于市场归因。" },
  ],
  pipelineTitle: "招募管道",
  pipelineSteps: ["收到新咨询", "区域与用量审核", "样品寄送与报价", "签署合作协议"],
};

export const clubTestingDatabase = {
  seo: {
    title: "俱乐部试打数据库 | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS 俱乐部试打数据库 — 查看来自东盟俱乐部、学院及体育店的羽毛球试打申请。",
  },
  title: "俱乐部试打数据库",
  subtitle: "免费 G4、G6、G7 羽毛球试打申请统一登记库。",
  intro: "网站上提交的每一条试打申请均在此索引。批准样品寄送前，可审阅机构类型、市场及产品意向。",
  columns: {
    organization: "机构",
    type: "类型",
    country: "国家",
    products: "产品",
    members: "规模",
    submitted: "提交时间",
  },
  statsLabels: {
    total: "申请总数",
    clubs: "俱乐部与学院",
    shops: "体育用品店",
    distributors: "分销商",
  },
};

export const productComparison = {
  seo: {
    title: "G4 G6 G7 产品对比 | VANTAGE SPORTS",
    description:
      "对比 G4 赛事级、G6 俱乐部训练、G7 经济训练羽毛球 — 规格、定位及面向东盟分销商的推荐渠道。",
  },
  title: "产品对比",
  subtitle: "G 系列羽毛球并排对比，助力分销商铺货与俱乐部采购决策。",
  intro:
    "使用本矩阵在赛事、俱乐部训练及经济段定位 G4、G6、G7。所有 SKU 由 INFIV（OEM 伙伴）制造，由 VANTAGE SPORTS 分销。",
  tableHeaders: {
    attribute: "属性",
    g4: "G4 — 赛事级",
    g6: "G6 — 俱乐部训练",
    g7: "G7 — 经济训练",
  },
  rows: [
    { label: "等级", g4: "赛事级", g6: "俱乐部训练", g7: "经济训练" },
    { label: "羽毛", g4: "专利鹅毛 · 全圆", g6: "鹅背毛 · 0.15mm", g7: "金丝鸭毛 · 全圆" },
    { label: "主渠道", g4: "赛事 · 高端门店", g6: "俱乐部 · 学院", g7: "门店 · 学校 · 新区域" },
    { label: "耐用性", g4: "竞技飞行优先", g6: "极高训练耐用", g7: "每筒高性价比" },
    { label: "起订特征", g4: "中高端订单", g6: "俱乐部大货供应", g7: "入门友好起订" },
    { label: "东盟适配", g4: "潮湿市场 · 77–79 速", g6: "日常学院训练", g7: "价格敏感增长市场" },
  ],
  ctaTitle: "准备订购样品？",
  ctaDesc: "申请免费试打或提交分销商申请。",
};

export const downloadCenter = {
  seo: {
    title: "下载中心 | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS 下载中心 — 产品目录、G 系列数据单、分销商申请表及伙伴营销素材。",
  },
  title: "下载中心",
  subtitle: "面向分销商、俱乐部及体育店的目录、数据单与伙伴素材。",
  intro:
    "索取或下载 VANTAGE SPORTS 伙伴资料。PDF 目录可按需提供 — 提交联系表单后，我们将邮件发送含出口价格档的目录。",
  categories: [
    {
      title: "产品目录",
      desc: "含出口价格档的完整 G4 / G6 / G7 羽毛球与装备目录。",
      type: "目录",
      cta: "索取目录",
      path: "/contact",
    },
    {
      title: "G 系列数据单",
      desc: "各 SKU 规格、飞行指南及等级定位。",
      type: "数据单",
      cta: "查看对比",
      path: "/product-comparison",
    },
    {
      title: "分销商申请包",
      desc: "申请表、计划概览及市场覆盖摘要。",
      type: "表单",
      cta: "立即申请",
      path: "/distributor-program#apply",
    },
    {
      title: "俱乐部试打申请",
      desc: "免费 G4、G6、G7 样品筒申请表及评估清单。",
      type: "表单",
      cta: "申请试打",
      path: "/shuttle-testing#apply",
    },
    {
      title: "工厂伙伴概览",
      desc: "制造伙伴网络、INFIV OEM 能力及品控标准。",
      type: "参考",
      cta: "查看伙伴",
      path: "/factory-partners",
    },
    {
      title: "媒体与品牌素材",
      desc: "工厂照片、产品图片及 VANTAGE SPORTS 品牌规范。",
      type: "素材",
      cta: "浏览媒体",
      path: "/media-library",
    },
  ],
  exportNote: "需要批量素材访问？请携带分销商简介联系 contact@vantagesports.com。",
};

// Re-export type for product catalog typing
export type { ShuttleProduct };
