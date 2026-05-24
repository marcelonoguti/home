import { site } from '../content/site'
import './EngineeringFocus.css'

export function EngineeringFocus() {
  return (
    <section id="focus" className="focus section" aria-labelledby="focus-heading">
      <div className="container">
        <h2 id="focus-heading" className="section-eyebrow">Engineering Focus</h2>

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
