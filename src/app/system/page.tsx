import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { Eyebrow, TextLink } from "@/components/site-shell";
import { products, sequence } from "@/data/site";

export const metadata: Metadata = { title: "The System", description: "Three coordinated layers: detect, verify and deploy under human control." };

export default function SystemPage() {
  return <main className="inner-page system-page">
    <section className="inner-hero system-hero">
      <div className="inner-hero-copy"><Eyebrow>System / Overview</Eyebrow><h1>Three devices.<br /><em>One clear response.</em></h1><p>TNOTL connects entry detection, immediate visual context and human-controlled visibility reduction into a single deliberate chain.</p></div>
      <div className="system-hero-objects">{products.map((product) => <Image key={product.slug} className={`system-object object-${product.slug}`} src={product.image} alt={product.imageAlt} width={1122} height={1402} priority sizes="25vw" />)}</div>
      <div className="inner-hero-foot"><span>ALARM</span><i /><span>VERIFY</span><i /><span>DEPLOY</span></div>
    </section>

    <section className="system-principle"><Eyebrow index="01 /">System principle</Eyebrow><h2>Every layer adds context.<br /><em>None removes your control.</em></h2><p>The system is designed to make urgent information legible. The response never outruns the person responsible for making it.</p></section>

    <section className="system-product-list">{products.map((product) => <article key={product.slug} className={`system-product-row ${product.slug}`}><div className="system-row-index">{product.number}<span>{product.shortName}</span></div><div className="system-row-image"><Image src={product.image} alt={product.imageAlt} width={1122} height={1402} sizes="(max-width: 700px) 90vw, 38vw" /></div><div className="system-row-copy"><p className="eyebrow">{product.descriptor}</p><h2>{product.name}</h2><p>{product.summary}</p><ul>{product.capabilities.map((item) => <li key={item}>{item}</li>)}</ul><TextLink href={`/system/${product.slug}`}>Explore {product.name}</TextLink></div></article>)}</section>

    <section className="system-sequence-compact"><div><Eyebrow index="02 /">The chain</Eyebrow><h2>Six moments.<br /><em>One informed decision.</em></h2></div><ol>{sequence.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
    <section className="page-cta"><Eyebrow>Build your protection plan</Eyebrow><h2>Start with the space.<br /><em>Design the response.</em></h2><Link className="button button-light" href="/contact">Get protected <Arrow /></Link></section>
  </main>;
}
