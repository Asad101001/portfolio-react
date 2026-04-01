import { useEffect, useRef, useState } from 'react';

const sections = ['hero', 'about', 'projects', 'experience', 'tech', 'education', 'contact'];


export default function Overlays() {
  const [activeSection, setActiveSection] = useState('hero');
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ tx: 0, ty: 0, cx: 0, cy: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Cursor Glow Interpolation
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.tx = e.clientX;
      posRef.current.ty = e.clientY;
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    const updateGlow = () => {
      const { tx, ty, cx, cy } = posRef.current;
      const ncx = cx + (tx - cx) * 0.1;
      const ncy = cy + (ty - cy) * 0.1;
      posRef.current.cx = ncx;
      posRef.current.cy = ncy;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${ncx - 250}px, ${ncy - 250}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(updateGlow);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(updateGlow);

    // Section Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dynamic Mouse Glow */}
      <div 
        ref={glowRef}
        id="cursor-glow"
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[-1] opacity-60 mix-blend-screen transition-opacity duration-1000"
        style={{
          background: 'var(--spotlight-gradient)',
          willChange: 'transform'
        }}
      />

      {/* Section Dots Sidebar */}
      <div id="section-dots" className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4">
        {sections.map((id) => (
          <button
            key={id}
            className={`section-dot group relative flex items-center justify-center w-4 h-4 rounded-full border border-white/20 hover:border-customCyan transition-all duration-300 ${activeSection === id ? 'active bg-customCyan border-customCyan' : ''}`}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
              {id}
            </div>
            {/* Minimal line icons for the dots if we want, or just the dots */}
          </button>
        ))}
      </div>

       {/* Back to top with progress ring */}
       <button 
         id="back-to-top"
         className="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center hover:border-customCyan group transition-all"
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
       >
         <svg className="w-full h-full -rotate-90 absolute inset-0" viewBox="0 0 44 44">
           <circle
             cx="22"
             cy="22"
             r="19"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             className="text-white/5"
           />
           <circle
             id="scroll-ring"
             cx="22"
             cy="22"
             r="19"
             fill="none"
             stroke="var(--cyan)"
             strokeWidth="2"
             strokeDasharray="119.4"
             strokeDashoffset="119.4"
             strokeLinecap="round"
             className="transition-[stroke-dashoffset] duration-100"
           />
         </svg>
         <svg className="w-5 h-5 text-white group-hover:text-customCyan group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
         </svg>
       </button>
    </>
  );
}
