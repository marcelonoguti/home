import { site } from '../content/site'
import {
  IconCloud,
  IconCode,
  IconDatabase,
  IconEngineering,
  IconSparkles,
} from './Icons'
import './Skills.css'

const skillIcons = {
  code: IconCode,
  database: IconDatabase,
  cloud: IconCloud,
  engineering: IconEngineering,
  sparkles: IconSparkles,
} as const

export function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <p className="section-eyebrow skills-eyebrow">Skills</p>

        <div className="skills-grid">
          {site.skillGroups.map((group) => {
            const Icon = skillIcons[group.icon]

            return (
              <div key={group.title} className="skills-column">
                <div className="skills-column-head">
                  <Icon />
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
