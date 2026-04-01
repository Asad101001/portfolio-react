import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Globe, Cpu, Database, Braces } from 'lucide-react'

const domains = [
  { id: 'all', label: 'All', icon: <Globe size={14} /> },
  { id: 'lang', label: 'Languages', icon: <Code size={14} /> },
  { id: 'web', label: 'Web Development', icon: <Globe size={14} /> },
  { id: 'cloud', label: 'Cloud & Infrastructure', icon: <Cpu size={14} /> },
  { id: 'ai', label: 'AI / Data', icon: <Braces size={14} /> },
  { id: 'backend', label: 'Backend & Tools', icon: <Database size={14} /> }
]

const arsenal = [
  { id: 'python', name: 'Python', domain: 'lang', color: '#3776AB', icon: 'devicon-python-plain' },
  { id: 'cpp', name: 'C++', domain: 'lang', color: '#00599C', icon: 'devicon-cplusplus-plain' },
  { id: 'csharp', name: 'C#', domain: 'lang', color: '#512BD4', icon: 'devicon-csharp-plain' },
  { id: 'java', name: 'Java', domain: 'lang', color: '#ED8B00', icon: 'devicon-java-plain' },
  
  { id: 'js', name: 'JavaScript', domain: 'web', color: '#F7DF1E', icon: 'devicon-javascript-plain' },
  { id: 'react', name: 'React', domain: 'web', color: '#61DAFB', icon: 'devicon-react-original' },
  { id: 'tailwind', name: 'Tailwind', domain: 'web', color: '#06B6D4', icon: 'devicon-tailwindcss-original' },
  { id: 'nodejs', name: 'Node.js', domain: 'web', color: '#339933', icon: 'devicon-nodejs-plain' },

  { id: 'aws', name: 'AWS', domain: 'cloud', color: '#FF9900', icon: 'devicon-amazonwebservices-plain', services: ['RDS', 'S3', 'EC2', 'VPC', 'IAM'] },
  { id: 'linux', name: 'Linux', domain: 'cloud', color: '#FCC624', icon: 'devicon-linux-plain' },
  { id: 'nginx', name: 'Nginx', domain: 'cloud', color: '#009639', icon: 'devicon-nginx-original' },

  { id: 'pytorch', name: 'PyTorch', domain: 'ai', color: '#EE4C2C', icon: 'devicon-pytorch-original' },
  { id: 'langchain', name: 'LangChain', domain: 'ai', color: '#10B981', svg: true },
  { id: 'tensorflow', name: 'TensorFlow', domain: 'ai', color: '#FF6F00', icon: 'devicon-tensorflow-original' },
  { id: 'pandas', name: 'pandas', domain: 'ai', color: '#150458', icon: 'devicon-pandas-plain' },

  { id: 'fastapi', name: 'FastAPI', domain: 'backend', color: '#05998B', icon: 'devicon-fastapi-plain' },
  { id: 'mysql', name: 'MySQL', domain: 'backend', color: '#4479A1', icon: 'devicon-mysql-plain' },
  { id: 'mongodb', name: 'MongoDB', domain: 'backend', color: '#47A248', icon: 'devicon-mongodb-plain' },
  { id: 'git', name: 'Git', domain: 'backend', color: '#F05032', icon: 'devicon-git-plain' }
]

export default function TechStackSection() {
  const [filter, setFilter] = useState('all')

  const filteredArsenal = useMemo(() => {
    if (filter === 'all') return arsenal
    return arsenal.filter(item => item.domain === filter)
  }, [filter])

  return (
    <section id="tech" className="w-full py-20 relative">
      <div className="section-header text-center mb-12">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-customCyan mb-2">Arsenal</p>
        <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
        <p className="text-customTextMuted mt-4 max-w-lg mx-auto">Digital workspace — categorized by core competency</p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {domains.map(dom => (
          <button
            key={dom.id}
            onClick={() => setFilter(dom.id)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all border ${
              filter === dom.id 
                ? 'bg-customCyan text-black border-customCyan shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                : 'bg-customBg2 text-customTextDim border-white/5 hover:border-customCyan/30 hover:text-customTextMuted'
            }`}
          >
            {dom.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredArsenal.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-5 flex flex-col items-center justify-center group relative overflow-hidden h-32"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: item.color }}
              />
              
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                  {item.icon ? (
                    <i className={`${item.icon} colored`}></i>
                  ) : (
                    <span className="text-customCyan">⚡</span>
                  )}
                </div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                
                {item.services && (
                   <div className="flex gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.services.map(s => (
                        <span key={s} className="text-[8px] bg-white/5 px-1 py-0.5 rounded border border-white/10 text-customTextDim font-bold">
                          {s}
                        </span>
                      ))}
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
