
import { ChevronLeft, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectPrsPage() {
  return (
    <div className="pt-20">
      <Link to="/" className="flex items-center gap-2 text-customTextDim hover:text-customCyan transition-colors mb-8 group">
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-mono text-xs uppercase tracking-widest">Back to Dashboard</span>
      </Link>
      
      <div className="glass-card p-12 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-customCyan/10 flex items-center justify-center text-customCyan mb-6">
          <Zap size={32} />
        </div>
        <h1 className="text-4xl font-bold mb-4">Railway System Simulator</h1>
        <p className="text-customTextMuted max-w-lg mx-auto leading-relaxed">
          The Karachi Railway Simulation overhaul is now part of the refactored dashboard. 
          Integration details coming soon.
        </p>
      </div>
    </div>
  )
}
