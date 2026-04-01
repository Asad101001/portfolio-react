import { useReveal } from '../../hooks/useReveal';

const techLanes = [
  {
    direction: 'fwd',
    speed: '18s',
    skills: [
      { name: 'Python', icon: 'py' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'Node.js', icon: 'node' },
      { name: 'React', icon: 'react' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'MongoDB', icon: 'mongo' },
      { name: 'SQL', icon: 'sql' },
      { name: 'Git', icon: 'git' }
    ]
  },
  {
    direction: 'rev',
    speed: '22s',
    skills: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Bash', icon: 'bash' },
      { name: 'PostgreSQL', icon: 'postgre' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'PyTorch', icon: 'torch' },
      { name: 'TensorFlow', icon: 'tf' },
      { name: 'Pandas', icon: 'pandas' }
    ]
  }
];

// Simple mapping for icons to SVGs or labels
const SkillIcon = ({ name }: { name: string }) => {
  // In a real app, these would be SVGs. For now, we'll use colored placeholders or simple icons.
  const clr = name === 'Python' ? '#3776ab' : 
              name === 'AWS' ? '#FF9900' :
              name === 'React' ? '#61dafb' :
              name === 'JavaScript' ? '#f7df1e' :
              name === 'TypeScript' ? '#3178c6' :
              name === 'Node.js' ? '#339933' :
              'var(--cyan)';
              
  return (
    <div 
      className="chip-svg rounded-full flex items-center justify-center font-bold text-[8px]" 
      style={{ color: clr, border: `1px solid ${clr}40`, background: `${clr}10` }}
    >
      {name[0]}
    </div>
  );
};

function MarqueeLane({ lane }: { lane: typeof techLanes[0] }) {
  const doubledSkills = [...lane.skills, ...lane.skills];
  
  return (
    <div className={`export-tech-marquee-lane ${lane.direction === 'rev' ? 'export-tech-marquee-lane--reverse' : ''}`} style={{ animationDuration: lane.speed }}>
      {doubledSkills.map((skill, i) => (
        <div key={i} className="skill-chip">
          <SkillIcon name={skill.name} />
          <span className="chip-label">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function TechStackSection() {
  useReveal();

  return (
    <section id="tech" className="section-in py-20 relative">
      <div className="section-header mb-12">
        <p className="label-xs text-xs font-mono uppercase tracking-[0.3em] text-customCyan mb-2">Capabilities</p>
        <h2 className="section-title text-4xl font-bold">Tech Stack</h2>
      </div>

      <div className="marquee-wrap glass-card reveal">
        <div className="marquee-fade-l"></div>
        <div className="marquee-fade-r"></div>
        
        <div className="marquee-rows">
          {techLanes.map((lane, i) => (
            <MarqueeLane key={i} lane={lane} />
          ))}
        </div>
        
        {/* Decorative particles */}
        <div className="marquee-particle" style={{ left: '20%', bottom: '10%' }}></div>
        <div className="marquee-particle" style={{ left: '50%', bottom: '30%' }}></div>
        <div className="marquee-particle" style={{ left: '80%', bottom: '20%' }}></div>
      </div>

      <div className="tech-footer mt-12 flex flex-wrap gap-x-8 gap-y-4 opacity-40 text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
         <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-customCyan"></span> Cloud Computing</span>
         <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-customCyan"></span> Data Engineering</span>
         <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-customCyan"></span> Fullstack Dev</span>
         <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-customCyan"></span> GenAI & RAG</span>
      </div>
    </section>
  );
}
