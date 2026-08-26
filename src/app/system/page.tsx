import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { Eyebrow } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "The System",
  description: "One connected TNOTL system: detect, verify and respond under human control.",
};

const systemLinks = [
  ["I", "Door Alarm", "/system/door-alarm"],
  ["II", "Indoor Camera", "/system/indoor-camera"],
  ["III", "Visibility Reducer", "/system/visibility-reducer"],
] as const;

export default function SystemPage() {
  return (
    <main className="inner-page system-page">
      <section className="system-overview">
        <div className="system-overview-copy">
          <Eyebrow>System / Overview</Eyebrow>
          <h1>One system.<br /><em>Built around home.</em></h1>
          <p>Three connected products. One response you control.</p>
        </div>

        <figure className="system-neighborhood-sketch">
          <Image
            src="/images/illustrations/protected-neighborhood-sketch.png"
            alt="Charcoal illustration of a protected family home surrounded by neighbouring houses and mature trees"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 760px) 120vw, 64vw"
          />
        </figure>

        <nav className="system-overview-links" aria-label="Explore the TNOTL products">
          {systemLinks.map(([number, name, href]) => (
            <Link href={href} key={href}>
              <span>{number}</span>
              <strong>{name}</strong>
              <Arrow />
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
