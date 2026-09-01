"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./icons";

const systemLinks = [
  { label: "System overview", detail: "The complete response chain", href: "/system", number: "I" },
  { label: "Door Alarm", detail: "Forced-entry detection", href: "/system/door-alarm", number: "II" },
  { label: "Indoor Camera", detail: "Real-time verification", href: "/system/indoor-camera", number: "III" },
  { label: "Visibility Reducer", detail: "Human-controlled response", href: "/system/visibility-reducer", number: "IV" },
] as const;

const companyLinks = [
  { label: "About TNOTL", detail: "Purpose and principles", href: "/about", number: "I" },
  { label: "Use Cases", detail: "Homes, schools and property", href: "/use-cases", number: "II" },
  { label: "Contact", detail: "Plan your protection", href: "/contact", number: "III" },
] as const;

function Mark({ ghost = false }: { ghost?: boolean }) {
  return <span className={ghost ? "nav-ghost-wordmark" : "masthead-wordmark"}>TNOTL<i /></span>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [condensed, setCondensed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [systemOpen, setSystemOpen] = useState(() => pathname.startsWith("/system"));
  const [companyOpen, setCompanyOpen] = useState(() => ["/about", "/contact", "/use-cases"].includes(pathname));
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const mobileDrawer = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 68);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1101px)");
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };

    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButton.current?.focus();
      }

      if (event.key === "Tab") {
        const focusable = Array.from(
          mobileDrawer.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
        ).filter((element) => element.offsetParent !== null);
        const first = focusable[0];
        const last = focusable.at(-1);

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);
  const isCurrent = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`header-system${condensed ? " is-condensed" : ""}`}>
      <div className="brand-masthead">
        <Link href="/" aria-label="TNOTL home"><Mark /></Link>
        <span className="masthead-code">HUMAN LIFE PROTECTION / TN–I</span>
      </div>

      <div className="nav-panel">
        <Mark ghost />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-cluster nav-cluster-left">
            <Link className={isCurrent("/") ? "active" : ""} href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
            <div className={`nav-group${pathname.startsWith("/system") ? " active" : ""}`}>
              <Link href="/system">System <span aria-hidden="true">⌄</span></Link>
              <div className="nav-dropdown system-dropdown">
                <div className="dropdown-intro"><small>PRODUCT SYSTEM</small><p>Three coordinated layers. One human decision.</p></div>
                <div className="dropdown-links">
                  {systemLinks.map((item) => <Link href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}><span>{item.number}</span><div><strong>{item.label}</strong><small>{item.detail}</small></div><Arrow /></Link>)}
                </div>
              </div>
            </div>
            <Link href="/#sequence">How it works</Link>
          </div>

          <div className="nav-cluster nav-cluster-right">
            <Link className={pathname === "/use-cases" ? "active" : ""} href="/use-cases" aria-current={pathname === "/use-cases" ? "page" : undefined}>Use cases</Link>
            <div className={`nav-group${["/about", "/contact"].includes(pathname) ? " active" : ""}`}>
              <Link href="/about">Company <span aria-hidden="true">⌄</span></Link>
              <div className="nav-dropdown company-dropdown">
                <div className="dropdown-links">
                  {companyLinks.map((item) => <Link href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}><span>{item.number}</span><div><strong>{item.label}</strong><small>{item.detail}</small></div><Arrow /></Link>)}
                </div>
              </div>
            </div>
            <Link className="nav-contact" href="/contact">Get protected <Arrow /></Link>
          </div>
        </nav>

        <button
          ref={menuButton}
          className={`mobile-menu-toggle${mobileOpen ? " is-open" : ""}`}
          type="button"
          aria-label="Open navigation"
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <span /><span />
        </button>

        <button
          className={`mobile-menu-backdrop${mobileOpen ? " is-open" : ""}`}
          type="button"
          aria-label="Close navigation"
          tabIndex={mobileOpen ? 0 : -1}
          onClick={closeMobile}
        />

        <aside
          ref={mobileDrawer}
          className={`mobile-drawer${mobileOpen ? " is-open" : ""}`}
          id="mobile-navigation"
          aria-hidden={!mobileOpen}
          aria-modal="true"
          role="dialog"
        >
          <div className="mobile-drawer-head">
            <Mark />
            <button ref={closeButton} type="button" aria-label="Close navigation" onClick={closeMobile}>
              <span /><span />
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <Link className="mobile-primary-link" href="/" onClick={closeMobile} aria-current={pathname === "/" ? "page" : undefined}>
              <small>01</small><span>Home</span><Arrow />
            </Link>

            <div className={`mobile-nav-group${systemOpen ? " is-open" : ""}`}>
              <div className="mobile-nav-heading">
                <Link href="/system" onClick={closeMobile} aria-current={pathname === "/system" ? "page" : undefined}><small>02</small><span>System</span></Link>
                <button type="button" aria-label="Toggle System links" aria-expanded={systemOpen} onClick={() => setSystemOpen((open) => !open)}><i /></button>
              </div>
              <div className="mobile-submenu" inert={!systemOpen ? true : undefined}>
                <div>
                  {systemLinks.map((item) => (
                    <Link href={item.href} key={item.href} onClick={closeMobile} aria-current={pathname === item.href ? "page" : undefined}>
                      <small>{item.number}</small><span><strong>{item.label}</strong><em>{item.detail}</em></span><Arrow />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link className="mobile-primary-link" href="/#sequence" onClick={closeMobile}>
              <small>03</small><span>How it works</span><Arrow />
            </Link>
            <Link className="mobile-primary-link" href="/use-cases" onClick={closeMobile} aria-current={pathname === "/use-cases" ? "page" : undefined}>
              <small>04</small><span>Use cases</span><Arrow />
            </Link>

            <div className={`mobile-nav-group${companyOpen ? " is-open" : ""}`}>
              <div className="mobile-nav-heading">
                <Link href="/about" onClick={closeMobile} aria-current={pathname === "/about" ? "page" : undefined}><small>05</small><span>Company</span></Link>
                <button type="button" aria-label="Toggle Company links" aria-expanded={companyOpen} onClick={() => setCompanyOpen((open) => !open)}><i /></button>
              </div>
              <div className="mobile-submenu" inert={!companyOpen ? true : undefined}>
                <div>
                  {companyLinks.map((item) => (
                    <Link href={item.href} key={item.href} onClick={closeMobile} aria-current={pathname === item.href ? "page" : undefined}>
                      <small>{item.number}</small><span><strong>{item.label}</strong><em>{item.detail}</em></span><Arrow />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="mobile-drawer-foot">
            <Link className="button button-solid" href="/contact" onClick={closeMobile}>Get protected <Arrow /></Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
