import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Webサイト制作',
    subtitle: 'Website Design',
    description:
      'STUDIOを使ったノーコードWebサイト制作。ターゲットに伝わるUI/UX設計と、運用しやすい構造で納品します。',
    features: ['STUDIO', 'レスポンシブ対応', 'SEO基礎設定', '運用サポート'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'ビジュアルデザイン',
    subtitle: 'Visual Design',
    description:
      'Instagram投稿・バナー・スライド資料など、ブランドの世界観を統一したビジュアルコンテンツを制作します。',
    features: ['Canva', 'Adobe Illustrator', 'SNS投稿デザイン', 'スライド資料'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    title: 'ショート動画制作',
    subtitle: 'Short Video',
    description:
      'VrewやKlingAIなどのAIツールを活用したショート動画・リール制作。テキスト原稿から自動字幕付き動画を効率的に仕上げます。',
    features: ['Vrew', 'AI活用', '字幕自動生成', 'SNS最適化'],
  },
]

export default function ServicesSection() {
  useScrollReveal()

  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: '#faf5ee' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 fade-in">
          <p
            className="text-xs tracking-[0.3em] mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#C4956A' }}
          >
            SERVICES
          </p>
          <h2
            className="section-title text-4xl md:text-5xl mb-4"
            style={{ color: '#3d3530' }}
          >
            サービス内容
          </h2>
          <div className="section-divider" />
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-5" style={{ color: '#C4956A' }}>
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#3d3530' }}
              >
                {service.title}
              </h3>
              <p
                className="text-xs tracking-widest mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#C4956A' }}
              >
                {service.subtitle}
              </p>

              {/* Divider */}
              <div className="w-8 h-px mb-4" style={{ backgroundColor: '#e8ddd4' }} />

              {/* Description */}
              <p className="text-sm leading-loose mb-5" style={{ color: '#6b5f58' }}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs" style={{ color: '#9e8f86' }}>
                    <span style={{ color: '#C4956A' }}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 fade-in">
          <p className="text-sm mb-6" style={{ color: '#9e8f86' }}>
            ご依頼・ご相談はお気軽にお問い合わせください
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-3 text-xs tracking-widest transition-all duration-300"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: '#C4956A',
              color: 'white',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#a87850' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C4956A' }}
          >
            CONTACT
          </a>
        </div>
      </div>
    </section>
  )
}
