import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'

const skillDist = [
  { label: 'Googling stuff', pct: '97%', color: '#f97316' },
  { label: 'Reading docs', pct: '15%', color: '#a855f7' },
  { label: 'Actual coding', pct: '61%', color: '#00ff41' },
  { label: 'Debugging', pct: '40%', color: '#f87171' },
  { label: 'It works locally', pct: '85%', color: '#22c55e' }
]

const testimonials = [
  { 
    text: '"He once spent 3 hours debugging a missing semicolon. Growth."', 
    author: '— Claude, probably', 
    stars: 4 
  },
  { 
    text: '"Works perfectly. On my machine. Every time."', 
    author: '— localhost:5000', 
    stars: 5 
  }
]

export default function ExperienceSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="experience" className="w-full py-20 relative">
      <div className="section-header text-center mb-8">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-customCyan mb-2">Background</p>
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        <p className="text-customTextMuted mt-4 max-w-lg mx-auto">Where I've spent my time, energy, and sanity.</p>
      </div>

      <div className="flex justify-center mb-12">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-3 px-8 py-3 rounded-full bg-customBg2 border border-customBorderH text-customCyan font-mono text-sm hover:border-customCyan transition-all shadow-lg active:scale-95"
        >
          {isOpen ? 'Hide' : 'View'} Experience
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
              {/* Skill Distribution */}
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">📊</span>
                  <h3 className="font-bold">Actual Skill Distribution</h3>
                </div>
                <p className="text-xs text-customTextDim mb-8 italic">Based on hours spent vs. hours productive</p>
                
                <div className="space-y-6">
                  {skillDist.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[11px] font-mono tracking-tight text-customTextMuted">
                        <span>{skill.label}</span>
                        <span>{skill.pct}</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: skill.pct }}
                          transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ background: skill.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-8">
                   <span className="text-2xl">⭐</span>
                   <h3 className="font-bold">Testimonials</h3>
                </div>
                
                <div className="flex flex-col gap-6">
                  {testimonials.map((t, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors">
                       <p className="text-sm text-customTextMuted leading-relaxed mb-4 italic">{t.text}</p>
                       <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-customTextDim">{t.author}</span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, idx) => (
                              <Star 
                                key={idx} 
                                size={10} 
                                fill={idx < t.stars ? "#facc15" : "transparent"} 
                                className={idx < t.stars ? "text-yellow-400" : "text-white/10"} 
                              />
                            ))}
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
