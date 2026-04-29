import React, { useState, useEffect } from 'react';
import './navbar.css';

const homeIcon = "/Images/Home.png";

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [openSub, setOpenSub] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const ids = NAV_ITEMS.map(i => i.href.replace('#', ''));

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);

    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    setDrawerOpen(false);
    setOpenSub(null);
  };

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {

          setScrolled(window.scrollY > 20);

          const total = document.documentElement.scrollHeight - window.innerHeight;
          setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);

          let current = 'home';

          for (let i = ids.length - 1; i >= 0; i--) {
            const id = ids[i];
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 150 && rect.bottom >= 150) {
                current = id;
                break;
              }
            }
          }

          setActiveLink(current);
          ticking = false;

        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
  }, [drawerOpen]);

  const toggleSub = (label) => {
    setOpenSub(prev => (prev === label ? null : label));
  };

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-bar" style={{ width: `${scrollPct}%` }} />

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Logo */}
          <div className="logo" onClick={(e) => handleScrollTo(e, 'home')}>
            <div className="logo-icon">
              <img src={homeIcon} alt="Home" />
            </div>

            <div className="logo-text">
              <span className="logo-name">Techbrain Networks</span>
              <span className="logo-tag">Sports Technology</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-links">
            {NAV_ITEMS.map(item => (
              <li
                key={item.label}
                className={[
                  item.dropdown ? 'has-dropdown' : '',
                  activeLink === item.href.replace('#', '') ? 'active' : ''
                ].join(' ')}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href.replace('#', ''))}
                >
                  {item.label}
                  {item.dropdown && <span className="arrow">▼</span>}
                </a>

                {item.dropdown && (
                  <ul className={`dropdown ${openDropdown === item.label ? 'open' : ''}`}>
                    {item.dropdown.map((d, i) =>
                      d.divider
                        ? <li key={i} className="dropdown-divider" />
                        : (
                          <li key={i}>
                            <a
                              href={d.href}
                              className={d.className || ''}
                              onClick={(e) => handleScrollTo(e, d.href.replace('#', ''))}
                            >
                              {d.label}
                            </a>
                          </li>
                        )
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="nav-cta">
            <button
              className="nav-btn-primary"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              Contact Us
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${drawerOpen ? 'open' : ''}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <span /><span /><span />
          </button>

        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.label}>
              {item.dropdown ? (
                <>
                  <span
                    className="toggle-sub"
                    onClick={() => toggleSub(item.label)}
                  >
                    {item.label}
                    <span className={`carrot ${openSub === item.label ? 'open' : ''}`}>▶</span>
                  </span>

                  <ul className={`mobile-sub ${openSub === item.label ? 'open' : ''}`}>
                    {item.dropdown.filter(d => !d.divider).map((d, i) => (
                      <li key={i}>
                        <a
                          href={d.href}
                          onClick={(e) => handleScrollTo(e, d.href.replace('#', ''))}
                        >
                          {d.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href.replace('#', ''))}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="mobile-cta">
          <button
            className="nav-btn-primary"
            onClick={(e) => handleScrollTo(e, 'contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}