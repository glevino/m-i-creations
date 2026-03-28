import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchPhotosByCategory } from '../lib/contentful'

// ── Static fallbacks (used until Contentful has photos) ──────────────────────

const staticNailPhotos = [
  'nails.jpg',  'nails1.jpg',  'nails2.jpg',  'nails3.jpg',
  'nails4.jpg', 'nails5.jpg',  'nails6.jpg',  'nails7.jpg',
  'nails8.jpg', 'nails9.jpg',  'nails10.jpg', 'nails11.JPG',
  'nails12.jpg','nails13.JPG', 'nails14.JPG', 'nails15.JPG',
].map((src, i) => ({ src: `/${src}`, alt: `Nail art ${i + 1}` }))

const staticHardgoodsPhotos = [
  { src: '/bag.jpg',     alt: 'Custom Bag' },
  { src: '/basket.jpg',  alt: 'Custom Basket' },
  { src: '/basket2.jpg', alt: 'Custom Basket' },
  { src: '/pillow.jpg',  alt: 'Custom Pillow' },
  { src: '/shirt.JPG',   alt: 'Custom Shirt' },
  { src: '/ties.jpg',    alt: 'Custom Ties' },
  { src: '/ties2.jpg',   alt: 'Custom Ties' },
]

const staticLaserPhotos = [
  { src: '/pencils.jpg',     alt: 'Laser engraved pencils' },
  { src: '/notebook.png',    alt: 'Laser engraved notebook' },
  { src: '/waterbottle.png', alt: 'Laser engraved water bottle' },
]

// ── Hook: fetch from Contentful, fall back to static ─────────────────────────

function useServicePhotos(category, fallback) {
  const [photos, setPhotos] = useState(fallback)

  useEffect(() => {
    fetchPhotosByCategory(category)
      .then(cms => { if (cms.length > 0) setPhotos(cms) })
      .catch(() => {}) // silently keep static fallback on error
  }, [category])

  return photos
}

// ── Carousel ──────────────────────────────────────────────────────────────────

function ServiceCarousel({ photos, interval = 3200 }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    const timer = setInterval(() => setCurrent(i => (i + 1) % photos.length), interval)
    return () => clearInterval(timer)
  }, [photos.length, interval])

  return (
    <div className="svc-carousel">
      {photos.map((photo, i) => (
        <div key={i} className={`svc-carousel-slide${i === current ? ' svc-carousel-slide--active' : ''}`}>
          <img src={photo.src} alt={photo.alt} loading="lazy" />
        </div>
      ))}
      {photos.length > 1 && (
        <div className="svc-carousel-dots">
          {photos.map((_, i) => (
            <button
              key={i}
              className={`svc-carousel-dot${i === current ? ' svc-carousel-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Services() {
  const nailPhotos      = useServicePhotos('Nails',             staticNailPhotos)
  const hardgoodsPhotos = useServicePhotos('Custom Creations',  staticHardgoodsPhotos)
  const laserPhotos     = useServicePhotos('Laser Engraving',   staticLaserPhotos)

  return (
    <div className="page-top">

      {/* ── PAGE HEADER ── */}
      <div className="services-page-header">
        <p className="section-eyebrow">What We Offer</p>
        <h1 className="section-title">Three passions,<br /><em>one brand</em></h1>
      </div>

      {/* ── NAIL ART — media left, content right ── */}
      <div className="service-feature">
        <div className="service-feature-media">
          <ServiceCarousel photos={nailPhotos} interval={3000} />
        </div>
        <div className="service-feature-content">
          <div className="service-number">01</div>
          <h2 className="service-name">Nail Art {'&'}<br /><em>Beauty</em></h2>
          <p className="service-desc">
            Professional nail artistry with an eye for detail. From clean classics
            to elaborate custom designs, every appointment is designed to feel
            relaxing, intentional, and tailored to you.
          </p>
          <div className="service-tags">
            <span className="tag">Manicures</span>
            <span className="tag">Pedicures</span>
            <span className="tag">Acrylic</span>
            <span className="tag">Polygel</span>
            <span className="tag">Gel</span>
            <span className="tag">Pedispa</span>
            <span className="tag">Paraffin</span>
            <span className="tag">Custom Designs</span>
            <span className="tag">Seasonal Sets</span>
          </div>
          <Link to="/contact" className="service-link">Book a session</Link>
        </div>
      </div>

      {/* ── CUSTOM CREATIONS — content left, media right ── */}
      <div className="service-feature service-feature--alt">
        <div className="service-feature-content">
          <div className="service-number">02</div>
          <h2 className="service-name">Custom Creations<br /><em>{'&'} Design</em></h2>
          <p className="service-desc">
            Personalized apparel, accessories, and custom pieces crafted to your
            vision. From shirts and hoodies to mugs and stickers, everything is
            created to reflect your style — not something off a shelf.
          </p>
          <div className="service-tags">
            <span className="tag">T-Shirts {'&'} Hoodies</span>
            <span className="tag">Hats</span>
            <span className="tag">Stickers</span>
            <span className="tag">Mugs</span>
            <span className="tag">Bags</span>
            <span className="tag">Pillows</span>
            <span className="tag">Logo Design</span>
            <span className="tag">Custom Orders</span>
          </div>
          <Link to="/contact" className="service-link">Start a custom order</Link>
        </div>
        <div className="service-feature-media">
          <ServiceCarousel photos={hardgoodsPhotos} interval={3600} />
        </div>
      </div>

      {/* ── LASER ENGRAVING — media left, content right ── */}
      <div className="service-feature">
        <div className="service-feature-media">
          <ServiceCarousel photos={laserPhotos} interval={4000} />
        </div>
        <div className="service-feature-content">
          <div className="service-number">03</div>
          <h2 className="service-name">Laser<br /><em>Engraving</em></h2>
          <p className="service-desc">
            Precision engraving on a wide range of materials — wood, acrylic,
            leather, metal, and more. Whether it's a personalized gift, a custom
            keepsake, or branded pieces for your business, every mark is made
            with intention.
          </p>
          <div className="service-tags">
            <span className="tag">Wood</span>
            <span className="tag">Acrylic</span>
            <span className="tag">Leather</span>
            <span className="tag">Metal</span>
            <span className="tag">Personalized Gifts</span>
            <span className="tag">Keepsakes</span>
            <span className="tag">Branded Items</span>
            <span className="tag">Custom Text {'&'} Logos</span>
          </div>
          <Link to="/contact" className="service-link">Start an engraving order</Link>
        </div>
      </div>

    </div>
  )
}
