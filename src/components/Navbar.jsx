import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
        <Link to="/" className="nav-logo">
          <img src="/3.png" alt="M&I Cute Creations" className="nav-logo-img" />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/about">Our Story</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li>
            <NavLink to="/contact" className={({ isActive }) =>
              isActive ? 'nav-cta active' : 'nav-cta'
            }>
              Get in Touch
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.instagram.com/myi_cute_creations/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social"
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className={`nav-hamburger${menuOpen ? ' nav-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${menuOpen ? ' nav-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="nav-drawer-links">
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/about">Our Story</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/contact">Get in Touch</NavLink></li>
          <li>
            <a
              href="https://www.instagram.com/myi_cute_creations/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-drawer-social"
            >
              <InstagramIcon /> Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
