import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certifications = [
  { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: '2024', link: '#' },
  { title: 'Python for Data Science', issuer: 'IBM', date: '2024', link: '#' },
  { title: 'Generative AI Fundamentals', issuer: 'Google', date: '2024', link: '#' },
  { title: 'Cybersecurity Essentials', issuer: 'Cisco', date: '2023', link: '#' },
  { title: 'Networking Basics', issuer: 'Cisco', date: '2023', link: '#' },
  { title: 'Project Management Foundation', issuer: 'Coursera', date: '2023', link: '#' }
];

export default function CertsDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = (e: any) => {
      if (e.detail?.open !== undefined) {
        setIsOpen(e.detail.open);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('openCerts', handleOpen);
    
    // Listen for hash changes too
    const handleHash = () => {
      if (window.location.hash === '#certifications') {
        setIsOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => {
      window.removeEventListener('openCerts', handleOpen);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (window.location.hash === '#certifications') {
        window.history.replaceState(null, '', ' ');
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            id="certs-backdrop"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] cursor-pointer"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            id="certs-drawer"
            className="fixed top-0 right-0 h-full w-full max-w-md bg-customBg2 border-l border-white/10 z-[201] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] p-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-12">
               <h2 className="text-xl font-bold font-mono uppercase tracking-[0.2em] text-customCyan">Credentials</h2>
               <button 
                 onClick={() => setIsOpen(false)}
                 className="p-2 rounded-full hover:bg-white/5 text-zinc-500 hover:text-white transition-all"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
               </button>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-lg border border-white/5 bg-white/20 backdrop-blur-md hover:border-customCyan/30 hover:bg-white/5 transition-all group flex flex-col gap-1"
                >
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{cert.issuer}</span>
                  <p className="text-sm font-bold group-hover:text-customCyan transition-colors">{cert.title}</p>
                  <div className="flex items-center justify-between mt-3">
                     <span className="text-[10px] font-mono text-zinc-700">{cert.date}</span>
                     <button className="text-[10px] font-mono font-bold uppercase text-customCyan/50 group-hover:text-customCyan transition-colors">Verify ↗</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-lg border border-dashed border-white/10 text-center">
               <p className="text-xs text-zinc-600 italic">"Learning is a lifelong process. More benchmarks incoming."</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
