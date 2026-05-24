import { useState } from 'react'
import { site } from '../content/site'
import './Header.css'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#focus', label: 'Focus' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#open-source', label: 'Open Source' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header${menuOpen ? ' header-menu-open' : ''}`}>
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

        <button
          type="button"
          className="header-menu-btn"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="header-menu-icon" aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className="header-mobile-nav"
        aria-label="Mobile"
        hidden={!menuOpen}
      >
        <div className="container header-mobile-nav-inner">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
