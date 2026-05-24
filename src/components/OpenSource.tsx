import { site } from '../content/site'
import { IconArrowRight, IconGithub } from './Icons'
import './OpenSource.css'

export function OpenSource() {
  return (
    <section id="open-source" className="open-source section">
      <div className="container">
        <p className="section-eyebrow open-source-eyebrow">Open Source</p>

        <ul className="open-source-list">
          {site.openSource.map((project) => (
            <li key={project.name} className="open-source-item">
              <div className="open-source-item-head">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="open-source-name"
                >
                  <IconGithub />
                  {project.name}
                </a>
                <span className="open-source-period">{project.period}</span>
              </div>

              <p className="open-source-desc">{project.description}</p>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="open-source-cta"
              >
                View on GitHub
                <IconArrowRight />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
