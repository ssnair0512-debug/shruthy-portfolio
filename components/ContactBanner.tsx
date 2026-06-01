import ContactCopyEmail from '@/components/ui/ContactCopyEmail'

export default function ContactBanner() {
  return (
    <section className="contact-banner" id="contact" data-screen-label="Contact">
      <div className="contact-comment">
        <div className="who">
          <span className="av">S</span>
          <span className="nm">Shruthy · note</span>
        </div>
        <p>Open to contract work, full-time roles, and interesting conversations about hard design problems.</p>
      </div>
      <div className="contact-plate">
        <span className="deco">☺</span>
        <h2>CONTACT</h2>
        <span className="deco" style={{ background: 'var(--y)' }}>⬦</span>
      </div>
      <div className="contact-actions">
        <ContactCopyEmail />
        <a href="https://linkedin.com/in/shruthynair" target="_blank" rel="noopener noreferrer">
          LinkedIn <span className="ar">↗</span>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Résumé <span className="ar">↗</span>
        </a>
      </div>
    </section>
  )
}
