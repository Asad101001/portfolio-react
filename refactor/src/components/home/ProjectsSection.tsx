import { ExternalLink, Github } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const projects = [
  {
    id: 'legaleaseai',
    title: 'LegalEaseAI',
    desc: 'Upload contracts for rapid AI risk-rating. Plain Urdu explanations, RAG chatbot, and downloadable PDF reports.',
    link: 'https://legal-ease-ai-iota.vercel.app/',
    repo: 'https://github.com/Asad101001/LegalEaseAI',
    image: '/images/projects/legalease.png',
    color: 'var(--cyan)',
    tags: ['Vanilla JS', 'LangChain', 'FAISS', 'RAG', 'FastAPI'],
  },
  {
    id: 'pollpulse',
    title: 'PollPulse',
    desc: 'Real-time polling platform on AWS with custom VPC, EC2 + RDS isolation, and chart-based analytics.',
    repo: 'https://github.com/Asad101001/pollpulse',
    image: '/images/projects/pollpulse.png',
    color: '#a855f7',
    tags: ['Node.js', 'Express', 'AWS', 'MySQL', 'Chart.js'],
  },
  {
    id: 'devpulse',
    title: 'DevPulse',
    desc: 'Developer telemetry dashboard using Llama 3.3 with a sharp industrial UI.',
    link: 'https://devpulse-app.onrender.com',
    repo: 'https://github.com/Asad101001/devpulse',
    image: '/images/projects/devpulse.png',
    color: '#FFD600',
    tags: ['React', 'Express', 'Llama 3.3', 'MongoDB'],
  },
  {
    id: 'mogscope',
    title: 'Mogscope',
    desc: 'Facial analytics + satirical LLM analysis with face-api.js and modern frontend tooling.',
    link: 'https://mogscope.vercel.app/',
    repo: 'https://github.com/Asad101001/mogscope',
    image: '/images/projects/mogscope.png',
    color: '#818cf8',
    tags: ['React', 'Tailwind', 'Three.js', 'Groq'],
  },
];

export default function ProjectsSection() {
  useReveal();

  return (
    <section id="projects" className="section-in py-24">
      <div className="ambient-glow"></div>
      <div className="section-inner">
        <div className="section-header">
          <div>
            <p className="label-xs">Work</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <a href="https://github.com/Asad101001?tab=repositories" target="_blank" rel="noopener noreferrer" className="view-all-link">
            All Repositories <ExternalLink size={14} />
          </a>
        </div>

        <div className="projects-grid stagger">
          {projects.map((project) => (
            <article key={project.id} className="project-card glass-card reveal">
              <div className="proj-img-wrap" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06), #18181b)' }}>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="proj-img"
                  onError={(e: any) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.parentNode?.querySelector('.proj-img-placeholder');
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="proj-img-placeholder" style={{ display: 'none' }}>
                  <span className="text-xs font-mono opacity-50">image unavailable</span>
                </div>
                <div className="proj-img-overlay"></div>
              </div>

              <div className="proj-body">
                <div className="proj-head">
                  <div className="proj-icon" style={{ background: `${project.color}25`, color: project.color }}>■</div>
                  <div>
                    <h3 className="proj-title">{project.title}</h3>
                    {project.link ? (
                      <p className="proj-live"><a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo ↗</a></p>
                    ) : (
                      <p className="proj-live" style={{ color: 'var(--text-muted)' }}>Cloud-Deployed Capstone</p>
                    )}
                  </div>
                </div>

                <p className="proj-desc">{project.desc}</p>

                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}><span className="tag-label">{tag}</span></span>
                  ))}
                </div>

                <div className="proj-links">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="proj-link-code">
                    <Github size={14} /> Code
                  </a>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-link-demo">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
