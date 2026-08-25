import Image from "next/image";
import Link from "next/link";
import { Arrow, ApertureMark } from "@/components/icons";
import { Eyebrow, TextLink } from "@/components/site-shell";
import { SystemDemo } from "@/components/system-demo";
import { products, sequence, useCases } from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-architecture" aria-hidden="true"><div className="architecture-lines" /><div className="hero-haze" /></div>
        <div className="hero-status"><span>TN / 001</span><span>System standing by</span></div>
        <div className="hero-copy">
          <Eyebrow>Layered protection / human control</Eyebrow>
          <h1>Human life protection<br />for <em>home, school</em><br />&amp; property.</h1>
          <p>TNOTL combines intrusion detection, live visual verification and human-controlled visibility reduction into one layered security system.</p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/system">Explore the system <Arrow /></Link>
            <Link className="button button-ghost" href="#sequence">See how it works <Arrow direction="down" /></Link>
          </div>
        </div>
        <div className="hero-products" aria-label="The three TNOTL protection devices">
          <div className="hero-product hero-alarm"><Image src={products[0].image} alt={products[0].imageAlt} width={1024} height={1536} priority sizes="(max-width: 700px) 32vw, 18vw" /></div>
          <div className="hero-product hero-camera"><Image src={products[1].image} alt={products[1].imageAlt} width={1122} height={1402} priority sizes="(max-width: 700px) 42vw, 25vw" /></div>
          <div className="hero-product hero-reducer"><Image src={products[2].image} alt={products[2].imageAlt} width={1122} height={1402} priority sizes="(max-width: 700px) 30vw, 18vw" /></div>
        </div>
        <a className="scroll-cue" href="#manifesto"><span>Scroll to understand</span><i /></a>
      </section>

      <section className="signal-strip" aria-label="System principles"><span>Alarm</span><i>01</i><span>Verify</span><i>02</i><span>Deploy</span><i>03</i><strong>Human-controlled</strong></section>

      <section className="manifesto" id="manifesto">
        <div className="manifesto-side"><Eyebrow index="01 /">The premise</Eyebrow><ApertureMark /></div>
        <div className="manifesto-main">
          <h2>Security shouldn&apos;t<br />end with <em>an alarm.</em></h2>
          <div className="manifesto-copy"><p>Conventional systems tell you something happened. TNOTL gives you the information and control to decide what happens next.</p><p className="manifesto-steps"><span>Detect it.</span><span>See it.</span><span>Assess it.</span><span>Respond.</span></p></div>
        </div>
      </section>

      <section className="system-intro" id="system">
        <div className="section-heading"><Eyebrow index="02 /">The TNOTL system</Eyebrow><h2>Three layers.<br /><em>One response system.</em></h2><p>Each device has one clear role. Together, they create an informed chain of action.</p></div>
        <div className="system-index" aria-hidden="true"><span>DETECT</span><span>VERIFY</span><span>DEPLOY</span></div>
      </section>

      <section className="product-editorial">
        {products.map((product) => (
          <article className={`product-feature feature-${product.slug}`} key={product.slug}>
            <div className="product-number"><span>{product.number}</span><i /></div>
            <div className="product-visual"><span className="technical-note">TN–{product.number} / OBJECT</span><Image src={product.image} alt={product.imageAlt} width={1122} height={1402} sizes="(max-width: 700px) 90vw, 50vw" /><span className="object-scale">SCALE / REFERENCE</span></div>
            <div className="product-copy"><Eyebrow>{product.shortName} layer</Eyebrow><h3>{product.name}</h3><p className="product-descriptor">{product.descriptor}</p><p>{product.summary}</p><ul>{product.capabilities.slice(0, 3).map((capability) => <li key={capability}>{capability}</li>)}</ul><TextLink href={`/system/${product.slug}`}>Explore product</TextLink></div>
          </article>
        ))}
      </section>

      <section className="sequence-section" id="sequence">
        <div className="sequence-heading"><Eyebrow index="03 /">System sequence</Eyebrow><h2>From entry<br />to <em>informed response.</em></h2><p>A continuous chain of awareness. The final action stays with you.</p></div>
        <div className="sequence-track">
          {[...sequence, ...sequence].map(([number, title, text], loopIndex) => {
            const index = loopIndex % sequence.length;
            const isDuplicate = loopIndex >= sequence.length;

            return <article aria-hidden={isDuplicate || undefined} className="sequence-step" key={`${number}-${loopIndex}`}><div className="sequence-line"><i /><span>{number}</span></div><p className="sequence-index">0{index + 1} / 06</p><h3>{title}</h3><p>{text}</p><span className="sequence-word">{title}</span></article>;
          })}
        </div>
      </section>

      <section className="demo-section">
        <div className="demo-heading"><div><Eyebrow index="04 /">Interactive system demo</Eyebrow><h2>Information first.<br /><em>Action second.</em></h2></div><p>Step through a simulated intrusion and see exactly where human judgement enters the system.</p></div>
        <SystemDemo />
      </section>

      <section className="human-control">
        <div className="human-visual" aria-hidden="true"><div className="human-circle"><span>H</span><i /></div><div className="decision-orbit orbit-one">Detection</div><div className="decision-orbit orbit-two">Information</div><div className="decision-orbit orbit-three">Response</div></div>
        <div className="human-copy"><Eyebrow index="05 /">Human control</Eyebrow><h2>Technology detects.<br /><em>Humans decide.</em></h2><p>TNOTL deliberately keeps the final response under human control. An alert creates awareness. The camera creates context. Only a person can authorize deployment.</p><div className="decision-chain"><span>Detection</span><i /><span>Information</span><i /><strong>Human decision</strong><i /><span>Response</span></div></div>
      </section>

      <section className="cases-preview">
        <div className="cases-heading"><Eyebrow index="06 /">Where protection matters</Eyebrow><h2>Designed around<br /><em>occupied space.</em></h2><TextLink href="/use-cases">Explore use cases</TextLink></div>
        <div className="cases-list">{useCases.slice(0, 3).map((item) => <Link href="/use-cases" className={`case-row ${item.className}`} key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.label}</p><Arrow /></Link>)}</div>
      </section>

      <section className="final-cta"><p className="eyebrow">Ready when you are</p><h2>Protection should feel<br /><em>decisive.</em></h2><p>Tell us about the space you need to protect.</p><Link className="button button-light" href="/contact">Request a consultation <Arrow /></Link></section>
    </main>
  );
}
