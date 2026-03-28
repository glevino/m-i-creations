import { useState, useEffect } from 'react'
import { fetchPhotosByCategory } from '../lib/contentful'

const reels = [
  'https://www.instagram.com/reel/DWb1Oj9joyB/',
  'https://www.instagram.com/reel/DQ8Rle-DcC9/',
  'https://www.instagram.com/reel/DOVw-R8jamG/',
]

function InstagramReels() {
  useEffect(() => {
    // Tell Instagram's embed script to process any new blockquotes
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <div className="gallery-section gallery-section--reels">
      <div className="gallery-section-label">
        <p className="section-eyebrow">Behind the scenes</p>
        <h2 className="gallery-section-title">Latest <em>Reels</em></h2>
      </div>
      <div className="reels-grid">
        {reels.map((url) => (
          <div className="reel-item" key={url}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
              data-instgrm-version="14"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Static fallbacks ──────────────────────────────────────────────────────────

const staticNails = [
  'nails.jpg',  'nails1.jpg',  'nails2.jpg',  'nails3.jpg',  'nails4.jpg',
  'nails5.jpg', 'nails6.jpg',  'nails7.jpg',  'nails8.jpg',  'nails9.jpg',
  'nails10.jpg','nails11.JPG', 'nails12.jpg', 'nails13.JPG', 'nails14.JPG', 'nails15.JPG',
].map((src, i) => ({ src: `/${src}`, alt: `Nail art ${i + 1}` }))

const staticHardgoods = [
  { src: '/bag.jpg',     alt: 'Custom Bag' },
  { src: '/basket.jpg',  alt: 'Custom Basket' },
  { src: '/basket2.jpg', alt: 'Custom Basket' },
  { src: '/pillow.jpg',  alt: 'Custom Pillow' },
  { src: '/shirt.JPG',   alt: 'Custom Shirt' },
  { src: '/ties.jpg',    alt: 'Custom Ties' },
  { src: '/ties2.jpg',   alt: 'Custom Ties' },
]

const staticLaser = [
  { src: '/pencils.jpg',     alt: 'Laser engraved pencils' },
  { src: '/notebook.png',    alt: 'Laser engraved notebook' },
  { src: '/waterbottle.png', alt: 'Laser engraved water bottle' },
]

// ── Hook ──────────────────────────────────────────────────────────────────────

function useGalleryPhotos(category, fallback) {
  const [photos, setPhotos] = useState(fallback)

  useEffect(() => {
    fetchPhotosByCategory(category)
      .then(cms => { if (cms.length > 0) setPhotos(cms) })
      .catch(() => {})
  }, [category])

  return photos
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Gallery() {
  const nails     = useGalleryPhotos('Nails',            staticNails)
  const hardgoods = useGalleryPhotos('Custom Creations', staticHardgoods)
  const laser     = useGalleryPhotos('Laser Engraving',  staticLaser)

  return (
    <div className="page-top">

      {/* ── PAGE HEADER ── */}
      <div className="gallery-page-header">
        <p className="section-eyebrow">Portfolio</p>
        <h1 className="section-title">The work<br /><em>speaks for itself</em></h1>
      </div>

      <InstagramReels />

      {/* ── NAILS ── */}
      <div className="gallery-section">
        <div className="gallery-section-label">
          <p className="section-eyebrow">Service</p>
          <h2 className="gallery-section-title">Nail <em>Art</em></h2>
        </div>
        <div className="gallery-photo-grid">
          {nails.map((photo, i) => (
            <div className="gallery-photo-item" key={i}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* ── CUSTOM CREATIONS ── */}
      <div className="gallery-section gallery-section--alt">
        <div className="gallery-section-label">
          <p className="section-eyebrow">Custom Creations</p>
          <h2 className="gallery-section-title">Apparel <em>{'&'} Hardgoods</em></h2>
        </div>
        <div className="gallery-photo-grid">
          {hardgoods.map((photo, i) => (
            <div className="gallery-photo-item" key={i}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* ── LASER ENGRAVING ── */}
      <div className="gallery-section">
        <div className="gallery-section-label">
          <p className="section-eyebrow">Laser Engraving</p>
          <h2 className="gallery-section-title">Engraved <em>Pieces</em></h2>
        </div>
        <div className="gallery-photo-grid">
          {laser.map((photo, i) => (
            <div className="gallery-photo-item" key={i}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
