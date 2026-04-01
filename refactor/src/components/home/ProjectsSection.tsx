import { useReveal } from '../../hooks/useReveal';

const projects = [
  {
    id: 'legaleaseai',
    title: 'LegalEaseAI',
    desc: 'Upload contracts for rapid AI risk-rating. Provides plain Urdu explanations, a RAG-powered document chatbot, and downloadable PDF reports.',
    link: 'https://legal-ease-ai-iota.vercel.app/',
    repo: 'https://github.com/Asad101001/LegalEaseAI',
    details: '/projects/legaleaseai.html',
    image: './images/projects/legalease.png',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m14 13-5 5 5 5"/><path d="m20 13-5 5 5 5"/><path d="m3 3 7.41 7.41"/><path d="M3 21 21 3"/></svg>,
    color: '#00ff41',
    tags: ['FastAPI', 'LangChain', 'FAISS', 'RAG']
  },
  {
    id: 'pollpulse',
    title: 'PollPulse',
    desc: 'Real-time polling platform built on AWS. Features a custom VPC with EC2 and RDS MySQL isolation. Delivers live data visualization via Chart.js.',
    repo: 'https://github.com/Asad101001/pollpulse',
    details: '/projects/pollpulse.html',
    image: './images/projects/pollpulse.png',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    color: '#a855f7',
    tags: ['Node.js', 'AWS', 'MySQL', 'Chart.js']
  },
  {
    id: 'devpulse',
    title: 'DevPulse',
    desc: 'A developer telemetry dashboard. Analyzes commit narratives to calculate cognitive load using Llama 3.3. Built with an industrial aesthetic.',
    link: 'https://devpulse-app.onrender.com',
    repo: 'https://github.com/Asad101001/devpulse',
    details: '/projects/devpulse.html',
    image: './images/projects/devpulse.png',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    color: '#FFD600',
    tags: ['React', 'Express', 'Llama 3.3', 'MongoDB']
  },
  {
    id: 'mogscope',
    title: 'Mogscope',
    desc: 'Facial analytics platform using face-api.js for landmarks. Combines ML insights with LLM-generated satirical analysis.',
    link: 'https://mogscope.vercel.app/',
    repo: 'https://github.com/Asad101001/mogscope',
    details: '/projects/mogscope.html',
    image: './images/projects/mogscope.png',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
    color: '#818cf8',
    tags: ['React', 'Three.js', 'TensorFlow', 'Groq']
  },
  {
    id: 'aws-hosting',
    title: 'AWS Static Website',
    desc: 'Cloud hosting infrastructure project. Manual provisioning of Ubuntu EC2 instances with Nginx configuration and SSH hardening.',
    repo: 'https://github.com/Asad101001/aws-static-website',
    details: '/projects/aws.html',
    image: './images/projects/aws.png',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19c.4 0 .7-.1.9-.3.2-.2.3-.5.3-.9V7.1a1.2 1.2 0 0 0-1.2-1.2h-10A1.2 1.2 0 0 0 6.3 7v10.5c0 .4.1.7.3.9.2.2.5.3.9.3h10Z"/><path d="M11 11h2"/><path d="M11 15h2"/><path d="M6.3 10h11.4"/></svg>,
    color: '#FF9900',
    tags: ['AWS', 'Nginx', 'Ubuntu', 'SSH']
  }
];

export default function ProjectsSection() {
  useReveal();

  return (
    <section id="projects" className="section-in py-20 relative">
      <div className="section-header flex items-end justify-between mb-12">
        <div>
          <p className="label-xs text-xs font-mono uppercase tracking-[0.3em] text-customCyan mb-2">Work</p>
          <h2 className="section-title text-4xl font-bold">Projects</h2>
        </div>
        <a 
          href="https://github.com/Asad101001?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] font-mono uppercase font-bold tracking-widest text-zinc-500 hover:text-customCyan transition-colors flex items-center gap-2"
        >
          All Repositories 
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div 
            key={project.id} 
            className="project-card glass-card reveal"
            style={{ '--delay': `${i * 100}ms` } as React.CSSProperties}
            onClick={() => window.open(project.details, '_self')}
          >
            <div className="proj-img-wrap">
              <img 
                src={project.image} 
                alt={project.title} 
                className="proj-img"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.querySelector('.proj-img-placeholder')?.setAttribute('style', 'display:flex'); }}
              />
              <div className="proj-img-placeholder hidden items-center justify-center bg-zinc-900 absolute inset-0">
                 <span className="text-zinc-700 font-mono text-[10px]">NO_SIGNAL</span>
              </div>
              <div className="proj-img-overlay"></div>
              <div className="proj-badge">DEPLOYED</div>
            </div>

            <div className="proj-body">
              <div className="proj-head">
                 <div 
                   className="proj-icon" 
                   style={{ background: `rgba(${parseInt(project.color.slice(1,3),16)}, ${parseInt(project.color.slice(3,5),16)}, ${parseInt(project.color.slice(5,7),16)}, 0.1)`, color: project.color }}
                 >
                   {project.icon}
                 </div>
                 <h3 className="proj-title">{project.title}</h3>
              </div>
              <p className="proj-desc">{project.desc}</p>
              
              <div className="proj-tags">
                {project.tags.map(tag => (
                   <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="proj-links">
                <a href={project.repo} onClick={(e) => e.stopPropagation()} className="proj-link-code">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
                  Code
                </a>
                {project.link && (
                  <a href={project.link} onClick={(e) => e.stopPropagation()} className="proj-link-demo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
