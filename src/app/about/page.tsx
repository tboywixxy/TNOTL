import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { Eyebrow } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About",
  description: "Meet TNOTL and discover its work with Vigil 360 and The Guardians' Keeper.",
};

const partnerships = [
  {
    number: "01",
    role: "Software partnership",
    name: "Vigil 360",
    description: "Vigil 360 extends TNOTL’s protection ecosystem into connected software—helping people access real-time awareness, trusted contacts and emergency support when clarity matters most.",
    href: "/vigil360",
    cta: "Explore Vigil 360",
  },
  {
    number: "02",
    role: "Community impact",
    name: "The Guardians’ Keeper",
    description: "The Guardians’ Keeper is TNOTL’s social-impact arm, supporting initiatives centred on safer communities and the welfare, dignity and future of the people who protect them.",
    href: "/philanthropy",
    cta: "Explore TGK",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <section className="about-hero">
        <div>
          <Eyebrow>Company / About TNOTL</Eyebrow>
          <h1>Protection built<br /><em>around people.</em></h1>
        </div>
        <p>TNOTL is a Nigerian security company connecting physical technology, digital awareness and community impact.</p>
      </section>

      <section className="about-company" aria-labelledby="about-company-title">
        <Eyebrow>Who we are</Eyebrow>
        <div>
          <h2 id="about-company-title">One company.<br /><em>A connected approach to security.</em></h2>
          <div className="about-company-copy">
            <p>TNOTL develops human-centred security solutions for homes, schools, commercial spaces and communities. Our work is designed to make important moments clearer and keep the final response under human control.</p>
            <p>We bring together purpose-built physical security products, connected software and social-impact work. Each part has a distinct role, but all three serve the same goal: helping people protect what matters.</p>
          </div>
        </div>
      </section>

      <section className="about-partnerships" aria-labelledby="about-partnerships-title">
        <div className="about-partnerships-heading">
          <Eyebrow>Our ecosystem</Eyebrow>
          <h2 id="about-partnerships-title">Built stronger<br /><em>through partnership.</em></h2>
          <p>TNOTL works across technology and community support to create a broader, more practical approach to protection.</p>
        </div>
        <div className="about-partnership-grid">
          {partnerships.map((partner) => (
            <Link className="about-partner-card" href={partner.href} key={partner.name}>
              <div className="about-partner-meta"><span>{partner.number}</span><small>{partner.role}</small></div>
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
              <strong>{partner.cta}<Arrow /></strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
