export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleCerts = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('openCerts', { detail: { open: true } }));
  };

  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand/Motto */}
          <div className="footer-col">
            <a href="/" className="footer-logo font-bold uppercase tracking-widest mb-6 block">
              ASAD<span style={{ color: 'var(--cyan)' }}>.DEV</span>
            </a>
            <p className="footer-motto text-sm text-zinc-600 leading-relaxed max-w-xs">
              Computer Science student building solution-oriented software. 
              Exploring AI, Cloud, and and Data Systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <span className="footer-label">Navigation</span>
            <ul className="footer-links">
               <li><a href="#about">About</a></li>
               <li><a href="#projects">Projects</a></li>
               <li><a href="#experience">Experience</a></li>
               <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Connect & Meta */}
          <div className="footer-col">
            <span className="footer-label">Socials</span>
            <ul className="footer-links">
               <li><a href="https://github.com/Asad101001" target="_blank" rel="noopener noreferrer">GitHub</a></li>
               <li><a href="https://linkedin.com/in/muhammadasadk" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
               <li><a href="#certifications" onClick={handleCerts}>Certifications</a></li>
               <li><a href="mailto:muhammadasadk42@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
           <div className="flex flex-col gap-1">
             <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">&copy; {currentYear} &mdash; Built with React & TypeScript</p>
             <p className="font-mono text-[10px] text-zinc-800 uppercase tracking-widest">Handcrafted with precision & coffee.</p>
           </div>
           
           <div className="footer-status flex items-center gap-4">
              <span className="footer-status-pill">System_Stable</span>
              <span className="font-mono text-[10px] text-zinc-700">Ver. 2.5_R</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
