import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const education = [
  {
    year: '2025 – Present',
    degree: 'B.S Computer Science',
    inst: 'Department of Computer Science UBIT, University of Karachi',
    logo: './images/institutions/ubit.jpg',
    color: 'var(--cyan)'
  },
  {
    year: '2023 – 2024',
    degree: 'Intermediate (Pre-Engineering)',
    inst: 'Govt. Degree Science/Commerce College, Gulshan Block 7',
    logo: './images/institutions/college.jpg',
    color: '#a855f7'
  },
  {
    year: '2009 – 2022',
    degree: 'Matric (SSC)',
    inst: 'Karachi Public School',
    logo: './images/institutions/kps.jpg',
    color: '#f97316'
  }
]

export default function EducationSection() {
  return (
    <section id="education" className="w-full py-20 relative">
      <div className="section-header mb-12">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-customCyan mb-2">Background</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
      </div>

      <div className="relative border-l-2 border-white/5 ml-4 pl-8 space-y-12 py-4">
        {education.map((edu, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div 
              className="absolute -left-[41px] top-0 w-4 h-4 rounded-full border-2 border-customBg ring-4 ring-customBg2"
              style={{ background: edu.color }}
            />

            <div className="glass-card p-8 group hover:border-customCyan/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={14} className="text-customTextDim" />
                <span className="text-xs font-mono font-bold text-customTextDim uppercase tracking-widest">{edu.year}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white group-hover:text-customCyan transition-colors mb-6">{edu.degree}</h3>
              
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/5 bg-white/5 p-1">
                    <img src={edu.logo} alt={edu.inst} className="w-full h-full object-cover rounded" />
                 </div>
                 <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-customTextMuted leading-tight">{edu.inst}</p>
                    <div className="flex items-center gap-1.5 text-[10px] text-customTextDim uppercase font-bold tracking-tight">
                       <MapPin size={10} /> Karachi, Pakistan
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
