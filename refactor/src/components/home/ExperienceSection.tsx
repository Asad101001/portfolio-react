import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../../hooks/useReveal';

const skillDist = [
  { label: 'Googling stuff', pct: '97%', color: '#f97316' },
  { label: 'Reading docs', pct: '15%', color: '#a855f7' },
  { label: 'Actual coding', pct: '61%', color: '#00ff41' },
  { label: 'Debugging', pct: '40%', color: '#f87171' },
  { label: 'It works locally', pct: '85%', color: '#22c55e' }
];

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
];

export default function ExperienceSection() {
  useReveal();
  const [isOpen, setIsOpen] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timer: any;
    if (showError) {
      timer = setTimeout(() => setShowError(false), 4200);
    }
    return () => clearTimeout(timer);
  }, [showError]);

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      setTimeout(() => setShowError(true), 200);
    }
  };

  return (
    <section id="experience" className="section-in py-20 relative">
      <div className="section-header text-center mb-12">
        <p className="label-xs text-xs font-mono uppercase tracking-[0.3em] text-customCyan mb-2">Background</p>
        <h2 className="section-title text-4xl font-bold">Experience</h2>
      </div>

      <div className="experience-trigger flex justify-center mb-12">
        <div 
          className="demo-404 reveal cursor-pointer" 
          onClick={handleToggle}
          style={{ width: '100%', maxWidth: '800px' }}
        >
          <div className="demo-404-corner tl"></div>
          <div className="demo-404-corner br"></div>
          <div className="demo-big">404</div>
          <h3>SECTOR_DATA_OFFLINE</h3>
          <p>The experience logs are restricted or haven't been decrypted yet.</p>
          <span className="demo-404-hint">{isOpen ? 'Click to terminate session' : 'Click to force decryption'}</span>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="demo-grid grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
              {/* Skill Distribution */}
              <div className="demo-card glass-card reveal">
                <span className="demo-emoji block text-3xl mb-4">📊</span>
                <h3 className="text-lg font-bold mb-2">Actual Skill Distribution</h3>
                <p className="text-sm text-customTextMuted mb-6 italic">Based on hours spent vs. hours productive</p>
                
                <div className="demo-progress-fake space-y-4">
                  {skillDist.map((skill, i) => (
                    <div key={i} className="demo-progress-row flex items-center gap-4">
                      <span className="demo-progress-label w-32 text-right font-mono text-[10px] uppercase text-customTextDim">{skill.label}</span>
                      <div className="demo-progress-bar-wrap flex-grow h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: skill.pct }}
                          transition={{ duration: 1.5, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                          className="demo-progress-fill h-full rounded-full"
                          style={{ background: skill.color, boxShadow: `0 0 10px ${skill.color}80` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="demo-card glass-card reveal">
                <span className="demo-emoji block text-3xl mb-4">⭐</span>
                <h3 className="text-lg font-bold mb-4">Testimonials</h3>
                
                <div className="space-y-6">
                  {testimonials.map((t, i) => (
                    <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/10 transition-all">
                      <p className="text-sm text-zinc-400 italic mb-4 leading-relaxed line-clamp-3">
                        {t.text}
                      </p>
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600">{t.author}</span>
                         <div className="demo-stars flex gap-1 text-yellow-500 text-xs">
                           {[...Array(5)].map((_, idx) => (
                             <span key={idx}>{idx < t.stars ? '★' : '☆'}</span>
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

      {/* Error Popup Quirk */}
      <div className={`error-popup ${showError ? 'visible' : ''}`}>
        <div className="error-popup-bar">
          <div className="error-popup-trafficlight red"></div>
          <div className="error-popup-trafficlight yellow"></div>
          <div className="error-popup-trafficlight green"></div>
          <div className="error-popup-title">KERNEL EXCEPTION: DECRYPTION_FAILURE</div>
        </div>
        <div className="error-popup-body">
           <div className="flex flex-col">
             <p className="error-popup-msg">SYSTEM_THREAD_EXCEPTION_NOT_HANDLED</p>
             <p className="error-popup-trace opacity-50">
               At 0x0000FF01 (experience.sys)<br />
               Internal decrypt error: access_denied<br />
               Experience log is missing or Corrupt.
             </p>
           </div>
        </div>
        <div className="error-popup-timer">
          <motion.div 
            className="error-popup-timer-fill" 
            initial={{ scaleX: 1 }}
            animate={showError ? { scaleX: 0 } : { scaleX: 1 }}
            transition={{ duration: 4, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
