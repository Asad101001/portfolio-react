import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Palette, Monitor, Sun, Zap, Leaf } from 'lucide-react'

const themes = [
  { id: 'cyberpunk', name: 'Cyberpunk', icon: <Zap size={14} />, color: '#00ff41' },
  { id: 'sunset', name: 'Sunset', icon: <Sun size={14} />, color: '#ff5f6d' },
  { id: 'industrial', name: 'Industrial', icon: <Monitor size={14} />, color: '#ffd600' },
  { id: 'emerald', name: 'Emerald', icon: <Leaf size={14} />, color: '#10b981' }
]

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Tools', href: '#tech' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar({ activeTheme, setActiveTheme }: { activeTheme: string, setActiveTheme: (theme: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isThemeOpen, setIsThemeOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sync theme with body class (optional here since App does it, but keeps it safe)
  useEffect(() => {
    const body = document.body;
    themes.forEach(t => body.classList.remove(`theme-${t.id}`));
    body.classList.add(`theme-${activeTheme}`);
  }, [activeTheme])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-customCyan flex items-center justify-center font-bold text-black group-hover:scale-110 transition-transform">
             A
           </div>
           <span className="font-mono text-sm font-bold tracking-tighter text-white group-hover:text-customCyan transition-colors">
             ASAD<span className="text-customCyan">.DEV</span>
           </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative group px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 transition-all hover:text-white overflow-hidden"
            >
              <span className="relative z-10">{link.name}</span>
              <motion.div 
                className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"
              />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <div className="relative">
            <button 
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-md border border-white/5 text-zinc-400 hover:text-customCyan hover:border-customCyan/30 transition-all"
            >
              <Palette size={18} />
            </button>
            <AnimatePresence>
              {isThemeOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-3 w-48 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2"
                >
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 px-3 py-2 mb-1 border-b border-white/5">Select Theme</p>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setActiveTheme(t.id);
                        setIsThemeOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono transition-colors ${
                        activeTheme === t.id ? 'bg-customCyan/10 text-customCyan' : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {t.icon}
                        {t.name}
                      </div>
                      {activeTheme === t.id && <div className="w-1.5 h-1.5 rounded-full bg-customCyan" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-md border border-white/5 text-zinc-400"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900/90 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-white hover:text-customCyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
