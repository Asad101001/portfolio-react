import { useEffect, useState } from 'react';

export default function Overlays({}: { theme?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Dynamic Mouse Spotlight */}
      <div 
        className="fixed inset-0 z-[-1] opacity-80 mix-blend-screen pointer-events-none transition-opacity duration-1000" 
        style={{ 
          background: 'var(--spotlight-gradient)',
          '--x': `${mousePosition.x}px`,
          '--y': `${mousePosition.y}px`
        } as React.CSSProperties}
      />
      
      {/* Scanline CRT overlay */}
      <div 
        className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))`,
          backgroundSize: '100% 2px, 3px 100%'
        }}
      />
    </>
  )
}
