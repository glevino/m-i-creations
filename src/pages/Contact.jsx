import { useState } from 'react'

const FORMSPREE = 'https://formspree.io/f/xpqoqoez'

function useForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    const data = new FormData(e.target)
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return { status, handleSubmit }
}

function NailsForm() {
  const { status, handleSubmit } = useForm()

  if (status === 'success') return <FormSuccess />

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="formType" value="Nail Appointment" />

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="n-firstName">First Name</label>
          <input id="n-firstName" name="firstName" type="text" className="form-input" placeholder="Melinda" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="n-lastName">Last Name</label>
          <input id="n-lastName" name="lastName" type="text" className="form-input" placeholder="Smith" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="n-email">Email</label>
          <input id="n-email" name="email" type="email" className="form-input" placeholder="you@email.com" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="n-phone">Phone</label>
          <input id="n-phone" name="phone" type="tel" className="form-input" placeholder="(555) 000-0000" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="n-service">Service</label>
        <select id="n-service" name="service" className="form-select" required>
          <option value="">Select a service...</option>
          <option>Manicure</option>
          <option>Pedicure</option>
          <option>Acrylic Set</option>
          <option>Polygel Set</option>
          <option>Gel</option>
          <option>Pedispa</option>
          <option>Paraffin Treatment</option>
          <option>Custom Nail Design</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="n-date">Preferred Date</label>
          <input id="n-date" name="preferredDate" type="date" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="n-time">Preferred Time</label>
          <select id="n-time" name="preferredTime" className="form-select" required>
            <option value="">Select a time...</option>
            <option>Morning (9am – 12pm)</option>
            <option>Early Afternoon (12pm – 3pm)</option>
            <option>Late Afternoon (3pm – 6pm)</option>
            <option>Evening (6pm – 8pm)</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="n-notes">
          Special Requests <span className="form-optional">(optional)</span>
        </label>
        <textarea
          id="n-notes"
          name="notes"
          className="form-textarea"
          placeholder="Any design ideas, inspo photos, or details we should know..."
        />
      </div>

      {status === 'error' && <FormError />}

      <button className="form-submit" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Request Appointment →'}
      </button>
    </form>
  )
}

function ProductForm() {
  const { status, handleSubmit } = useForm()

  if (status === 'success') return <FormSuccess />

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="formType" value="Custom Order" />

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="p-firstName">First Name</label>
          <input id="p-firstName" name="firstName" type="text" className="form-input" placeholder="Melinda" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="p-lastName">Last Name</label>
          <input id="p-lastName" name="lastName" type="text" className="form-input" placeholder="Smith" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="p-email">Email</label>
          <input id="p-email" name="email" type="email" className="form-input" placeholder="you@email.com" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="p-phone">Phone</label>
          <input id="p-phone" name="phone" type="tel" className="form-input" placeholder="(555) 000-0000" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="p-product">I'm interested in</label>
        <select id="p-product" name="product" className="form-select" required>
          <option value="">Select a product...</option>
          <option>T-Shirts / Hoodies</option>
          <option>Hats</option>
          <option>Stickers</option>
          <option>Mugs</option>
          <option>Bags</option>
          <option>Pillows</option>
          <option>Laser Engraving</option>
          <option>Logo Design</option>
          <option>Something else</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="p-quantity">
          Estimated Quantity <span className="form-optional">(optional)</span>
        </label>
        <select id="p-quantity" name="quantity" className="form-select">
          <option value="">Not sure yet</option>
          <option>1 – 5</option>
          <option>6 – 20</option>
          <option>21 – 50</option>
          <option>50+</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="p-message">Tell us about your order</label>
        <textarea
          id="p-message"
          name="message"
          className="form-textarea"
          placeholder="What are you envisioning? Colors, text, logos, references — the more detail the better..."
          required
        />
      </div>

      {status === 'error' && <FormError />}

      <button className="form-submit" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Inquiry →'}
      </button>
    </form>
  )
}

function FormSuccess() {
  return (
    <div className="contact-form">
      <div className="form-success">
        <span className="success-icon">🎀</span>
        <h3>Message sent!</h3>
        <p>
          Thank you for reaching out. We'll get back to you within 24 hours
          to talk through the details.
        </p>
      </div>
    </div>
  )
}

function FormError() {
  return (
    <p style={{ color: 'var(--pink)', fontSize: '0.85rem', marginBottom: '12px' }}>
      Something went wrong. Please try again or reach out directly.
    </p>
  )
}

export default function Contact() {
  const [tab, setTab] = useState('nails')

  return (
    <div className="contact-page">
      <div className="contact">

        <div className="contact-info">
          <p className="section-eyebrow">Get In Touch</p>
          <h1 className="section-title">
            Let's make<br /><em>something</em>
          </h1>
          <p className="contact-body">
            Ready to book an appointment or start a custom order? Pick the form
            that fits and we'll get back to you as soon as possible.
            <br /><br />
            Every project starts with a conversation — tell us what you're
            envisioning and we'll make it happen.
          </p>
          <div className="contact-detail">
            <div className="icon">💬</div>
            <span>Usually responds within 24 hours</span>
          </div>
        </div>

        <div className="contact-form-wrap">
          <div className="form-tabs">
            <button
              className={`form-tab${tab === 'nails' ? ' form-tab--active' : ''}`}
              onClick={() => setTab('nails')}
              type="button"
            >
              💅 Book Nails
            </button>
            <button
              className={`form-tab${tab === 'products' ? ' form-tab--active' : ''}`}
              onClick={() => setTab('products')}
              type="button"
            >
              🛍️ Custom Order
            </button>
          </div>

          {tab === 'nails' ? <NailsForm /> : <ProductForm />}
        </div>

      </div>
    </div>
  )
}
