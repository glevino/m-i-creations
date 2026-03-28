import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />

        <div className="hero-text">
          <p className="hero-eyebrow">Personal Style · From Fingertips to Fabric</p>
          <h1 className="hero-title">
            <em>M{'&'}I</em>
            <br />
            <span className="accent">Cute Creations</span>
          </h1>
          <p className="hero-sub">
            Nail care that feels like a spa. Custom goods that feel like you.
            Made with intention, by a family that cares about the details.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">Book Nails</Link>
            <Link to="/contact" className="btn-ghost">Start a Custom Order</Link>
          </div>
          <p className="hero-tagline">Your Style, Your Way.</p>
        </div>

        <div className="hero-image">
          <div className="hero-visual">
            <img src="/main_logo.png" alt="M&amp;I Cute Creations" className="hero-logo-main" />
            <div className="hero-photo-strip">
              <div className="hero-photo-tile"><img src="/nails4.jpg"   alt="Nail art" loading="eager" /></div>
              <div className="hero-photo-tile"><img src="/nails9.jpg"   alt="Nail art" loading="eager" /></div>
              <div className="hero-photo-tile"><img src="/nails13.JPG"  alt="Nail art" loading="eager" /></div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      {/* ── SERVICES — two bold photo panels ── */}
      <section className="home-services">
        <div className="home-service-panel">
          <img src="/nails8.jpg" alt="Nail Care" className="home-service-bg" loading="lazy" />
          <div className="home-service-overlay" />
          <div className="home-service-content">
            <p className="home-service-label">Nail Care</p>
            <h2 className="home-service-title">
              A little luxury,<br /><em>at your fingertips</em>
            </h2>
            <p className="home-service-sub">
              Manicures, pedicures, acrylics, polygel, pedispa &amp; paraffin treatments —
              every appointment designed around you.
            </p>
            <Link to="/services" className="home-service-cta">Book a Session →</Link>
          </div>
        </div>

        <div className="home-service-panel">
          <img src="/shirt.JPG" alt="Custom Goods" className="home-service-bg" loading="lazy" />
          <div className="home-service-overlay" />
          <div className="home-service-content">
            <p className="home-service-label">Custom Goods</p>
            <h2 className="home-service-title">
              Wear what<br /><em>feels like you</em>
            </h2>
            <p className="home-service-sub">
              Embroidered apparel, hats, stickers, mugs, and custom pieces —
              nothing off a shelf, everything made for you.
            </p>
            <Link to="/services" className="home-service-cta">Start an Order →</Link>
          </div>
        </div>
      </section>

      {/* ── STORY — short & centered ── */}
      <section className="home-story-wrap">
        <div className="home-story">
          <p className="section-eyebrow">The M{'&'}I Story</p>
          <h2 className="home-story-title">
            Named after our daughters.<br /><em>Made for you.</em>
          </h2>
          <p className="home-story-body">
            M{'&'}I Cute Creations is named after Melinda and Ishany. What started as
            a passion at home grew into something we're proud to share — a small family brand
            built around care, creativity, and the kind of personal touch you don't find everywhere.
          </p>
          <Link to="/about" className="btn-ghost">Our Full Story</Link>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="home-gallery-wrap">
        <div className="home-gallery-header">
          <p className="section-eyebrow">The Work</p>
          <h2 className="section-title">Crafted with<br /><em>intention</em></h2>
        </div>
        <div className="home-gallery-grid">
          {[
            { src: 'nails2.jpg',   label: 'Nail Art' },
            { src: 'nails6.jpg',   label: 'Nail Art' },
            { src: 'nails11.JPG',  label: 'Nail Art' },
            { src: 'basket.jpg',   label: 'Custom Goods' },
            { src: 'ties.jpg',     label: 'Custom Goods' },
            { src: 'nails14.JPG',  label: 'Nail Art' },
          ].map(({ src, label }, i) => (
            <div className="home-gallery-item" key={i}>
              <img src={`/${src}`} alt={label} loading="lazy" />
              <div className="home-gallery-overlay"><span>{label}</span></div>
            </div>
          ))}
        </div>
        <Link to="/gallery" className="btn-ghost">See the Full Gallery</Link>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="home-cta">
        <p className="section-eyebrow">Ready?</p>
        <h2 className="home-cta-title">
          Your style,<br /><em>your way.</em>
        </h2>
        <div className="home-cta-actions">
          <Link to="/contact" className="btn-primary">Book Nails</Link>
          <Link to="/contact" className="home-cta-ghost">Start a Custom Order</Link>
        </div>
      </section>
    </>
  )
}
