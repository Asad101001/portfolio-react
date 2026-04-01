import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../../hooks/useReveal';

const skillDist = [
  { label: 'Actually Coding', pct: '25%', color: 'var(--cyan)' },
  { label: 'Googling / AI Chat', pct: '95%', color: '#a855f7' },
  { label: 'Reading Documentation', pct: '15%', color: '#3b82f6' },
  { label: 'Fixing Build Errors', pct: '45%', color: '#f59e0b' },
  { label: 'Resting / Thinking', pct: '60%', color: '#10b981' }
];

export default function ExperienceSection() {
  useReveal();
  const [isOpen, setIsOpen] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timer: any;
    if (showError) {
      timer = setTimeout(() => setShowError(false), 4000);
    }
    return () => clearTimeout(timer);
  }, [showError]);

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      setTimeout(() => setShowError(true), 150);
    }
  };

  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-header centered">
          <p className="label-xs">Professional Path</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">Technical logs and contribution milestones</p>
        </div>

        <div 
          className="demo-404 reveal" 
          onClick={handleToggle}
        >
          <div className="demo-404-corner tl"></div>
          <div className="demo-404-corner br"></div>
          <div className="demo-big">404</div>
          <h3>SECTOR_DATA_OFFLINE</h3>
          <p>The experience logs are restricted or haven't been decrypted yet.</p>
          <span className="demo-404-hint">{isOpen ? 'Click to terminate session' : 'Click to force decryption'}</span>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mt-8"
            >
              <div className="demo-grid pb-12">
                {/* Skill Distribution Component */}
                <div className="demo-card glass-card reveal">
                  <span className="demo-emoji">📊</span>
                  <h3>Actual Skill Distribution</h3>
                  <p>Based on hours spent vs. hours productive</p>
                  
                  <div className="demo-progress-fake mt-6">
                    {skillDist.map((skill, i) => (
                      <div key={i} className="demo-progress-row">
                        <span className="demo-progress-label">{skill.label}</span>
                        <div className="demo-progress-bar-wrap">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: skill.pct }}
                            transition={{ duration: 1.4, delay: 0.2 + (i * 0.1), ease: [0.34, 1.56, 0.64, 1] }}
                            className="demo-progress-fill"
                            style={{ '--clr': skill.color } as React.CSSProperties}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonials Placeholder */}
                <div className="demo-card glass-card reveal" style={{ '--delay': '100ms' } as React.CSSProperties}>
                  <span className="demo-emoji">⭐</span>
                  <h3>System Testimonials</h3>
                  <p>Encrypted peer-review logs</p>
                  
                  <div className="space-y-6 mt-6">
                    <div className="p-4 rounded bg-white/[0.02] border border-white/5 italic text-sm text-white/40">
                      "Highly efficient at making complex problems look simple... or sometimes vice versa."
                      <div className="flex justify-between mt-3 not-italic">
                        <span className="text-[10px] font-mono text-customCyan">@compiler_01</span>
                        <div className="demo-stars">★★★★★</div>
                      </div>
                    </div>
                    <div className="p-4 rounded bg-white/[0.02] border border-white/5 italic text-sm text-white/40">
                      "Always ships on time (locally)."
                      <div className="flex justify-between mt-3 not-italic">
                        <span className="text-[10px] font-mono text-customCyan">@production_v5</span>
                        <div className="demo-stars">★★★★★</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Persistence Error Popup Markup */}
      <div className={`error-popup ${showError ? 'visible' : ''}`}>
        <div className="error-popup-bar">
          <div className="error-popup-trafficlight red"></div>
          <div className="error-popup-trafficlight yellow"></div>
          <div className="error-popup-trafficlight green"></div>
          <div className="error-popup-title">KERNEL EXCEPTION</div>
        </div>
        <div className="error-popup-body">
          <div className="error-popup-msg">DECRYPTION_FAILURE: SECTOR_404</div>
          <p className="error-popup-trace mt-1">
            Error at 0x8004210B (experience_log.sys)<br />
            Interrupt: IRQL_NOT_LESS_OR_EQUAL<br />
            Status: ACCESS_VOID
          </p>
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
