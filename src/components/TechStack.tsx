const skillsets = [
  ['策划', '系统设计', '关卡节奏', '解谜规则', '任务文本'],
  ['美术', '2D 视觉', '3D 建模', '画面把控', '海报排版'],
  ['工具', 'Figma', 'Unity', 'Blender', 'React'],
  ['研究', '品类拆解', '体验复盘', '竞品分析', '玩家反馈'],
];

export default function TechStack() {
  return (
    <section id="skills" className="archive-shell about-archive">
      <div className="about-title">
        <h2>About</h2>
        <h2>me</h2>
      </div>

      <div className="about-grid">
        <div className="about-panel profile">
          <div className="panel-label">
            <span>Profile</span>
            <span>01</span>
          </div>
          <p className="profile-name">Jinqiaoqiao</p>
          <p className="profile-copy">
            我关注游戏策划、交互体验和视觉表达之间的关系。希望通过系统规则、空间谜题和有记忆点的画面，把创意做成可以被玩家实际体验的作品。
          </p>
          <a href="mailto:eventualli@163.com">eventualli@163.com</a>
        </div>

        <div className="about-panel skills">
          <div className="panel-label">
            <span>Skillsets</span>
            <span>02</span>
          </div>
          {skillsets.map((group) => (
            <div className="skill-row" key={group[0]}>
              <strong>{group[0]}</strong>
              <span>{group.slice(1).join(' / ')}</span>
            </div>
          ))}
        </div>

        <div id="contact" className="about-panel contact">
          <div className="panel-label">
            <span>Contact</span>
            <span>03</span>
          </div>
          <p>欢迎查看项目详情、PDF 图集和视频链接。</p>
          <div>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
