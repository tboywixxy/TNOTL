import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/site-shell";
import { useCases } from "@/data/site";

export const metadata: Metadata = {
  title: "Use Cases",
  description: "TNOTL protection for homes, schools, commercial property and facilities.",
};

export default function UseCasesPage() {
  return (
    <main className="inner-page use-cases-page">
      <section className="use-cases-hero">
        <div>
          <Eyebrow>Use cases / Occupied space</Eyebrow>
          <h1>Protection shaped<br />around <em>real places.</em></h1>
        </div>
        <p>Every environment is different. The principle stays simple: create awareness, add context and keep the response human.</p>
      </section>

      <section className="use-case-stories">
        {useCases.map((item) => (
          <article className={`use-case-story ${item.className}`} key={item.number}>
            <figure className="case-scene">
              <Image src={item.image} alt={item.imageAlt} width={1695} height={1024} sizes="(max-width: 760px) 100vw, 62vw" />
              <span>{item.number}</span>
            </figure>
            <div className="case-story-copy">
              <Eyebrow>{item.label}</Eyebrow>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

    </main>
  );
}
