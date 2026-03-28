import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo">
        <img src="/3.png" alt="M&I Cute Creations" className="nav-logo-img" />
      </Link>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  )
}
