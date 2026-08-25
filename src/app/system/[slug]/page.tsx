import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/icons";
import { Eyebrow, TextLink } from "@/components/site-shell";
import { products } from "@/data/site";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product ? { title: product.name, description: product.summary } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const currentIndex = products.findIndex((item) => item.slug === slug);
  const nextProduct = products[(currentIndex + 1) % products.length];
  const isReducer = product.slug === "visibility-reducer";

  return <main className={`inner-page product-page product-page-${product.slug}`}>
    <section className="product-page-hero">
      <div className="product-page-title"><Eyebrow>System / Product {product.number}</Eyebrow><h1>{product.name}</h1><p>{product.descriptor}</p></div>
      <div className="product-page-object"><span>TN / {product.number} / FRONT</span><Image src={product.image} alt={product.imageAlt} width={1122} height={1402} priority sizes="(max-width: 700px) 85vw, 48vw" /><i /></div>
      <div className="product-page-intro"><p>{product.summary}</p><Link className="round-link" href="#overview"><Arrow direction="down" /></Link></div>
    </section>

    <section className="product-statement" id="overview"><Eyebrow index="01 /">Purpose</Eyebrow><h2>{product.statement}</h2><p>{product.role}</p></section>

    {product.slug === "indoor-camera" && <section className="camera-viewport"><div className="camera-ui"><span>CAM 01 / LIVE</span><i className="camera-reticle" /><p>Visual information helps turn an alert into an informed decision.</p></div><div className="camera-copy"><Eyebrow index="02 /">Real-time context</Eyebrow><h2>See the event.<br /><em>Then assess it.</em></h2><p>The camera&apos;s role is intentionally clear: make the situation visible to the person responsible for deciding what comes next.</p></div></section>}

    {product.slug === "door-alarm" && <section className="alarm-signal"><div className="signal-rings"><i /><i /><i /><span>!</span></div><div><Eyebrow index="02 /">At the threshold</Eyebrow><h2>The system begins<br /><em>where entry occurs.</em></h2><p>A forced-entry event activates an audible local signal and starts the connected workflow without waiting for someone to discover the intrusion.</p></div></section>}

    {isReducer && <section className="reducer-control"><div className="control-lock"><span>MANUAL</span><i>01</i></div><div><Eyebrow index="02 /">Deliberate response</Eyebrow><h2>Ready does not mean<br /><em>automatically active.</em></h2><p>The reducer remains in a ready state until the situation has been reviewed and a person authorizes deployment.</p><strong>Deployment is never automatic.</strong></div></section>}

    <section className="capability-section"><div><Eyebrow index="03 /">Key capabilities</Eyebrow><h2>Engineered for<br /><em>one system role.</em></h2></div><ol>{product.capabilities.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></section>

    <section className="connected-role"><Eyebrow index="04 /">Connected by design</Eyebrow><div className="connected-flow">{products.map((item) => <div className={item.slug === product.slug ? "current" : ""} key={item.slug}><span>{item.number}</span><p>{item.name}</p></div>)}</div><p>No device acts as the complete system alone. Detection creates the alert, the camera adds information, and the person in control decides whether a response is warranted.</p></section>

    <section className="next-product"><div><Eyebrow>Next product / {nextProduct.number}</Eyebrow><h2>{nextProduct.name}</h2><TextLink href={`/system/${nextProduct.slug}`}>Continue exploring</TextLink></div><Image src={nextProduct.image} alt="" width={1122} height={1402} sizes="40vw" /></section>
  </main>;
}
