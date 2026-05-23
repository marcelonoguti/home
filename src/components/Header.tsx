import { site } from '../content/site'
import { IconDownload } from './Icons'
import './Header.css'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="header-logo" aria-label={site.name}>
          <span className="header-logo-m">M</span>
          <span className="header-logo-n">N</span>
        </a>

        <nav className="header-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href={site.resumeUrl} className="btn btn-outline header-resume" download>
          <IconDownload />
          Resume
        </a>
      </div>
    </header>
  )
}
