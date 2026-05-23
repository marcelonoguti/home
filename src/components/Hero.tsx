import { site } from '../content/site'
import { CodeWindow } from './CodeWindow'
import {
  IconArrowRight,
  IconDownload,
  IconGithub,
  IconLinkedin,
  IconMail,
} from './Icons'
import './Hero.css'

export function Hero() {
  return (
    <section id="about" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-role">
            <span className="hero-role-dot" aria-hidden="true" />
            {site.role}
          </p>

          <h1 className="hero-name">{site.name}</h1>

          <p className="hero-headline">
            {site.headline}
            <span className="hero-cursor" aria-hidden="true">
              |
            </span>
          </p>

          <p className="hero-bio">{site.bio}</p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              View My Work
              <IconArrowRight />
            </a>
            <a href={site.resumeUrl} className="btn btn-outline" download>
              <IconDownload />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost hero-touch">
              Get In Touch
              <IconArrowRight />
            </a>
          </div>

          <div className="hero-social">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGithub />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedin />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email">
              <IconMail />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <CodeWindow />
        </div>
      </div>
    </section>
  )
}
