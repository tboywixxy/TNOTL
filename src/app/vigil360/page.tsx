import type { Metadata } from "next";
import vigilHero from "../../../public/images/vigil360-hero-updated.png";
import { PageImageHero } from "@/components/page-image-hero";
import { PartnerLink } from "@/components/partner-link";
import { Eyebrow, TextLink } from "@/components/site-shell";
import { partnerUrls } from "@/data/partners";

export const metadata: Metadata = {
  title: "Vigil 360 | Software Partnership",
  description: "Vigil 360 is TNOTL's software partner for real-time awareness, faster response, and connected protection.",
};

export default function Vigil360Page() {
  return (
    <main className="inner-page vigil360-page">
      <PageImageHero src={vigilHero} alt="Vigil 360 security app displayed on a phone in a city at sunset" />
      <section className="philanthropy-purpose">
        <Eyebrow>TNOTL / Software partnership</Eyebrow>
        <div>
          <h2>Awareness in your hands.<br /><em>Response within reach.</em></h2>
          <p>Vigil 360 is TNOTL&apos;s software partner, connecting people with information, trusted contacts, and emergency services when clarity matters most.</p>
          <p>The dedicated Vigil 360 website contains the complete product experience and service information.</p>
          <PartnerLink href={partnerUrls.vigil360} className="button button-solid">Visit Vigil 360</PartnerLink>
          <TextLink href="/#pillars">Explore the TNOTL ecosystem</TextLink>
        </div>
      </section>
    </main>
  );
}
