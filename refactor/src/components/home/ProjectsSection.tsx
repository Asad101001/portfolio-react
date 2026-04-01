import { motion } from 'framer-motion'
import { ExternalLink, Github, Gavel, BarChart3, Activity, Cloud, Eye } from 'lucide-react'


const projects = [
  {
    id: 'legaleaseai',
    title: 'LegalEaseAI',
    desc: 'Upload contracts for rapid AI risk-rating. Provides plain Urdu explanations, a RAG-powered document chatbot, and downloadable PDF reports.',
    link: 'https://legal-ease-ai-iota.vercel.app/',
    repo: 'https://github.com/Asad101001/LegalEaseAI',
    details: '/projects/legaleaseai.html',
    image: './images/projects/legalease.png',
    icon: <Gavel size={20} />,
    color: '#00ff41',
    tags: ['FastAPI', 'LangChain', 'FAISS', 'RAG', 'Python']
  },
  {
    id: 'pollpulse',
    title: 'PollPulse',
    desc: 'Real-time polling platform built on AWS. Features a custom VPC with EC2 and RDS MySQL isolation. Delivers live data visualization via Chart.js.',
    repo: 'https://github.com/Asad101001/pollpulse',
    details: '/projects/pollpulse.html',
    image: './images/projects/pollpulse.png',
    icon: <BarChart3 size={20} />,
    color: '#a855f7',
    tags: ['Node.js', 'Express', 'AWS', 'MySQL', 'Chart.js']
  },
  {
    id: 'devpulse',
    title: 'DevPulse',
    desc: 'A developer telemetry dashboard. Analyzes commit narratives to calculate cognitive load using Llama 3.3. Built with an industrial aesthetic.',
    link: 'https://devpulse-app.onrender.com',
    repo: 'https://github.com/Asad101001/devpulse',
    details: '/projects/devpulse.html',
    image: './images/projects/devpulse.png',
    icon: <Activity size={20} />,
    color: '#FFD600',
    tags: ['React', 'Express', 'Llama 3.3', 'MongoDB Atlas']
  },
  {
    id: 'mogscope',
    title: 'Mogscope',
    desc: 'Facial analytics platform using face-api.js for 68-point landmark detection. Combines ML insights with LLM-generated satirical analysis.',
    link: 'https://mogscope.vercel.app/',
    repo: 'https://github.com/Asad101001/mogscope',
    details: '/projects/mogscope.html',
    image: './images/projects/mogscope.png',
    icon: <Eye size={20} />,
    color: '#818cf8',
    tags: ['React', 'Three.js', 'TensorFlow', 'Groq AI']
  },
  {
    id: 'aws-hosting',
    title: 'AWS Static Website',
    desc: 'Cloud hosting infrastructure project. Manual provisioning of Ubuntu EC2 instances with Nginx configuration and SSH hardening.',
    repo: 'https://github.com/Asad101001/aws-static-website',
    details: '/projects/aws.html',
    image: './images/projects/aws.png',
    icon: <Cloud size={20} />,
    color: '#FF9900',
    tags: ['AWS', 'Nginx', 'Ubuntu Linux', 'Vanilla JS']
  }
]

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="project-card glass-card flex flex-col group cursor-pointer overflow-hidden"
      onClick={() => window.open(project.details, '_self')}
    >
      {/* Image Wrap */}
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
      </div>

      {/* Details Link Overlay */}
      <a 
        href={project.details} 
        className="flex items-center gap-2 px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-wider transition-colors border-b border-black/20"
        style={{ 
          background: `linear-gradient(90deg, ${project.color}15, transparent)`,
          color: project.color
        }}
      >
        <span className="text-base">🔍</span> View More Details
      </a>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start gap-4 mb-4">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" 
            style={{ 
              background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`,
              color: project.color
            }}
          >
            {project.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            {project.link && (
              <a 
                href={project.link} 
                className="text-[10px] font-mono text-zinc-500 hover:text-customCyan transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {project.link.replace('https://', '')} ↗
              </a>
            )}
          </div>
        </div>

        <p className="text-xs text-customTextMuted leading-relaxed line-clamp-3 mb-6">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tags.map((tag: string) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-customTextDim"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 mt-auto border-t border-white/5">
          <a 
            href={project.repo} 
            className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-customText hover:text-customCyan transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={12} />
            Code
          </a>
          {project.link && (
            <a 
              href={project.link} 
              className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-customText hover:text-customCyan transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 relative">
      <div className="section-header flex items-end justify-between mb-12">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-customCyan mb-2">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>
        <a 
          href="https://github.com/Asad101001?tab=repositories" 
          target="_blank" 
          className="text-[10px] font-mono uppercase font-bold tracking-widest text-zinc-500 hover:text-customCyan transition-colors flex items-center gap-2"
        >
          All Repositories <ExternalLink size={12} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
