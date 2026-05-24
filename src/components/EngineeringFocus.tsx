import { site } from '../content/site'
import './EngineeringFocus.css'

export function EngineeringFocus() {
  return (
    <section id="focus" className="focus section">
      <div className="container">
        <p className="section-eyebrow">Engineering Focus</p>

        <div className="focus-grid">
          {site.engineeringFocus.map((item) => (
            <article key={item.title} className="focus-card">
              <h3 className="focus-card-title">{item.title}</h3>
              <p className="focus-card-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
