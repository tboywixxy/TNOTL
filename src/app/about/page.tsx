import type { Metadata } from "next";
import { ApertureMark } from "@/components/icons";
import { Eyebrow } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About",
  description: "TNOTL designs security technology that informs people and keeps them in control.",
};

const principles = [
  ["I", "Clear signals", "Know when something changes."],
  ["II", "Useful context", "See before choosing a response."],
  ["III", "Human authority", "The final action remains yours."],
] as const;

export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <section className="about-hero">
        <div>
          <Eyebrow>Company / About TNOTL</Eyebrow>
          <h1>More awareness.<br /><em>Less uncertainty.</em></h1>
        </div>
        <p>Security should make a critical moment clearer—not make the final decision for you.</p>
        <ApertureMark />
      </section>

      <section className="about-belief-photo">
        <div>
          <Eyebrow>Our belief</Eyebrow>
          <blockquote>See clearly.<br /><em>Act deliberately.</em></blockquote>
          <p>TNOTL connects awareness, context and human control around the spaces people call home.</p>
        </div>
      </section>

      <section className="principles-grid" aria-label="TNOTL principles">
        {principles.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
