import { motion } from 'framer-motion'
import { Github, Linkedin, MessageSquare, Instagram, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full py-12 relative overflow-hidden border-t border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Animated Building Blocks */}
        <div className="flex gap-2 mb-8 h-8 items-end">
           {[...Array(5)].map((_, i) => (
             <motion.div 
               key={i}
               animate={{ 
                 height: [12, 24, 12],
                 opacity: [0.3, 1, 0.3]
               }}
               transition={{ 
                 duration: 1.5, 
                 repeat: Infinity, 
                 delay: i * 0.2,
                 ease: "easeInOut"
               }}
               className="w-1.5 rounded-full bg-customCyan shadow-[0_0_10px_rgba(16,185,129,0.5)]"
             />
           ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 mb-8 text-zinc-500">
           <a href="https://github.com/Asad101001" target="_blank" className="hover:text-customCyan transition-colors"><Github size={20} /></a>
           <a href="https://linkedin.com/in/muhammadasadk/" target="_blank" className="hover:text-customCyan transition-colors"><Linkedin size={20} /></a>
           <a href="https://discord.com/users/1390327957062418654" target="_blank" className="hover:text-customCyan transition-colors"><MessageSquare size={20} /></a>
           <a href="https://instagram.com/muhammadasad.k_/" target="_blank" className="hover:text-customCyan transition-colors"><Instagram size={20} /></a>
        </div>

        <div className="flex flex-col items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-600">
           <span>Designed & Built by Muhammad Asad Khan</span>
           <div className="flex items-center gap-2">
              <span>Refactored to React</span>
              <Heart size={10} className="text-red-500 fill-red-500" />
              <span>{currentYear}</span>
           </div>
        </div>

        {/* Bottom Tagline */}
        <p className="mt-8 text-[8px] font-mono text-zinc-800 uppercase tracking-widest text-center">
           Iterative progress is the only constant.
        </p>
      </div>
    </footer>
  )
}
