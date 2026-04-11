import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Cpu, Cloud, Brain, LineChart } from 'lucide-react';
import GitHubHeatmap from './GitHubHeatmap';

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = (totalDuration / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return <span className="text-2xl font-black text-white">{count}+</span>;
}

export default function AboutSection() {

  const exploring = [
    {
      title: "LLM Pipeline v2",
      desc: "Improving RAG chunking strategy with hybrid retrieval",
      pct: "30%",
      clr: "var(--cyan)",
      icon: <Brain size={16} />
    },
    {
      title: "Cloud Computing",
      desc: "NED University - EC2, S3, VPC, RDS & cloud architecture deep dives",
      pct: "95%",
      clr: "#FF9900",
      icon: <Cloud size={16} />
    },
    {
      title: "HEC GenAI Cohort 2",
      desc: "Working through RAG systems and AI ethics modules",
      pct: "85%",
      clr: "#a855f7",
      icon: <Cpu size={16} />
    }
  ];

  return (
    <section id="about" className="section-in">
      <div className="ambient-glow"></div>
      <div className="section-inner">
        <div className="section-header">
          <div>
            <p className="label-xs">Who I Am</p>
            <h2 className="section-title">About Me</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-text glass-card reveal">
            <p>
              I'm a Computer Science student at UBIT, University of Karachi '28, driven to explore
              every corner of CS before settling on a specialty. So far I've covered Cloud Computing,
              Networking, Web Dev, Data Science, Version Control, Project Management, Prompt Engineering,
              and AI — with lots more ahead.
            </p>
            <p className="mt-4">
              I learn by building. Every project is a live experiment — from AWS VPC architecture to
              RAG-powered LLM pipelines. My philosophy: build broken things, understand why they broke,
              then spend ages unbreaking them.
            </p>
            <div className="mt-8 flex gap-4">
              {/* Optional secondary CTAs could go here */}
            </div>
          </div>

          <div className="about-stats-col">
            {[
              { id: 'cnt-projects', target: 4, label: 'Projects', icon: <LineChart size={18} /> },
              { id: 'cnt-certs', target: 6, label: 'Certifications', icon: <Award size={18} /> },
              { id: 'cnt-tech', target: 20, label: 'Technologies', icon: <Cpu size={18} /> }
            ].map((stat, i) => (
              <div 
                key={stat.id} 
                className="about-stat-card glass-card reveal"
                style={{ '--delay': `${i * 100}ms` } as React.CSSProperties}
              >
                <div className="text-customCyan mb-1">
                   {stat.icon}
                </div>
                <Counter target={stat.target} />
                <p className="stat-lbl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Exploring */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mt-6 p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <Target size={18} className="text-customCyan" />
            <h3 className="font-mono text-xs uppercase tracking-widest font-bold">Currently Exploring</h3>
            <div className="flex items-center gap-2 ml-auto">
              <span className="w-2 h-2 rounded-full bg-customLime animate-pulse"></span>
              <span className="text-[10px] font-mono text-customLime/60 uppercase font-bold">Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exploring.map((item, i) => (
              <div key={i} className="flex flex-col group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all bg-white/5 group-hover:scale-110" style={{ color: item.clr }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-customCyan transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-white/40 line-clamp-1">{item.desc}</p>
                  </div>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-auto">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: item.pct }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 }}
                    className="h-full shadow-[0_0_8px_currentColor]"
                    style={{ backgroundColor: item.clr, color: item.clr } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Activity Heatmap */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="glass-card mt-6 p-8"
        >
          <GitHubHeatmap />
        </motion.div>
      </div>
    </section>
  );
}
