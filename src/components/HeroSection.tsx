/**
 * HeroSection.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * ヒーロー画像は /public/works/hero.png に配置してください。
 * 画像がない場合はグラデーション背景にフォールバックします。
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./works/hero.png')" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(61,53,48,0.55) 0%, rgba(196,149,106,0.3) 50%, rgba(61,53,48,0.45) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-white/80 text-xs tracking-[0.3em] mb-6 uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Web Designer Portfolio
        </p>

        {/* Main catch copy */}
        <h1
          className="text-white mb-6 leading-snug"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '0.04em',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          伝わるデザインで<br />サポートいたします
        </h1>

        {/* Divider */}
        <div className="w-10 h-px bg-white/60 mx-auto mb-6" />

        {/* Name & title */}
        <p
          className="text-white/90 text-sm tracking-[0.2em]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Web Designer / momo
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#works"
            className="inline-block px-8 py-3 text-xs tracking-widest transition-all duration-300"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: '#C4956A',
              color: 'white',
              textDecoration: 'none',
              border: '1px solid #C4956A',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#C4956A'
              e.currentTarget.style.color = 'white'
            }}
          >
            WORKS を見る
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 text-xs tracking-widest transition-all duration-300"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: 'transparent',
              color: 'white',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.6)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            お問い合わせ
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-white/60 text-xs tracking-widest"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          SCROLL
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  )
}
