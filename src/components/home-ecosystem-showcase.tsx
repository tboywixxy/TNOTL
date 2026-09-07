import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./icons";

const ventures = [
  { type: "Software / In partnership with", title: "Vigil 360", description: "Real-time awareness that connects people with trusted contacts, information, and emergency services when it matters.", href: "/vigil360", mark: "V360", theme: "vigil" },
  { type: "Hardware / Current focus", title: "Visibility Reducer", description: "A human-controlled response that rapidly reduces visibility, helping occupants regain time, distance, and control.", href: "/system/visibility-reducer", image: "/images/visibility-reducer-home.png", alt: "A Visibility Reducer filling a home entrance with dense obscuring mist", theme: "hardware" },
] as const;

type Venture = (typeof ventures)[number];

function VentureFeature({ venture }: { venture: Venture }) {
  return (
    <article className={`home-venture home-venture-${venture.theme}`}>
      {"image" in venture ? (
        <div className="home-venture-image"><Image src={venture.image} alt={venture.alt} fill sizes="100vw" /></div>
      ) : (
        <div className="home-venture-graphic" aria-hidden="true"><i /><i /><i /><span>{venture.mark}</span></div>
      )}
      <div className="home-venture-copy">
        <p className="eyebrow">{venture.type}</p>
        <h3>{venture.title}</h3>
        <p>{venture.description}</p>
        <Link className="home-venture-link" href={venture.href}>Explore <Arrow /></Link>
      </div>
    </article>
  );
}

export function HomeTgkShowcase() {
  return (
    <section className="home-keeper" aria-labelledby="home-keeper-title">
      <div className="home-keeper-topline">
        <p className="eyebrow">Philanthropy / TNOTL&apos;s social impact arm</p>
        <span>People at the heart of protection</span>
      </div>
      <div className="home-keeper-body">
        <div className="home-keeper-copy">
          <h2 id="home-keeper-title">The Guardians&apos;<br /><em>Keeper.</em></h2>
          <p>Supporting the welfare, dignity, and future of those who protect communities across Nigeria.</p>
          <Link className="home-keeper-link" href="/philanthropy">Explore the initiative <Arrow /></Link>
        </div>
        <div className="home-keeper-panel">
          <span className="home-keeper-monogram">Our commitment</span>
          <p className="home-keeper-dedication">For those who<br />stand for us.</p>
          <ul aria-label="Our focus">
            <li><span>01</span>Welfare</li>
            <li><span>02</span>Dignity</li>
            <li><span>03</span>Future</li>
          </ul>
          <p className="home-keeper-location">Rooted in care. Across Nigeria.</p>
        </div>
      </div>
    </section>
  );
}

export function HomeEcosystemShowcase() {
  return (
    <section className="home-ventures" aria-labelledby="home-ventures-title">
      <h2 className="visually-hidden" id="home-ventures-title">Explore the TNOTL ecosystem</h2>
      {ventures.map((venture) => <VentureFeature venture={venture} key={venture.title} />)}
    </section>
  );
}
