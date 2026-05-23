import { site } from '../content/site'
import { IconChevronUp, IconGithub, IconLinkedin, IconMail } from './Icons'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-cta">
          <div className="footer-cta-copy">
            <h2>Let&apos;s build something great.</h2>
            <p>
              Whether you&apos;re hiring or want to collaborate, I&apos;d love to hear
              from you.
            </p>
          </div>

          <ul className="footer-links">
            <li>
              <a href={`mailto:${site.email}`}>
                <IconMail />
                <span>
                  <strong>Email</strong>
                  {site.email}
                </span>
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                <IconLinkedin />
                <span>
                  <strong>LinkedIn</strong>
                  linkedin.com/in/marcelonoguti
                </span>
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer">
                <IconGithub />
                <span>
                  <strong>GitHub</strong>
                  github.com/marcelonoguti
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bar">
          <p>© {year} {site.name}. Built with care.</p>
          <a href="#" className="footer-top" aria-label="Back to top">
            <IconChevronUp />
          </a>
        </div>
      </div>
    </footer>
  )
}
