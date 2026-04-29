import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    category: 'Design & Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    skills: [
      { name: 'Canva',                  level: 95 },
      { name: 'STUDIO',                 level: 85 },
      { name: 'SharePoint',             level: 80 },
      { name: 'Adobe Illustrator',      level: 70 },
    ],
  },
  {
    category: 'Video & AI',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    skills: [
      { name: 'Vrew',     level: 90 },
      { name: 'ChatGPT',  level: 92 },
      { name: 'Gemini',   level: 85 },
      { name: 'Claude',   level: 80 },
    ],
  },
  {
    category: 'Business Tools',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    skills: [
      { name: 'Microsoft Word',       level: 95 },
      { name: 'Microsoft Excel',      level: 90 },
      { name: 'Microsoft PowerPoint', level: 95 },
    ],
  },
]

export default function SkillsSection() {
  useScrollReveal()

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 fade-in">
          <p
            className="text-xs tracking-[0.3em] mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#C4956A' }}
          >
            SKILLS
          </p>
          <h2
            className="section-title text-4xl md:text-5xl mb-4"
            style={{ color: '#3d3530' }}
          >
            スキルセット
          </h2>
          <div className="section-divider" />
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.category}
              className="fade-in"
              style={{ transitionDelay: `${ci * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div style={{ color: '#C4956A' }}>{cat.icon}</div>
                <h3
                  className="text-sm tracking-widest"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#3d3530' }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skills with progress bars */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm" style={{ color: '#6b5f58' }}>
                        {skill.name}
                      </span>
                      <span
                        className="text-xs"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: '#C4956A' }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1 rounded-full overflow-hidden"
                      style={{ backgroundColor: '#e8ddd4' }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: '#C4956A',
                          transition: 'width 1s ease',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill tags */}
        <div className="mt-14 fade-in">
          <p
            className="text-center text-xs tracking-widest mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#9e8f86' }}
          >
            TOOLS & TECHNOLOGIES
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Canva', 'STUDIO', 'Adobe Illustrator', 'SharePoint',
              'Vrew', 'ChatGPT', 'Gemini', 'Claude',
              'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint',
              'JavaScript', 'Node.js', 'HTML / CSS',
            ].map((tag) => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
