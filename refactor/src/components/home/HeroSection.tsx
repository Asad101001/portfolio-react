import { useState, useEffect } from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';

export default function HeroSection() {
  const { typedText } = useTypewriter([
    "CS Student @ UBIT '28",
    "Python Developer",
    "AWS Cloud Explorer",
    "Data Enthusiast"
  ]);
  
  useReveal(); // Initialize reveals
  const githubRef = useMagnetic() as React.RefObject<HTMLAnchorElement>;
  const linkedinRef = useMagnetic() as React.RefObject<HTMLAnchorElement>;

  const [activeSlot, setActiveSlot] = useState(0);
  const [time, setTime] = useState('');
  const [hourText, setHourText] = useState('--');
  const [status, setStatus] = useState('Checking...');
  const [clockDashoffset, setClockDashoffset] = useState(188.5);

  // Clock logic
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const pct = (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()) / 86400;
      setClockDashoffset(188.5 - (188.5 * pct));
      setHourText(now.getHours().toString().padStart(2, '0'));

      const timeOptions: Intl.DateTimeFormatOptions = { 
        timeZone: 'Asia/Karachi', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
      };
      const timeStr = new Intl.DateTimeFormat('en-US', timeOptions).format(now);
      setTime(timeStr + ' PKT');

      const h = parseInt(timeStr.substring(0, 2), 10);
      if (h >= 1 && h < 9) {
        setStatus('Likely asleep 🌙');
      } else {
        setStatus('Active / Available ⚡');
      }
    };

    const interval = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(interval);
  }, []);

  // Activity rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlot((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="w-full relative min-h-screen pt-32 pb-20 flex flex-col justify-center">
      {/* 3D Static/Ambient Orbs are handled by Background.tsx or CSS, but let's replicate the structure */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      <div className="hero-grid">
        {/* Main Name Card with 3D Orb */}
        <div className="card hero-main glass-card reveal" style={{ '--delay': '0ms' } as React.CSSProperties}>
          <div className="status-pill">
            <span className="status-dot"></span>
            Building & exploring
          </div>

          <div className="hero-name-3d-wrap" aria-hidden="true">
            <div className="hero-micro-orb">
              <div className="hero-micro-orb-inner"></div>
              <div className="hero-micro-face"></div>
              <div className="hero-micro-face f2"></div>
              <div className="hero-micro-face f3"></div>
              <div className="hero-micro-ring"></div>
              <div className="hero-micro-dot"></div>
            </div>
          </div>

          <h1 className="hero-name">Muhammad<br />Asad Khan</h1>
          <div className="typewriter-wrap flex items-center h-6 font-mono text-xl text-customCyan">
            <span className="typewriter-text">{typedText}</span><span className="caret ml-1">|</span>
          </div>
          
          <p className="hero-sub mt-2">CS Student @ UBIT '28</p>
          <p className="hero-desc mt-4">Python &middot; AWS &middot; Data Science &middot; AI/ML &middot; Networking</p>
          
          <div className="hero-actions flex gap-4 mt-8">
            <a 
              ref={githubRef}
              href="https://github.com/Asad101001" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </a>
            <a 
              ref={linkedinRef}
              href="https://www.linkedin.com/in/muhammadasadk/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-linkedin"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Terminal Card */}
        <div className="card hero-side glass-card reveal interactive-terminal" style={{ '--delay': '100ms' } as React.CSSProperties}>
          <div className="terminal-bar">
            <span className="t-dot t-red"></span>
            <span className="t-dot t-yellow"></span>
            <span className="t-dot t-green"></span>
            <span className="t-title">asad@2006 ~</span>
          </div>
          <div className="terminal-body p-6 font-mono text-sm">
            <div className="terminal-meta mt-1 mb-4 opacity-50">Last login: {new Date().toDateString().slice(0, 15)} on ttys001</div>
            <p className="t-line t-visible mb-1"><span className="t-prompt text-customCyan">asad@2006:~$</span> <span className="t-cmd">whoami</span></p>
            <p className="t-line t-out t-visible mb-3 ml-4 opacity-70">Muhammad Asad Khan</p>
            <p className="t-line t-visible mb-1"><span className="t-prompt text-customCyan">asad@2006:~$</span> <span className="t-cmd">cat focus.txt</span></p>
            <p className="t-line t-out t-visible mb-1 ml-4 opacity-70">Python &middot; AI/ML &middot; Cloud</p>
            <p className="t-line t-out t-visible mb-3 ml-4 opacity-70">Data Science &middot; RAG Systems</p>
            <p className="t-line t-visible mb-1"><span className="t-prompt text-customCyan">asad@2006:~$</span> <span className="t-cmd">echo $LOCATION</span></p>
            <p className="t-line t-out t-visible mb-3 ml-4 opacity-70">Karachi, Pakistan 🇵🇰</p>
            
            <div className="terminal-input-row flex items-center mt-2">
               <span className="t-prompt text-customCyan mr-2">asad@2006:~$</span>
               <span className="t-cursor w-2 h-4 bg-white/50 animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Activity Hub (Rotating Widget) */}
        <div className="card currently-into-card glass-card reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
          <p className="card-label">Activity Hub</p>
          <div className="rotating-widget relative h-32 overflow-hidden">
            {[
              { label: 'Current Book', value: '1984 - George Orwell' },
              { label: 'Last Watched', value: 'Dune: Part Two' },
              { label: 'Watching Series', value: 'Severance' },
              { label: 'Watching Football', value: 'Final: BAR 0-2 MAL' }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`rotating-item absolute inset-0 flex flex-col justify-center transition-all duration-700 ${activeSlot === i ? 'active opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <span className="rotating-label text-[10px] uppercase font-mono tracking-widest text-customCyan mb-1">{item.label}</span>
                <span className="rotating-value text-lg font-bold leading-tight">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="rotating-dots flex gap-2 justify-center pt-4">
            {[0, 1, 2, 3].map((i) => (
              <button 
                key={i} 
                className={`r-dot w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeSlot === i ? 'active bg-customCyan w-6' : 'bg-white/10'}`} 
                onClick={() => setActiveSlot(i)}
              />
            ))}
          </div>
        </div>

        {/* Build Focus Card */}
        <div className="card glass-card reveal" style={{ '--delay': '300ms' } as React.CSSProperties}>
          <p className="card-label">Build Focus</p>
          <div className="focus-list flex flex-col gap-4 mt-2">
            {[
              "Solution-oriented Projects",
              "AI Integration & RAG Systems",
              "Cloud Architecture (AWS)"
            ].map((text, i) => (
              <div key={i} className="focus-item flex items-center gap-3 group/item">
                <div className="w-8 h-8 rounded-lg bg-customCyan/5 border border-white/5 flex items-center justify-center text-customCyan group-hover/item:border-customCyan/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <span className="text-sm font-medium opacity-70 group-hover/item:opacity-100 transition-all">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clock Widget */}
        <div className="clock-widget glass-card reveal" style={{ '--delay': '400ms' } as React.CSSProperties}>
          <div className="clock-face w-16 h-16 relative flex items-center justify-center">
            <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
              <circle cx="32" cy="32" r="30" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
              <circle 
                cx="32" cy="32" r="30" 
                stroke="var(--cyan)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeDasharray="188.5" 
                strokeDashoffset={clockDashoffset}
                fill="none"
              />
            </svg>
            <span className="absolute font-mono text-sm font-bold text-white/50">{hourText}</span>
          </div>
          <div className="clock-info flex flex-col justify-center">
            <div className="clock-time-label text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Current local time</div>
            <div className="clock-prime-time text-xl font-bold tracking-tight">{time}</div>
            <div className="clock-sub text-xs text-customCyan/80 font-mono">{status}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
