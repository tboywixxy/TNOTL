import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { Eyebrow } from "@/components/site-shell";
import { useCases } from "@/data/site";

export const metadata: Metadata = { title: "Use Cases", description: "TNOTL protection for homes, schools, commercial property and facilities." };

export default function UseCasesPage() {
  return <main className="inner-page use-cases-page">
    <section className="use-cases-hero"><Eyebrow>Use cases / Occupied space</Eyebrow><h1>Protection shaped<br />around <em>real places.</em></h1><p>Different environments create different responsibilities. TNOTL adds awareness and a human-controlled response without changing the principle.</p><div className="architectural-window"><i /><span>SPACE / IV</span></div></section>
    <section className="use-case-stories">{useCases.map((item) => <article className={`use-case-story ${item.className}`} key={item.number}><div className="case-scene"><div className="case-depth" /><span>{item.number} / IV</span></div><div className="case-story-copy"><Eyebrow>{item.label}</Eyebrow><h2>{item.title}</h2><p>{item.text}</p><ul><li>Entry-point detection</li><li>Immediate visual context</li><li>Human-controlled response</li></ul></div></article>)}</section>
    <section className="page-cta"><Eyebrow>Every space is different</Eyebrow><h2>Plan protection around<br /><em>your environment.</em></h2><Link className="button button-light" href="/contact">Discuss your space <Arrow /></Link></section>
  </main>;
}
