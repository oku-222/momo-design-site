import { useScrollReveal } from '../hooks/useScrollReveal'

const qualifications = [
  'Webデザイン技能検定',
  '色彩検定 3級',
  '秘書検定 2級',
  '証券外務員資格正会員Ⅱ種',
]

const hobbies = [
  { icon: '♪', label: '音楽鑑賞' },
  { icon: '✿', label: '写真撮影' },
  { icon: '◎', label: 'ウォーキング' },
  { icon: '✦', label: 'カフェ巡り' },
]

const designStyle = [
  '余白を活かしたミニマルな構成',
  '読み手の視線を誘導する情報設計',
  '色彩理論に基づいたカラーパレット選定',
  'ターゲットに刺さるコピーとビジュアルの融合',
]

export default function AboutSection() {
  useScrollReveal()

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 fade-in">
          <p
            className="text-xs tracking-[0.3em] mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#C4956A' }}
          >
            ABOUT
          </p>
          <h2
            className="section-title text-4xl md:text-5xl mb-4"
            style={{ color: '#3d3530' }}
          >
            プロフィール
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Profile text */}
          <div className="fade-in">
            <div className="mb-8">
              <h3
                className="text-2xl mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#3d3530' }}
              >
                momo
              </h3>
              <p
                className="text-xs tracking-widest mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#C4956A' }}
              >
                Web Designer
              </p>
              <p className="text-sm leading-loose mb-4" style={{ color: '#6b5f58' }}>
                神奈川在住。大手企業にてWeb担当として、公式サイト・社内イントラ等
                計10サイト以上の更新・運用を15年以上にわたり担当。
              </p>
              <p className="text-sm leading-loose mb-4" style={{ color: '#6b5f58' }}>
                サイトリニューアル（3回）における要件定義・制作会社へのディレクション・
                進行管理を主導。アクセス解析に基づいたUI/UX改善と運用フローの構築を実践してきました。
              </p>
              <p className="text-sm leading-loose" style={{ color: '#6b5f58' }}>
                現在は職業訓練校にてJavaScript・Node.jsの最新技術と生成AIを活用した
                業務効率化を専攻し、スキルのアップデートを行っております。
              </p>
            </div>

            {/* Qualifications */}
            <div className="mb-8">
              <h4
                className="text-xs tracking-widest mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#C4956A' }}
              >
                QUALIFICATIONS
              </h4>
              <div className="flex flex-wrap gap-2">
                {qualifications.map((q) => (
                  <span key={q} className="qual-badge">
                    <span style={{ color: '#C4956A' }}>✦</span>
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Design style + Hobbies */}
          <div className="fade-in" style={{ transitionDelay: '120ms' }}>
            {/* Design style */}
            <div
              className="p-8 mb-8"
              style={{ backgroundColor: '#faf5ee', border: '1px solid #e8ddd4' }}
            >
              <h4
                className="text-xs tracking-widest mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#C4956A' }}
              >
                DESIGN STYLE
              </h4>
              <ul className="space-y-3">
                {designStyle.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#6b5f58' }}>
                    <span style={{ color: '#C4956A', flexShrink: 0, marginTop: '2px' }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hobbies */}
            <div>
              <h4
                className="text-xs tracking-widest mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#C4956A' }}
              >
                HOBBIES
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {hobbies.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-3 p-3"
                    style={{ backgroundColor: '#faf5ee', border: '1px solid #e8ddd4' }}
                  >
                    <span style={{ color: '#C4956A', fontSize: '1rem' }}>{h.icon}</span>
                    <span className="text-xs" style={{ color: '#6b5f58' }}>{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
