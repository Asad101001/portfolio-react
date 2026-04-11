import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useReveal } from '../../hooks/useReveal';

const activityItems = [
  { label: 'Current Book', value: 'Checking Library...' },
  { label: 'Last Watched', value: 'Checking Letterboxd...' },
  { label: 'Watching Series', value: 'Checking Trakt...' },
  { label: 'Watching Football', value: 'Final: BAR 0-2 MAL · Next: BAR vs SEV' },
];

export default function HeroSection() {
  useReveal();
  const { typedText } = useTypewriter([
    'Building & shipping solution-oriented products',
    'Cloud architecture + AI systems',
    'RAG pipelines and web platforms',
  ]);

  const [activeSlot, setActiveSlot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlot((prev) => (prev + 1) % activityItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activityItems.length]);

  return (
    <section id="hero">
      <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-3" aria-hidden="true"></div>

      <div className="hero-grid">
        <motion.div className="hero-main glass-card reveal" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="status-pill">
            <span className="status-dot"></span>
            Building & exploring
          </div>

          <h1 className="hero-name">Muhammad<br />Asad Khan</h1>

          <div className="typewriter-wrap">
            <span className="typewriter-text">{typedText}</span><span className="caret">|</span>
          </div>

          <p className="hero-sub">CS Student @ UBIT '28</p>
          <p className="hero-desc">Python · AWS · Data Science · AI/ML · Networking</p>

          <div className="hero-actions">
            <a href="https://github.com/Asad101001" target="_blank" rel="noopener noreferrer" className="btn-primary magnetic">
              <Github size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammadasadk/" target="_blank" rel="noopener noreferrer" className="btn-linkedin magnetic">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href="mailto:muhammadasadk42@gmail.com" className="btn-secondary magnetic">
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div className="hero-side glass-card reveal" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          <div className="terminal-bar">
            <span className="t-dot t-red"></span>
            <span className="t-dot t-yellow"></span>
            <span className="t-dot t-green"></span>
            <span className="t-title">asad@2006 ~</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-meta">Last login: Mon Mar 16 02:12:01 2026 from 192.168.1.1</div>
            <p className="t-line"><span className="t-prompt">asad@2006:~$</span> <span className="t-cmd">whoami</span></p>
            <p className="t-line t-out">Muhammad Asad Khan</p>
            <p className="t-line"><span className="t-prompt">asad@2006:~$</span> <span className="t-cmd">cat focus.txt</span></p>
            <p className="t-line t-out">Python · OOP · Data Science</p>
            <p className="t-line t-out">Cloud (AWS) · AI · RAG</p>
            <p className="t-line"><span className="t-prompt">asad@2006:~$</span> <span className="t-cmd">echo $LOCATION</span></p>
            <p className="t-line t-out">Karachi, Pakistan 🇵🇰</p>
            <p className="t-line t-out" style={{ color: 'var(--cyan)' }}>🟢 Open to collabs & internships</p>
          </div>
        </motion.div>

        <div className="currently-into-card glass-card reveal">
          <p className="card-label">Activity Hub</p>
          <div className="rotating-widget">
            <div className="rotating-item active">
              <span className="rotating-label currently-into-label">{activityItems[activeSlot].label}</span>
              <span className="rotating-value currently-into-value">{activityItems[activeSlot].value}</span>
            </div>
          </div>
          <div className="rotating-dots">
            {activityItems.map((_, i) => (
              <button key={i} className={`r-dot ${activeSlot === i ? 'active' : ''}`} onClick={() => setActiveSlot(i)}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

