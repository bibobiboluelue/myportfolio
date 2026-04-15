import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: '智能家居交互系统',
    category: 'UIUX',
    description: '基于用户行为分析的智能家居控制中心，优化了多设备联动的交互逻辑。',
    imageUrl: 'https://picsum.photos/seed/uiux1/800/600',
    tags: ['Mobile App', 'Interaction Design', 'Figma'],
    link: '/project/1',
  },
  {
    id: '2',
    title: '《星际拓荒》关卡设计',
    category: 'Game',
    description: '一款探索类游戏的关卡原型，专注于非线性叙事与环境引导。',
    imageUrl: 'https://picsum.photos/seed/game1/800/600',
    tags: ['Unity', 'Level Design', 'C#'],
    link: '/project/2',
  },
  {
    id: '3',
    title: '品牌视觉重构计划',
    category: 'Other',
    description: '为某初创科技公司设计的整套视觉识别系统，包含Logo、配色及周边。',
    imageUrl: 'https://picsum.photos/seed/design1/800/600',
    tags: ['Branding', 'Graphic Design', 'Illustrator'],
    link: '/project/3',
  },
  {
    id: '4',
    title: '医疗健康监测平台',
    category: 'UIUX',
    description: '针对老年人群体设计的健康监测后台，强调易用性与信息层级。',
    imageUrl: 'https://picsum.photos/seed/uiux2/800/600',
    tags: ['Web Design', 'Accessibility', 'Prototyping'],
    link: '/project/4',
  },
  {
    id: '5',
    title: '《迷失森林》动作RPG',
    category: 'Game',
    description: '一款2D横版动作游戏的战斗系统设计，包含连招逻辑与打击感优化。',
    imageUrl: 'https://picsum.photos/seed/game2/800/600',
    tags: ['Game Design', 'Animation', 'Spine'],
    link: '/project/5',
  },
];
