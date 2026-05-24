import { site } from '../content/site'
import './Experience.css'

export function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <p className="section-eyebrow">Experience</p>

        <ol className="experience-list">
          {site.experience.map((item, index) => (
            <li key={`${item.company}-${item.period}`} className="experience-item">
              <div className="experience-timeline">
                <span className="experience-dot" aria-hidden="true" />
                {index < site.experience.length - 1 && (
                  <span className="experience-line" aria-hidden="true" />
                )}
              </div>

              <div className="experience-period">{item.period}</div>

              <div className="experience-main">
                <h3 className="experience-role">{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-summary">{item.summary}</p>
              </div>

              <ul className="experience-achievements">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
