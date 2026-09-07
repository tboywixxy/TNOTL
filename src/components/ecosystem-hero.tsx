import Image from "next/image";
import { EcosystemArchitecture } from "./ecosystem-architecture";
import styles from "./tnotl-hero.module.css";

const pillars = [
  { number: "01", category: "Software", name: "Vigil 360", lines: ["Real-time awareness", "Greater response"], href: "/vigil360" },
  { number: "02", category: "Hardware", name: "Visibility Reducer", lines: ["Control your environment", "Disorient threats"], href: "/system/visibility-reducer" },
  { number: "03", category: "Philanthropy", name: "The Guardians’ Keeper", lines: ["Safer communities", "Brighter futures"], href: "/philanthropy" },
] as const;

function BrandIdentity() {
  return <div className={styles.identity}>
    <Image src="/images/TNOTL Logo RM-BG.png" alt="TNOTL" width={1254} height={1254} sizes="64px" className={styles.logo} />
    <span>Holistic security<br /><small>TNOTL / NG</small></span>
  </div>;
}

function HeroHeadline() {
  return <div className={styles.story}>
    <BrandIdentity />
    <p className={styles.intro}>TNOTL is holistic security.</p>
    <h1 id="tnotl-hero-title" className={styles.headline}><span>Safer</span>{" "}<strong>Tomorrows</strong>{" "}<em>In our hands</em></h1>
    <p className={styles.people}>People. Places. Possibilities.</p>
    <p className={styles.support}>Technology. Protection. A stronger Nigeria.</p>
  </div>;
}

function SecuritySystemRail() {
  return <div className={styles.system}>
    <p>TNOTL <span>{"// Holistic security"}</span></p>
    <ol aria-label="Core brand principles">
      {["Protection", "Awareness", "Assurance"].map((principle, index) => <li key={principle}><span>0{index + 1}</span>{principle}</li>)}
    </ol>
  </div>;
}

function BottomBrandRail() {
  return <div className={styles.bottom}>
    <p>A safer Nigeria.<br />A brighter tomorrow.</p><span aria-hidden="true" />
    <p>People / Technology / Impact</p>
  </div>;
}

export function EcosystemHero() {
  return (
    <><section className={styles.hero} aria-labelledby="tnotl-hero-title">
      <div className={styles.visual}>
      <Image
        src="/images/tnotl-home-protection-hero.png"
        alt="A family with Nigerian police and military personnel outside a home at sunset"
        fill
        preload
        sizes="100vw"
      />
      </div>
      <HeroHeadline />
      <SecuritySystemRail />
      <BottomBrandRail />
    </section><EcosystemArchitecture pillars={pillars} /></>
  );
}
