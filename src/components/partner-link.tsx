import { Arrow } from "./icons";

export function PartnerLink({ href, children, className = "text-link" }: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const available = /^https:\/\//i.test(href);
  if (!available) {
    return <div className="partner-pending"><span className={className} role="link" aria-disabled="true">{children}<Arrow /></span><small>Website coming soon</small></div>;
  }
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<Arrow /><span className="visually-hidden"> (opens in a new tab)</span></a>;
}
