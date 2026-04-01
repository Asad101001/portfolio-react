import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';

const socialChips = [
  { name: 'GitHub', handle: '@Asad101001', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>, href: 'https://github.com/Asad101001' },
  { name: 'LinkedIn', handle: 'muhammadasadk', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>, href: 'https://linkedin.com/in/muhammadasadk' },
  { name: 'Discord', handle: 'asad.k_11', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2H7z"/><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, href: 'https://discord.com/users/1390327957062418654' },
  { name: 'Instagram', handle: '@muhammadasad.k_', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, href: 'https://instagram.com/muhammadasad.k_' }
];

function MagneticSocialCard({ chip }: { chip: typeof socialChips[0] }) {
  const ref = useMagnetic() as React.RefObject<HTMLAnchorElement>;
  return (
    <a 
      ref={ref}
      href={chip.href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-card glass-card reveal p-5 flex items-center gap-4 transition-all hover:border-customCyan/50 group"
    >
      <div className="text-zinc-600 group-hover:text-customCyan transition-colors">{chip.icon}</div>
      <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">{chip.name}</span>
          <span className="text-[11px] text-zinc-700 font-mono tracking-tight group-hover:text-customCyan/80 transition-colors">{chip.handle}</span>
      </div>
    </a>
  );
}

export default function ContactSection() {
  useReveal();

  return (
    <section id="contact" className="section-in py-20 relative">
      <div className="section-header text-center mb-16">
        <p className="label-xs text-xs font-mono uppercase tracking-[0.3em] text-customCyan mb-2">Connect</p>
        <h2 className="section-title text-4xl font-bold">Let's Be Internet Friends</h2>
        <p className="text-customTextMuted mt-4 max-w-lg mx-auto">Catch me building stuff, posting takes, or listening to music. Slide in anywhere 👋</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-16">
        {socialChips.map((chip, i) => (
          <MagneticSocialCard key={i} chip={chip} />
        ))}
      </div>

      <div className="flex justify-center mb-20">
        <a 
          href="mailto:muhammadasadk42@gmail.com" 
          className="btn-primary"
          style={{ padding: '16px 32px', borderRadius: '99px', fontSize: '12px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          Available for internships & collabs — ping me
        </a>
      </div>

      <div className="social-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Spotify Widget */}
        <div className="spotify-widget glass-card reveal p-6 flex flex-col gap-5">
           <div className="spotify-widget-header flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Listening to Spotify</span>
              <div className="spotify-live-dot w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center animate-pulse">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1DB954" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              </div>
              <div className="flex flex-col gap-1">
                 <div className="text-sm font-bold text-white">Connecting to Feed...</div>
                 <div className="text-xs text-zinc-600">Syncing API...</div>
              </div>
           </div>
           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-[#1DB954]" style={{ boxShadow: '0 0 10px #1DB954' }}></div>
           </div>
        </div>

        {/* Last.fm Widget */}
        <div className="lastfm-widget glass-card reveal p-6 flex flex-col gap-4">
           <div className="lastfm-widget-header flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Weekly Artists</span>
           </div>
           <div className="lastfm-user font-mono text-[10px] text-zinc-600">@asadk_11</div>
           <p className="text-xs italic text-zinc-700">API feed fetching logic in queue...</p>
        </div>

        {/* Small Column Widgets */}
        <div className="flex flex-col gap-6 lg:col-start-3">
          {/* Visitor XP Widget */}
          <div className="xp-widget glass-card reveal p-6">
             <div className="flex justify-between items-center mb-3">
                <span className="xp-label text-[10px] font-bold uppercase tracking-widest text-zinc-500">Visitor Experience</span>
                <span className="xp-level px-2 py-0.5 rounded bg-customCyan/10 text-customCyan text-[10px] font-mono border border-customCyan/20">Lv.1</span>
             </div>
             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                <div className="h-full w-1/4 bg-customCyan" style={{ boxShadow: '0 0 8px var(--cyan)' }}></div>
             </div>
             <div className="flex justify-between text-[8px] font-mono text-zinc-700 uppercase">
                <span>Visit #1</span>
                <span>+25 XP</span>
             </div>
          </div>

          {/* Game Score Placeholder */}
          <div className="game-widget glass-card reveal p-6">
             <span className="game-label text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-3">Legacy Highscore</span>
             <div id="game-score" className="text-2xl font-bold font-mono">1,440</div>
             <p className="text-[10px] text-zinc-700 mt-1 uppercase tracking-wider">Flappy Cube (v1.0)</p>
          </div>

          {/* Dev Notes Widget */}
          <div className="dev-notes-widget glass-card reveal p-6">
             <div className="dev-notes-header flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Internal Memo</span>
             </div>
             <p className="text-xs text-zinc-600 leading-relaxed italic">"Refactoring to React. Aesthetic parity achieved. System stable."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
