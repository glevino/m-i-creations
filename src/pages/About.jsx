import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'

const photos = [
  'mg_family.jpg',
  'nye_family.jpg',
  'wedding_family.jpg',
  'museum_family.jpg',
  'farm_family.jpg',
  'beach_family.jpg',
]

function FamilyCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(i => (i + 1) % photos.length), [])
  const prev = useCallback(() => setCurrent(i => (i - 1 + photos.length) % photos.length), [])

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="family-carousel">
      <div className="carousel-track">
        {photos.map((src, i) => (
          <div
            key={src}
            className={`carousel-slide${i === current ? ' carousel-slide--active' : ''}`}
          >
            <img src={`/${src}`} alt={`M&I family photo ${i + 1}`} />
          </div>
        ))}

        <button className="carousel-arrow carousel-arrow--prev" onClick={prev} aria-label="Previous photo">
          ‹
        </button>
        <button className="carousel-arrow carousel-arrow--next" onClick={next} aria-label="Next photo">
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {photos.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' carousel-dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="page-top">
      <div className="story" style={{ maxWidth: '1300px', margin: '0 auto', padding: 'var(--section-pad) clamp(20px, 5vw, 80px)' }}>

        <div className="story-visual">
          <FamilyCarousel />
        </div>

        <div className="story-text">
          <p className="section-eyebrow">Our Story</p>
          <h1 className="section-title">
            More than a<br /><em>business</em>
          </h1>
          <p className="story-body">
            At its core, M{'&'}I Cute Creations is about helping you express your style, your way.
            <br /><br />
            Named after our daughters, Melinda and Ishany, this business is rooted in creativity,
            individuality, and the idea that the little details matter. What started as a passion
            at home has grown into something we're proud to share, built around family, care, and
            creating things that feel personal.
            <br /><br />
            On the nail side, that means more than just a set — it's a full experience. From
            manicures and pedicures to acrylic, polygel, and gel applications, every appointment
            is designed to feel relaxing, intentional, and tailored to you. With pedispa treatments
            and paraffin services, we bring a spa-like level of care to your hands and feet.
            <br /><br />
            On the custom side, we take that same level of intention and apply it to the pieces you
            wear and use every day. From personalized apparel like shirts, hoodies, and hats to
            custom items like stickers, mugs, and more, everything is created to reflect your style —
            not something off a shelf.
            <br /><br />
            Whether you're sitting down for a nail appointment or ordering a custom piece, the goal
            is the same: thoughtful details, a personal touch, and something that feels uniquely yours.
            <br /><br />
            From fingertips to everyday pieces, we focus on creating a level of quality and care
            that carries through everything we do.
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--indigo)', marginBottom: '36px', lineHeight: '1.6' }}>
            Inspired by Melinda and Ishany. Made for you.
          </p>
          <Link to="/contact" className="btn-primary">Work with us</Link>
        </div>

      </div>
    </div>
  )
}
