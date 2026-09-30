import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./icons";
import styles from "./home-ecosystem-showcase.module.css";

const ventures = [
  { type: "Hardware / Current focus", title: "Visibility Reducer", description: "A human-controlled response that rapidly reduces visibility, helping occupants regain time, distance, and control.", href: "/system/visibility-reducer", image: "/images/visibility-reducer-home.png", alt: "A Visibility Reducer filling a home entrance with dense obscuring mist", theme: "hardware" },
] as const;

type Venture = (typeof ventures)[number];

function VentureFeature({ venture }: { venture: Venture }) {
  return (
    <article className={`home-venture home-venture-${venture.theme}`}>
      <div className="home-venture-image"><Image src={venture.image} alt={venture.alt} fill sizes="100vw" /></div>
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
    <section className={`${styles.section} ${styles.keeper}`} aria-labelledby="home-keeper-title">
      <div className={styles.inner}>
        <div className={styles.topline}>
          <p>Philanthropy</p>
          <span>TNOTL&apos;s social impact arm</span>
        </div>
        <div className={styles.feature}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>People at the heart of protection</p>
            <h2 id="home-keeper-title">The Guardians&apos;<br /><em>Keeper.</em></h2>
            <p className={styles.description}>Supporting the welfare, dignity, and future of those who protect communities across Nigeria.</p>
            <Link className={styles.link} href="/philanthropy">Explore the initiative <Arrow /></Link>
          </div>
          <figure className={`${styles.brand} ${styles.keeperBrand}`}>
            <div className={styles.logoStage}>
              <Image className={styles.keeperLogo} src="/images/tgk-logo.png" alt="The Guardians' Keeper logo" width={1536} height={1024} sizes="(max-width: 760px) 80vw, (max-width: 1200px) 36vw, 420px" />
            </div>
            <figcaption>For those who stand for us.<span>Rooted in care. Across Nigeria.</span></figcaption>
          </figure>
        </div>
        <ul className={styles.pillars} aria-label="Our focus">
          <li><span>01</span>Welfare</li>
          <li><span>02</span>Dignity</li>
          <li><span>03</span>Future</li>
        </ul>
      </div>
    </section>
  );
}

export function HomeVigilShowcase() {
  return (
    <section className={`${styles.section} ${styles.vigil}`} aria-labelledby="home-vigil-title">
      <div className={styles.inner}>
        <div className={styles.topline}>
          <p>Software</p>
          <span>In partnership with Vigil 360</span>
        </div>
        <div className={styles.feature}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Awareness. Connection. Response.</p>
            <h2 id="home-vigil-title">Vigil <em>360.</em></h2>
            <p className={styles.description}>Real-time awareness that connects people with trusted contacts, information, and emergency services when it matters.</p>
            <Link className={styles.link} href="/vigil360">Explore Vigil 360 <Arrow /></Link>
          </div>
          <figure className={`${styles.brand} ${styles.vigilBrand}`}>
            <div className={styles.logoStage}>
              <Image className={styles.vigilLogo} src="/images/vigil-360.png" alt="Vigil 360 logo" width={1254} height={1254} sizes="(max-width: 760px) 190px, 230px" />
            </div>
            <figcaption>Connected when it matters.<span>People. Information. Support.</span></figcaption>
          </figure>
        </div>
        <ul className={styles.pillars} aria-label="Vigil 360 connections">
          <li><span>01</span>Trusted contacts</li>
          <li><span>02</span>Real-time information</li>
          <li><span>03</span>Emergency services</li>
        </ul>
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
