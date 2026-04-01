import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, MessageSquare, Instagram, Send, Twitter } from 'lucide-react'

// Sub-components (Stubs for now, reflecting the original structure)
function SocialChips() {
  const platforms = [
    { name: 'GitHub', handle: '@Asad101001', icon: <Github size={18} />, href: 'https://github.com/Asad101001', color: '#18181b' },
    { name: 'LinkedIn', handle: 'muhammadasadk', icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/muhammadasadk', color: '#0077b5' },
    { name: 'Discord', handle: 'asad.k_11', icon: <MessageSquare size={18} />, href: 'https://discord.com/users/1390327957062418654', color: '#5865f2' },
    { name: 'Instagram', handle: '@muhammadasad.k_', icon: <Instagram size={18} />, href: 'https://instagram.com/muhammadasad.k_', color: '#e4405f' }
  ]

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {platforms.map((p, i) => (
        <motion.a 
          key={p.name}
          href={p.href}
          target="_blank"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card transition-all hover:scale-105 hover:border-customCyan/50 group"
        >
          <div className="text-customTextDim group-hover:text-customCyan transition-colors">{p.icon}</div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">{p.name}</span>
            <span className="text-[11px] text-customTextDim font-mono tracking-tight group-hover:text-customCyan/80">{p.handle}</span>
          </div>
        </motion.a>
      ))}
    </div>
  )
}

function SpotifyWidget() {
  return (
    <div className="glass-card p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
           <span className="text-green-500 font-bold text-xs tracking-widest uppercase">Now Playing</span>
        </div>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-lg bg-zinc-900 flex items-center justify-center animate-pulse" />
        <div className="flex flex-col gap-1">
          <div className="h-4 w-32 bg-white/5 rounded animate-pulse" />
          <div className="h-3 w-24 bg-white/5 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}

function BigThreeWidget() {
  const [activeIdx, setActiveIdx] = useState(0)
  const slots = [
    { label: 'Movie Watchlist', value: 'Loading Letterboxd...', emoji: '🎬' },
    { label: 'Shows Watchlist', value: 'Loading Trakt...', emoji: '📺' },
    { label: 'Fav Footballers', value: 'Lamine Yamal, Pedri, Nuno Mendes', emoji: '⚽' },
    { label: 'Weekly Artists', value: 'Loading Last.fm...', emoji: '👨‍🎤' }
  ]

  useEffect(() => {
    const int = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slots.length)
    }, 6000)
    return () => clearInterval(int)
  }, [])

  return (
    <div className="glass-card p-8 flex flex-col items-center text-center relative overflow-hidden">
      <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-customCyan mb-8">My Big Threes</span>
      
      <div className="min-h-[140px] flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-4xl filter drop-shadow-glow-cyan">{slots[activeIdx].emoji}</div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{slots[activeIdx].label}</span>
              <span className="text-lg font-bold text-white max-w-[200px] leading-tight">{slots[activeIdx].value}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-2 mt-8">
        {slots.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setActiveIdx(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeIdx === i ? 'bg-customCyan w-6' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 relative">
      <div className="section-header text-center mb-16">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-customCyan mb-2">Connect</p>
        <h2 className="text-3xl md:text-4xl font-bold">Let's Be Internet Friends</h2>
        <p className="text-customTextMuted mt-4 max-w-lg mx-auto">Catch me building stuff, posting takes, or listening to music. Slide in anywhere 👋</p>
      </div>

      <SocialChips />

      <div className="flex justify-center mb-16">
        <a 
          href="mailto:muhammadasadk42@gmail.com"
          className="flex items-center gap-3 px-8 py-4 rounded-full bg-customCyan text-black font-bold uppercase tracking-widest text-xs hover:bg-customLime transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] active:scale-95"
        >
          <Send size={16} />
          Available for internships & collabs — ping me
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Col */}
        <div className="flex flex-col gap-6">
          <SpotifyWidget />
          <div className="glass-card p-6 h-40 flex flex-col gap-3">
             <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold text-xs uppercase tracking-widest">Recent Scrobbles</span>
             </div>
             <p className="text-zinc-600 text-xs italic">Porting Last.fm feed logic...</p>
          </div>
        </div>

        {/* Right Col */}
        <div className="flex flex-col gap-6">
           <div className="glass-card p-6 min-h-[160px] flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                 <Twitter size={14} className="text-zinc-500" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Twitter Snippet</span>
              </div>
              <p className="text-zinc-600 text-xs italic">Syncing with Nitter proxy...</p>
           </div>
           
           <BigThreeWidget />
           
           {/* Visitor XP Stub */}
           <div className="glass-card p-6 bg-zinc-900/50">
              <div className="flex justify-between items-center mb-3">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Visitor XP</span>
                 <span className="px-2 py-0.5 rounded bg-customCyan/10 text-customCyan text-[10px] font-mono border border-customCyan/20">Lv.1</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                 <div className="h-full w-1/4 bg-customCyan" />
              </div>
              <div className="flex justify-between text-[8px] font-mono text-zinc-600 uppercase">
                 <span>Visit #0</span>
                 <span>- XP</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
