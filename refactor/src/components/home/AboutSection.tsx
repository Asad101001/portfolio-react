import { motion } from 'framer-motion'
import { TrendingUp, Award, Code2, Terminal } from 'lucide-react'

const stats = [
  { id: 'cnt-projects', icon: <TrendingUp size={18} />, value: '4+', label: 'Projects' },
  { id: 'cnt-certs', icon: <Award size={18} />, value: '6+', label: 'Certifications' },
  { id: 'cnt-tech', icon: <Code2 size={18} />, value: '20+', label: 'Technologies' }
]

const wipActivities = [
  { 
    title: 'LLM Pipeline v2', 
    desc: 'Improving RAG chunking strategy with hybrid retrieval', 
    pct: '30%', 
    icon: '🧠', 
    clr: 'var(--cyan)',
    bg: 'rgba(0,255,65,0.1)'
  },
  { 
    title: 'Cloud Computing', 
    desc: 'NED University - EC2, S3, VPC, RDS & cloud architecture deep dives', 
    pct: '95%', 
    icon: '☁️', 
    clr: '#FF9900',
    bg: 'rgba(255,153,0,0.1)'
  },
  { 
    title: 'HEC GenAI Cohort 2', 
    desc: 'Working through RAG systems and AI ethics modules', 
    pct: '85%', 
    icon: '🤖', 
    clr: '#a855f7',
    bg: 'rgba(168,85,247,0.1)'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 relative">
      <div className="section-header mb-12">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-customCyan mb-2">Who I Am</p>
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Text Col */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-card p-8 text-customTextMuted leading-relaxed space-y-6"
        >
          <p>
            I'm a Computer Science student at UBIT, University of Karachi '28, driven to explore 
            every corner of CS before settling on a specialty. So far I've covered Cloud Computing, 
            Networking, Web Dev, Data Science, Version Control, Project Management, Prompt Engineering, 
            and AI — with lots more ahead.
          </p>
          <p>
            I learn by building. Every project is a live experiment — from AWS VPC architecture to 
            RAG-powered LLM pipelines. My philosophy: build broken things, understand why they broke, 
            then spend ages unbreaking them.
          </p>
        </motion.div>

        {/* Stats Col */}
        <div className="flex flex-col gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col items-start"
            >
              <div className="text-customCyan mb-3">{stat.icon}</div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs font-mono text-customTextDim uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Currently Exploring */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card mt-8 p-8"
      >
        <div className="flex items-center gap-3 mb-8">
          <Terminal size={16} className="text-customCyan" />
          <span className="font-mono text-sm font-semibold uppercase tracking-wider">Currently Exploring</span>
          <span className="ml-auto flex items-center gap-2 text-[10px] uppercase font-bold text-customCyan">
            <span className="w-1.5 h-1.5 rounded-full bg-customCyan animate-pulse"></span> active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wipActivities.map((wip, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-xl" style={{ background: wip.bg }}>
                   {wip.icon}
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-sm text-customText">{wip.title}</p>
                  <p className="text-xs text-customTextDim mt-1 leading-relaxed">{wip.desc}</p>
                </div>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: wip.pct }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full rounded-full"
                  style={{ background: wip.clr }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
