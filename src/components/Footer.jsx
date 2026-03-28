export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-logo">
        M<span>{'&'}</span>I Cute Creations
      </div>
      <p className="footer-tagline">Your Style, Your Way.</p>
      <p className="footer-copy">© {year} M&amp;I Cute Creations · All rights reserved</p>
    </footer>
  )
}
