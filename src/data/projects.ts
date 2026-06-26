import { Project } from '../types';

const asset = (path: string) => `/${path}`;

export const projects: Project[] = [
  {
    id: 'posha',
    title: '《破煞吧，大师！》',
    category: 'Game',
    description: '风水 x 解谜 x 华容道的章节式空间推理游戏，玩家通过搜证、连接知识卡、调整家具布局完成关卡。',
    imageUrl: asset('assets/posha/game-intro-01.jpg'),
    tags: ['Game Design', 'Puzzle Design', '2D/3D Art', 'Narrative'],
    link: '/project/posha',
    role: '主策 / 美术 / 文案',
    period: '2026.03 - 2026.05',
    award: '鹰角网络开拓芯入围最佳创意类作品',
    overview: [
      '核心玩法 Demo 在一个月内完成，以风水、解谜、华容道为特色，核心循环包含搜证、线索连线、华道空间推理与真相填词。',
      '设计“阴阳眼”双视角机制与章节式委托剧情，玩家通过探索线索、连接知识卡、调整家具布局完成关卡。',
      '规划 6 个章节、20+ 个空间问题与对应解谜规则，完成游戏世界观、角色设定、任务文本与关卡策划。',
      '负责全部 2D 美术、3D 美术建模及画面整体把控，让玩法说明、空间场景和视觉氛围保持统一。'
    ],
    details: [
      { label: '作品定位', value: '风水华容道解谜游戏 Demo' },
      { label: '核心机制', value: '阴阳眼双视角、知识卡连线、家具布局推理、真相填词' },
      { label: '内容规模', value: '6 个章节规划，20+ 空间谜题与对应规则' },
      { label: '个人职责', value: '主策、美术、文案、2D/3D 资产与画面把控' },
    ],
    externalLinks: [
      {
        label: '实况视频',
        url: 'https://www.xiaohongshu.com/discovery/item/69ff5149000000003503800e?source=webshare&xhsshare=pc_web&xsec_token=AB4kO-3fPy3DnJtn1jFliZdC0StIaPzN2DkAgtGwbmToA=&xsec_source=pc_share',
      },
      {
        label: '宣传 PV',
        url: 'https://www.xiaohongshu.com/discovery/item/69ffbd9b000000003601feae?source=webshare&xhsshare=pc_web&xsec_token=AB5qbwdzuYnPuJoOhjj10kMTd41xKB_7TSzyaIpdbV1k4=&xsec_source=pc_share',
      },
    ],
    process: [
      { title: '规则搭建', body: '把风水概念拆成可操作的家具位置、空间关系和知识卡连接条件。' },
      { title: '关卡推进', body: '用章节委托串联搜证、推理、布局调整和真相填词，降低理解成本。' },
      { title: '视觉统一', body: '统一 2D 插画、3D 场景与 UI 氛围，让“破煞”主题在画面上持续成立。' },
    ],
    gallery: [
      ...Array.from({ length: 5 }, (_, index) => asset(`assets/posha/screenshot-${String(index + 1).padStart(2, '0')}.jpg`)),
      ...Array.from({ length: 10 }, (_, index) => asset(`assets/posha/game-intro-${String(index + 1).padStart(2, '0')}.jpg`)),
    ],
  },
  {
    id: '1',
    title: '智能家居交互系统',
    category: 'Interaction',
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
    category: 'Brand',
    description: '为某初创科技公司设计的整套视觉识别系统，包含Logo、配色及周边。',
    imageUrl: 'https://picsum.photos/seed/design1/800/600',
    tags: ['Branding', 'Graphic Design', 'Illustrator'],
    link: '/project/3',
  },
  {
    id: '4',
    title: '医疗健康监测平台',
    category: 'Interaction',
    description: '针对老年人群体设计的健康监测后台，强调易用性与信息层级。',
    imageUrl: 'https://picsum.photos/seed/uiux2/800/600',
    tags: ['Web Design', 'Accessibility', 'Prototyping'],
    link: '/project/4',
  },
  {
    id: '5',
    title: '《迷失森林》动作RPG',
    category: 'DigitalMedia',
    description: '一款2D横版动作游戏的战斗系统设计，包含连招逻辑与打击感优化。',
    imageUrl: 'https://picsum.photos/seed/game2/800/600',
    tags: ['Game Design', 'Animation', 'Spine'],
    link: '/project/5',
  },
];
