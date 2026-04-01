import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, CheckCircle, BookOpen, Film, Tv, Trophy } from 'lucide-react'

// Subcomponents
function HeroMainCard() {
  const [typedText, setTypedText] = useState('')
  const phrases = ['Aspiring SWE | ML', 'Data Engineering Analyst', 'Cloud Practitioner', 'Open to roles']
  
  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeoutId: any;

    const typeLoop = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        if (currentCharIndex === currentPhrase.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeLoop, 1500); // Pause at end
          return;
        }
      } else {
        setTypedText(currentPhrase.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
      }
      timeoutId = setTimeout(typeLoop, isDeleting ? 40 : 100);
    };

    timeoutId = setTimeout(typeLoop, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="glass-card flex flex-col p-8 md:p-12 md:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden group"
    >
      <div className="absolute top-6 left-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-customLime animate-pulse"></span>
        Building & exploring
      </div>

      <div className="mt-12 mb-4">
        <h1 className="text-4xl md:text-6xl font-sans font-bold leading-tight">
          Muhammad<br />Asad Khan
        </h1>
        <div className="h-8 mt-4 font-mono text-xl text-customCyan font-medium flex items-center">
          {typedText}
          <motion.span 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-6 bg-customCyan inline-block ml-1"
          />
        </div>
      </div>

      <p className="text-customTextMuted font-mono text-sm uppercase tracking-widest mt-4">CS Student @ UBIT '28</p>
      <p className="text-customTextDim text-sm mt-3 leading-relaxed max-w-md">
        Python &middot; AWS &middot; Data Science &middot; AI/ML &middot; Networking
      </p>

      <div className="flex flex-wrap gap-4 mt-auto pt-8">
        <a href="https://github.com/Asad101001" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-full bg-customCyan text-black font-semibold hover:bg-customLime transition-colors">
          <Github size={18} />
          GitHub
        </a>
        <a href="https://linkedin.com/in/muhammadasadk/" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0e76a8] text-white font-semibold hover:bg-opacity-80 transition-opacity">
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
    </motion.div>
  )
}

function TerminalCard() {
  const lines = [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: 'Muhammad Asad Khan' },
    { type: 'cmd', text: 'cat focus.txt' },
    { type: 'out', text: 'Python · OOP · Data Science\nCloud (AWS) · AI · RAG' },
    { type: 'cmd', text: 'echo $LOCATION' },
    { type: 'out', text: 'Karachi, Pakistan 🇵🇰' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="glass-card flex flex-col overflow-hidden md:col-span-1 lg:col-span-1 lg:row-span-1 relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-customCyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="flex items-center justify-between px-4 py-3 bg-black/50 border-b border-white/5 backdrop-blur-md">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        </div>
        <span className="text-xs font-mono text-zinc-500">asad@2006 ~</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed overflow-y-auto w-full relative z-10">
        <div className="text-xs text-zinc-500 mb-4">Last login: {new Date().toDateString()} on ttys000</div>
        
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (i * 0.15), ease: "easeOut" }}
            className={`mb-[2px] ${line.type === 'out' ? 'text-zinc-400 ml-4 mb-3 whitespace-pre-line' : 'text-zinc-200'}`}
          >
            {line.type === 'cmd' ? (
              <><span className="text-customCyan font-semibold mr-2 drop-shadow-[0_0_5px_var(--cyan)]">asad@2006:~$</span>{line.text}</>
            ) : line.text}
          </motion.div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-zinc-200 mt-2 flex items-center"
        >
          <span className="text-customCyan font-semibold mr-2 drop-shadow-[0_0_5px_var(--cyan)]">asad@2006:~$</span>
          <motion.span animate={{opacity:[1,0]}} transition={{repeat:Infinity, duration:0.8}} className="w-2 h-4 bg-zinc-400 inline-block"></motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}

function ActivityHub() {
  const [activeIdx, setActiveIdx] = useState(0);
  
  const activities = [
    { icon: <BookOpen />, label: "Current Book", value: "1984 George Orwell" },
    { icon: <Film />, label: "Last Watched", value: "Dune: Part Two" },
    { icon: <Tv />, label: "Watching Series", value: "Severance" },
    { icon: <Trophy />, label: "FCB Watch", value: "Final: BAR 0-2 MAL" },
  ];

  useEffect(() => {
    const int = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % activities.length);
    }, 5000);
    return () => clearInterval(int);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
      className="glass-card flex flex-col p-6 w-full lg:col-span-1 relative"
    >
      <span className="text-xs font-mono uppercase tracking-widest text-customTextMuted mb-6 inline-block">Activity Hub</span>
      
      <div className="flex-grow flex items-center justify-center relative min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-6 w-full absolute inset-0"
          >
            <div className="w-16 h-16 rounded-xl bg-customBg flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
               <span className="text-2xl text-customCyan">{activities[activeIdx].icon}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-customCyan mb-1">{activities[activeIdx].label}</span>
              <span className="text-lg font-semibold text-white leading-tight">{activities[activeIdx].value}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {activities.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setActiveIdx(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIdx === i ? 'bg-customCyan w-6' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </motion.div>
  )
}

function BuildFocusCard() {
  const items = [
    "Solution-oriented Projects",
    "AI Integration & RAG Systems",
    "Cloud Architecture (AWS)"
  ]
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className="glass-card p-6 flex flex-col lg:col-span-1 relative overflow-hidden group"
    >
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-customCyan/10 blur-3xl rounded-full group-hover:bg-customCyan/20 transition-colors duration-500" />
      <span className="text-xs font-mono uppercase tracking-widest text-customTextMuted mb-4 relative z-10">Build Focus</span>
      <div className="flex flex-col gap-4 mt-2 relative z-10">
        {items.map((item, i) => (
          <motion.div 
             initial={{ opacity: 0, x: -10 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5 + (i * 0.1), type: "spring", stiffness: 100 }}
             key={i} 
             className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors cursor-default"
          >
             <div className="relative flex items-center justify-center">
               <span className="absolute inset-0 bg-customCyan/20 blur-sm rounded-full animate-pulse" />
               <CheckCircle size={16} className="text-customCyan flex-shrink-0 relative z-10" />
             </div>
             <span className="text-sm font-medium text-zinc-300 group-hover/item:text-white transition-colors">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  return (
    <section id="hero" className="w-full relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 auto-rows-fr gap-5 w-full">
        <HeroMainCard />
        <TerminalCard />
        <ActivityHub />
        <BuildFocusCard />
      </div>
    </section>
  )
}
