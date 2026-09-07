import type { Metadata } from "next";
import guardiansHero from "../../../public/images/guardians-keeper-hero-updated.png";
import { PageImageHero } from "@/components/page-image-hero";
import { Eyebrow, TextLink } from "@/components/site-shell";
import { PartnerLink } from "@/components/partner-link";
import { partnerUrls } from "@/data/partners";

export const metadata: Metadata = {
  title: "Philanthropy | The Guardians' Keeper",
  description: "The Guardians' Keeper is TNOTL's philanthropic initiative, extending our mission of protection to communities and people who need it most.",
};

export default function PhilanthropyPage() {
  return (
    <main className="inner-page philanthropy-page">
      <PageImageHero
        src={guardiansHero}
        alt="A Nigerian police officer and TGK volunteer supporting a schoolgirl with school supplies"
        tone="blue"
      />
      <section className="philanthropy-purpose">
        <Eyebrow>One mission / A wider reach</Eyebrow>
        <div>
          <h2>Built around protection.<br /><em>Rooted in people.</em></h2>
          <p>The Guardians&apos; Keeper is TNOTL&apos;s philanthropic initiative. Alongside our software partnership with Vigil 360 and our physical security technology, it gives our mission a human and community focus.</p>
          <p>Through TGK, we support initiatives focused on creating safer communities and protecting those who need it most. Its dedicated website is the place to discover more about this work.</p>
          <PartnerLink href={partnerUrls.guardiansKeeper} className="button button-solid">Visit The Guardians&apos; Keeper</PartnerLink>
          <TextLink href="/#pillars">Explore the three pillars</TextLink>
        </div>
      </section>
    </main>
  );
}
