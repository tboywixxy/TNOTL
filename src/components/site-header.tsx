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
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 68);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => mobileMenu.current?.removeAttribute("open");
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

        <details className="mobile-menu" ref={mobileMenu}>
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/" onClick={closeMobile}><small>I</small>Home</Link>
            <p>System</p>
            {systemLinks.map((item) => <Link href={item.href} key={item.href} onClick={closeMobile}><small>{item.number}</small>{item.label}</Link>)}
            <p>Company</p>
            {companyLinks.map((item) => <Link href={item.href} key={item.href} onClick={closeMobile}><small>{item.number}</small>{item.label}</Link>)}
            <Link className="button button-solid" href="/contact" onClick={closeMobile}>Get protected <Arrow /></Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
