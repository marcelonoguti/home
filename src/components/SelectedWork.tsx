import { site } from '../content/site'
import {
  IconArrowRight,
  IconBrain,
  IconCalendar,
  IconLayers,
} from './Icons'
import './SelectedWork.css'

const projectIcons = {
  calendar: IconCalendar,
  brain: IconBrain,
  layers: IconLayers,
} as const

export function SelectedWork() {
  return (
    <section id="work" className="work section">
      <div className="container">
        <div className="work-header">
          <p className="section-eyebrow">Selected Work</p>
          <a
            href={site.projectsUrl}
            target="_blank"
            rel="noreferrer"
            className="work-link"
          >
            View all projects
            <IconArrowRight />
          </a>
        </div>

        <div className="work-grid">
          {site.projects.map((project) => {
            const Icon = projectIcons[project.icon]

            return (
              <article key={project.title} className="work-card">
                <div className="work-card-icon">
                  <Icon />
                </div>
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-desc">{project.description}</p>
                <div className="work-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
