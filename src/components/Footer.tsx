export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-12 px-6 text-center"
      style={{ backgroundColor: '#3d3530' }}
    >
      {/* Logo */}
      <div className="mb-6">
        <div
          className="inline-flex flex-col items-center justify-center w-12 h-12 rounded-sm mb-3"
          style={{ backgroundColor: '#C4956A' }}
        >
          <span
            className="text-white leading-none"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.7rem', letterSpacing: '0.05em' }}
          >
            momo
          </span>
          <span
            className="text-white leading-none"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.45rem', letterSpacing: '0.12em' }}
          >
            DESIGN
          </span>
        </div>
        <p
          className="text-white/60 text-xs tracking-widest"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Web Designer / momo
        </p>
      </div>

      {/* Nav links */}
      <nav className="flex justify-center gap-6 mb-8">
        {['WORKS', 'ABOUT', 'SERVICES', 'SKILLS', 'CONTACT'].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="text-white/50 hover:text-white/80 transition-colors duration-200 text-xs tracking-widest"
            style={{ fontFamily: "'DM Sans', sans-serif", textDecoration: 'none' }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Divider */}
      <div className="w-16 h-px mx-auto mb-6" style={{ backgroundColor: '#C4956A', opacity: 0.4 }} />

      {/* Copyright */}
      <p
        className="text-white/30 text-xs"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        © {year} momo. All Rights Reserved.
      </p>
    </footer>
  )
}
