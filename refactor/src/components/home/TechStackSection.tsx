import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Globe, 
  Cloud, 
  Database, 
  Cpu, 
  Layers, 
  Smartphone,
  Box,
  Braces
} from 'lucide-react';

const categories = [
  { id: 'ALL', label: 'All' },
  { id: 'LANGS', label: 'Languages' },
  { id: 'WEB', label: 'Web Dev' },
  { id: 'CLOUD', label: 'Cloud & Infra' },
  { id: 'AI', label: 'AI / Data' },
  { id: 'TOOLS', label: 'Tools' }
];

const domains = [
  {
    id: 'langs',
    cat: 'LANGS',
    label: 'Languages',
    desc: 'Core logic & development primitives',
    skills: [
      { name: 'Python', icon: Code2, color: '#3776AB' },
      { name: 'C++', icon: Box, color: '#00599C' },
      { name: 'C#', icon: Terminal, color: '#239120' },
      { name: 'Java', icon: Coffee, color: '#007396' },
      { name: 'Rust', icon: Cpu, color: '#DEA584' }
    ]
  },
  {
    id: 'web',
    cat: 'WEB',
    label: 'Web Development',
    desc: 'Frontend & backend ecosystem',
    skills: [
      { name: 'JS / TS', icon: Globe, color: '#F7DF1E' },
      { name: 'React', icon: Layers, color: '#61DAFB' },
      { name: 'Tailwind', icon: Layers, color: '#06B6D4' },
      { name: 'Node.js', icon: Globe, color: '#339933' },
      { name: 'HTML / CSS', icon: Globe, color: '#E34F26' }
    ]
  },
  {
    id: 'cloud',
    cat: 'CLOUD',
    label: 'Cloud & Infrastructure',
    desc: 'Scalable deployment & architecture',
    skills: [
      { name: 'AWS', icon: Cloud, color: '#FF9900' },
      { name: 'Docker', icon: Box, color: '#2496ED' },
      { name: 'VPC', icon: Cloud, color: '#FF9900' },
      { name: 'S3 / EC2', icon: Cloud, color: '#FF9900' }
    ]
  },
  {
    id: 'ai',
    cat: 'AI',
    label: 'AI / Data Science',
    desc: 'RAG systems & ML pipelines',
    skills: [
      { name: 'FastAPI', icon: Smartphone, color: '#009688' },
      { name: 'NumPy', icon: Cpu, color: '#013243' },
      { name: 'Pandas', icon: Database, color: '#150458' },
      { name: 'PyTorch', icon: Cpu, color: '#EE4C2C' }
    ]
  },
  {
    id: 'tools',
    cat: 'TOOLS',
    label: 'Backend & Tools',
    desc: 'Environment & workflow optimization',
    skills: [
      { name: 'SQL', icon: Database, color: '#4479A1' },
      { name: 'Git', icon: Braces, color: '#F05032' },
      { name: 'Linux', icon: Terminal, color: '#FCC624' },
      { name: 'LangChain', icon: Braces, color: '#00ff41' }
    ]
  }
];

function Coffee(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  );
}

export default function TechStackSection() {
  const [activeCat, setActiveCat] = useState('ALL');

  const filteredDomains = activeCat === 'ALL' 
    ? domains 
    : domains.filter(d => d.cat === activeCat);

  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      <div className="section-inner max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header centered text-center mb-16"
        >
          <p className="text-customCyan font-mono text-xs uppercase tracking-widest mb-2">Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Tech Stack</h2>
          <p className="text-customTextMuted max-w-2xl mx-auto">A versatile domain-driven technical foundation engineered for scale and performance.</p>
        </motion.div>

        {/* Categories Bar */}
        <div className="arsenal-filter-bar flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest font-bold transition-all border ${
                activeCat === cat.id 
                  ? 'bg-customCyan border-customCyan text-zinc-950 shadow-[0_0_20px_hsla(161,84%,39%,0.3)]' 
                  : 'bg-white/5 border-white/10 text-customTextMuted hover:border-white/20 hover:text-white'
              }`}
              onClick={() => setActiveCat(cat.id)}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Arsenal Grid */}
        <motion.div 
          layout
          className="arsenal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredDomains.map((domain) => (
              <motion.div 
                key={domain.id} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="arsenal-domain glass-card flex flex-col p-8 bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-2xl group hover:border-customCyan/30 transition-colors"
              >
                <div className="arsenal-domain-header mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-customCyan font-bold text-[10px] uppercase tracking-[0.2em]">{domain.label}</span>
                    <span className="text-[8px] font-mono text-customTextMuted uppercase">{domain.skills.length} modules</span>
                  </div>
                  <p className="text-white font-medium text-sm leading-relaxed">{domain.desc}</p>
                </div>
                
                <div className="arsenal-skill-grid flex flex-wrap gap-2 mt-auto">
                  {domain.skills.map((skill, si) => (
                    <motion.div 
                      key={si}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group/chip flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-all cursor-default"
                    >
                      <skill.icon size={14} style={{ color: skill.color }} className="transition-transform group-hover/chip:rotate-12" />
                      <span className="text-[10px] font-mono font-bold text-white/50 group-hover/chip:text-white transition-colors uppercase tracking-wider">
                         {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="tech-footer mt-24 px-4 py-8 border-t border-white/5 text-[10px] font-mono uppercase tracking-[0.3em] font-bold flex flex-wrap gap-12 justify-center"
        >
           <span className="flex items-center gap-3 transition-colors hover:text-customCyan"><span className="w-2 h-2 rounded-full bg-customCyan shadow-[0_0_10px_var(--cyan)]"></span> Cloud Specialist</span>
           <span className="flex items-center gap-3 transition-colors hover:text-customCyan"><span className="w-2 h-2 rounded-full bg-customCyan shadow-[0_0_10px_var(--cyan)]"></span> Data Pioneer</span>
           <span className="flex items-center gap-3 transition-colors hover:text-customCyan"><span className="w-2 h-2 rounded-full bg-customCyan shadow-[0_0_10px_var(--cyan)]"></span> Core Systems</span>
        </motion.div>
      </div>
    </section>
  );
}
