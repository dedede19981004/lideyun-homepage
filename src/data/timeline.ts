// ============================================================
// 时间线 —— 公司信息已匿名化处理
// ============================================================
export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  desc?: string;
  tags?: string[];
  type: 'work' | 'education';
}

export const timeline: TimelineEntry[] = [
  {
    period: '2025.08 — 至今',
    title: '算法评测工程师',
    org: '某智能驾驶科技公司 · 上海',
    type: 'work',
    desc:
      '独立主导视觉语言大模型评测工作：0-1 构建高自动化效果评测工程，覆盖评测方案调研、评测集设计、可视化工具开发与指标构建；基于 OpenCompass 完成多模态大模型验收评测；基于 Jira 工单数据构建自动化 badcase 挖掘能力。',
    tags: ['VLM 评测', 'OpenCompass', 'Badcase 挖掘'],
  },
  {
    period: '2023.06 — 2025.08',
    title: '测试开发工程师',
    org: '某头部新能源车企 · 上海',
    type: 'work',
    desc:
      '负责智能驾驶 AI 评测与运营：主导静态感知模型评测工程与 E2E/VLA 行车泊车仿真测试体系建设；负责 VLM 模型评测与动态感知业务评测；数据闭环自动化交付——月度交付 10w 条、有效率提升 40%。',
    tags: ['BEV 评测', 'E2E/VLA 仿真', '数据闭环'],
  },
  {
    period: '2020.09 — 2023.06',
    title: '计算机技术 · 硕士',
    org: '上海理工大学 · 光电信息与计算机工程学院',
    type: 'education',
    desc:
      'NLP 方向。SCI 期刊论文《An improved model combining knowledge graph and GCN for PLM knowledge recommendation》见刊；参与国家自然科学基金项目；担任学生党支部书记。',
    tags: ['NLP', 'SCI 论文', '国家自然科学基金'],
  },
  {
    period: '2016.09 — 2020.07',
    title: '计算机科学与技术 · 本科',
    org: '铜陵学院 · 数学与计算机学院',
    type: 'education',
    desc: '在校期间多次综合成绩排名第一，获特等一等奖学金、三好学生等荣誉。',
    tags: ['综合成绩第一', '特等一等奖学金'],
  },
];
