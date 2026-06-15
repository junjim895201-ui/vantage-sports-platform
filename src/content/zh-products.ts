import type { ShuttleProduct } from "./products";

export const manufacturingPartners = [
  {
    name: "INFIV",
    role: "OEM 伙伴 / 制造伙伴",
    desc: "精彩永恒 — 羽毛球研发、智能制造、20 万平方米工厂、36 项工艺专利。",
  },
];

export const shuttleProducts: ShuttleProduct[] = [
  {
    sku: "G4",
    name: "G4 羽毛球",
    gradeLabel: "赛事级",
    series: "合作产品系列 · 鹅毛",
    manufacturingPartner: "INFIV（OEM 伙伴）",
    featherType: "全圆鹅毛（专利处理）",
    grade: "tournament",
    positioning: "竞技级飞行与顶级操控，适合比赛及高端俱乐部活动。",
    highlights: [
      "专利羽毛处理",
      "精选全圆鹅毛",
      "竞技级飞行轨迹",
      "出色的飞行一致性",
    ],
    specs: {
      工艺: "免熏蒸认证出口流程",
      羽毛: "专利处理全圆鹅毛",
      飞行: "竞技级轨迹与操控",
      品控: "49 道生产控制 · 0.1% 缺陷容差",
      伙伴: "由 INFIV（OEM 伙伴）制造",
    },
    sellingPoints: [
      "为比赛压力下需要可预测飞行的球员设计",
      "专利鹅毛带来均匀球速与稳定性",
      "适合举办联赛或赛事的学院升级用球",
      "由 VANTAGE SPORTS 分销，配备出口级东盟包装",
    ],
    recommendedFor: ["分销商", "赛事主办方", "高端体育店"],
    aseanNotes:
      "最适合潮湿市场（泰、马、菲、越）。请根据场馆海拔及空调条件选择 77–79 速球。",
  },
  {
    sku: "G6",
    name: "G6 羽毛球",
    gradeLabel: "俱乐部训练",
    series: "合作产品系列 · 鹅毛",
    manufacturingPartner: "INFIV（OEM 伙伴）",
    featherType: "鹅背毛 · 0.15mm 厚度",
    grade: "club",
    positioning: "高韧性鹅毛羽毛球，适合需要稳定飞行与极高耐用性的俱乐部与学院。",
    highlights: [
      "0.15mm 鹅背毛",
      "严格筛选 + 专利处理",
      "出色的韧性与弹性",
      "稳定飞行 · 极高耐用",
    ],
    specs: {
      工艺: "免熏蒸认证出口流程",
      羽毛: "鹅背毛，0.15mm 厚度",
      处理: "专利工艺提升韧性与弹性",
      飞行: "多小时训练稳定轨迹",
      伙伴: "由 INFIV（OEM 伙伴）制造",
    },
    sellingPoints: [
      "平衡飞行品质与更长筒寿命 — 降低俱乐部每场成本",
      "0.15mm 背毛专为日常学院训练韧性筛选",
      "20 人以上活跃俱乐部复购潜力强",
      "可通过 VANTAGE SPORTS 俱乐部试打计划获取",
    ],
    recommendedFor: ["羽毛球俱乐部", "学院连锁", "有俱乐部客户的体育店"],
    aseanNotes: "俱乐部合作主力销量 SKU。可通过俱乐部试打计划申请免费样品筒。",
  },
  {
    sku: "G7",
    name: "G7 羽毛球",
    gradeLabel: "经济训练",
    series: "合作产品系列 · 鸭毛",
    manufacturingPartner: "INFIV（OEM 伙伴）",
    featherType: "金丝鸭 · 全圆羽毛",
    grade: "economy",
    positioning: "高性价比训练球，手感出色、飞行精准、耐用性强，起订友好。",
    highlights: [
      "金丝鸭全圆羽毛",
      "一流手感与飞行",
      "高耐用性",
      "专业训练极高性价比",
    ],
    specs: {
      工艺: "免熏蒸认证出口流程",
      羽毛: "金丝鸭，全圆结构",
      飞行: "精准轨迹与落点",
      手感: "流畅击球反馈，适合多球训练",
      伙伴: "由 INFIV（OEM 伙伴）制造",
    },
    sellingPoints: [
      "体育店拓展羽毛球品类的入门友好 SKU",
      "精准飞行与落点 — 适合多球场训练中心",
      "高耐用性降低高用量项目耗球",
      "在价格敏感市场为分销商带来可观毛利空间",
    ],
    recommendedFor: ["体育用品店", "校园项目", "开拓新区域的分销商"],
    aseanNotes:
      "门店陈列及校园/俱乐部试用装主力 SKU。可与球拍 + 握把胶组合入门套装。",
  },
];

export const accessoryLines = [
  {
    category: "球拍",
    partner: "INFIV（OEM 伙伴）",
    items: [
      "7500 系列（24T 一体 · 3U）",
      "7100 系列（24T 一体 · 4U）",
      "Space Hunter（30T 杆头 · 4U）",
      "A6 / A4 系列（30T 两段 · 4U/5U）",
      "85 / 66 / 67 系列",
    ],
  },
  {
    category: "服装",
    partner: "精选制造商",
    items: ["比赛球衣", "Polo 衫", "裙装与短裤", "队服"],
  },
  {
    category: "球包与配件",
    partner: "精选制造商",
    items: ["背包与赛包", "握把胶（零售及大货）", "袜子（半毛圈/全毛圈）"],
  },
];

export const factoryCapabilities = {
  heritage: "20 年以上羽毛球行业经验（INFIV 传承威海精彩体育积淀）",
  legalEntity: "山东精彩体育用品有限公司 — INFIV / 精彩永恒（OEM 伙伴）",
  annualFeatherVolume: "年处理 20 亿片羽毛",
  shuttleCapacity: "年储备 1000 万打 · 满产可达每月 120–150 万打",
  factorySize: "20 万平方米智能羽毛球工厂",
  qcNodes: "49 道生产控制节点",
  defectRate: "0.1% 羽毛缺陷容差",
  patents: "36 项独家工艺专利",
  rnd: "24 人材料研发实验室，博士领衔",
  globalMarkets: ["日本", "韩国", "马来西亚", "泰国", "越南", "文莱", "印度", "英国"],
};
