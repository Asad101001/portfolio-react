import { useEffect, useRef, useState } from 'react';
import { Home, User, Briefcase, Cpu, GraduationCap, Mail, MessageSquare } from 'lucide-react';

const sections = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'experience', icon: Cpu, label: 'Experience' },
  { id: 'tech', icon: MessageSquare, label: 'Tech' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'contact', icon: Mail, label: 'Contact' }
];

export default function Overlays() {
  const [activeSection, setActiveSection] = useState('hero');
  const [nearbySection, setNearbySection] = useState<string | null>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ tx: 0, ty: 0, cx: 0, cy: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.tx = e.clientX;
      posRef.current.ty = e.clientY;
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
      
      // Calculate nearby section for dock effect
      const dots = document.querySelectorAll('.section-dot');
      let closestId = null;
      let minDocsDist = 80; // Distance threshold for dock effect
      
      dots.forEach(dot => {
        const rect = dot.getBoundingClientRect();
        const dist = Math.abs(e.clientY - (rect.top + rect.height / 2));
        if (dist < minDocsDist) {
          minDocsDist = dist;
          closestId = dot.getAttribute('data-id');
        }
      });
      setNearbySection(closestId);
    };

    const updateGlow = () => {
      const { tx, ty, cx, cy } = posRef.current;
      // Smooth interpolation for the cursor glow
      const ncx = cx + (tx - cx) * 0.12;
      const ncy = cy + (ty - cy) * 0.12;
      posRef.current.cx = ncx;
      posRef.current.cy = ncy;

      if (glowRef.current) {
        // Center the 500px glow on the cursor
        glowRef.current.style.transform = `translate3d(${ncx - 250}px, ${ncy - 250}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(updateGlow);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(updateGlow);

    // Section Observer for navigation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: [0.3, 0.6] });

    sections.forEach(({ id }) => {
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
      {/* Interactive Cursor Glow Overlay */}
      <div 
        ref={glowRef}
        id="cursor-glow"
        className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full z-0 opacity-60 mix-blend-screen transition-opacity duration-1000"
        style={{ 
          background: 'var(--spotlight-gradient)',
          willChange: 'transform' 
        }}
      />

      {/* Floating Section Navigation Dots */}
      <div id="section-dots">
        {sections.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            data-id={id}
            title={label}
            className={`section-dot ${activeSection === id ? 'active' : ''} ${nearbySection === id ? 'nearby' : ''}`}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon size={16} />
          </button>
        ))}
      </div>

       {/* Floating Back to Top Button */}
       <button 
         id="back-to-top"
         className="fixed bottom-8 left-8 z-[100] w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center hover:border-customCyan group transition-all"
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
         style={{ 
           opacity: activeSection === 'hero' ? 0 : 1, 
           pointerEvents: activeSection === 'hero' ? 'none' : 'all' 
         }}
       >
         <svg className="w-5 h-5 text-white group-hover:text-customCyan group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
         </svg>
       </button>
    </>
  );
}
