import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#works',    label: 'WORKS' },
  { href: '#about',    label: 'ABOUT' },
  { href: '#services', label: 'SERVICES' },
  { href: '#skills',   label: 'SKILLS' },
  { 
    href: 'https://forms.gle/6Cusc1YtWjnZ37Qx6', // GoogleフォームのURL
    label: 'CONTACT' 
  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <div
            className="w-10 h-10 flex flex-col items-center justify-center rounded-sm"
            style={{ backgroundColor: '#C4956A' }}
          >
            <span
              className="text-white leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.65rem', letterSpacing: '0.05em' }}
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
          <span
            className="hidden sm:block text-sm tracking-widest"
            style={{ fontFamily: "'DM Sans', sans-serif", color: scrolled ? '#3d3530' : 'white', letterSpacing: '0.15em' }}
          >
            momo
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover-underline text-xs tracking-widest transition-colors duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: scrolled ? '#6b5f58' : 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-5 h-px transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            style={{ backgroundColor: scrolled ? '#3d3530' : 'white' }}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            style={{ backgroundColor: scrolled ? '#3d3530' : 'white' }}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            style={{ backgroundColor: scrolled ? '#3d3530' : 'white' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: 'rgba(250, 245, 238, 0.98)' }}
      >
        <ul className="list-none m-0 p-0 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block px-8 py-3 text-xs tracking-widest"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5f58', textDecoration: 'none' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
