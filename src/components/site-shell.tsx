import Link from "next/link";
import { Arrow } from "./icons";
import { FooterSignal } from "./footer-signal";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <FooterSignal />
        <p className="eyebrow">A human-controlled security system</p>
        <h2>Protect what<br /><em>matters.</em></h2>
        <Link className="round-link" href="/contact" aria-label="Contact TNOTL">
          <Arrow />
        </Link>
      </div>
      <div className="footer-grid">
        <div className="footer-brand-block">
          <Link className="wordmark footer-wordmark" href="/"><BrandLogo /><span>TNOTL<span className="wordmark-dot" /></span></Link>
          <p><i />Protection ready.<br />Human control, always.</p>
        </div>
        <div className="footer-nav-group">
          <p className="footer-label">System</p>
          <Link href="/system/door-alarm">Door Alarm</Link>
          <Link href="/system/indoor-camera">Indoor Camera</Link>
          <Link href="/system/visibility-reducer">Visibility Reducer</Link>
        </div>
        <div className="footer-nav-group">
          <p className="footer-label">Company</p>
          <Link href="/about">About</Link>
          <Link href="/philanthropy">Philanthropy</Link>
          <Link href="/use-cases">Use Cases</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="footer-signoff"><span>System logic</span>Alarm.<br />Verify.<br />Deploy.</p>
      </div>
      <div className="footer-legal">
        <span>© {new Date().getFullYear()} TNOTL</span>
        <span>Human control, by design.</span>
      </div>
    </footer>
  );
}

export function Eyebrow({ index, children }: { index?: string; children: React.ReactNode }) {
  return <p className="eyebrow">{index && <span>{index}</span>}{children}</p>;
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="text-link" href={href}>{children}<Arrow /></Link>;
}
