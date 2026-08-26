import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { Eyebrow, TextLink } from "@/components/site-shell";
import { SystemDemo } from "@/components/system-demo";
import { HeroSlider } from "@/components/hero-slider";
import { romanNumerals, sequence, useCases } from "@/data/site";

export default function Home() {
  return (
    <main>
      <HeroSlider />

      <section className="signal-strip" aria-label="System principles"><span>Alarm</span><i>I</i><span>Verify</span><i>II</i><span>Deploy</span><i>III</i><strong>Human-controlled</strong></section>

      <section className="manifesto" id="manifesto">
        <div className="manifesto-side">
          <Eyebrow index="I /">The premise</Eyebrow>
          <div className="premise-signal" aria-hidden="true">
            <i /><i /><i />
            <span />
            <small>Signal</small>
          </div>
        </div>
        <div className="manifesto-main">
          <h2>Security shouldn&apos;t<br />end with <em>an alarm.</em></h2>
          <div className="manifesto-copy">
            <p>Conventional systems tell you something happened. TNOTL gives you the information and control to decide what happens next.</p>
            <ol className="manifesto-steps" aria-label="TNOTL response path">
              {['Detect', 'See', 'Assess', 'Respond'].map((step, index) => (
                <li key={step}><small>{romanNumerals[index]}</small><strong>{step}</strong><i /></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="system-intro" id="system">
        <div className="section-heading">
          <Eyebrow index="II /">The TNOTL system</Eyebrow>
          <h2>Three layers.<br /><em>One response system.</em></h2>
          <p>Each device has one clear role. Together, they create an informed chain of action.</p>
          <Link className="button button-solid" href="/system">Explore the products <Arrow /></Link>
        </div>
        <div className="system-index" aria-hidden="true"><span>DETECT</span><span>VERIFY</span><span>DEPLOY</span></div>
      </section>

      <section className="sequence-section" id="sequence">
        <div className="sequence-heading"><Eyebrow index="III /">System sequence</Eyebrow><h2>From entry<br />to <em>informed response.</em></h2><p>A continuous chain of awareness. The final action stays with you.</p></div>
        <div className="sequence-track">
          {[...sequence, ...sequence].map(([number, title, text], loopIndex) => {
            const isDuplicate = loopIndex >= sequence.length;

            return <article aria-hidden={isDuplicate || undefined} className="sequence-step" key={`${number}-${loopIndex}`}><div className="sequence-line"><i /><span>{number}</span></div><p className="sequence-index">{number} / VI</p><h3>{title}</h3><p>{text}</p><span className="sequence-word">{title}</span></article>;
          })}
        </div>
      </section>

      <section className="demo-section">
        <div className="demo-heading"><div><Eyebrow index="IV /">Interactive system demo</Eyebrow><h2>Information first.<br /><em>Action second.</em></h2></div><p>Step through a simulated intrusion and see exactly where human judgement enters the system.</p></div>
        <SystemDemo />
      </section>

      <section className="human-control">
        <div className="human-sketch">
          <Image src="/images/illustrations/human-remote-control-black.png" alt="Illustration of a Black person deliberately activating a security remote" width={1132} height={1390} sizes="(max-width: 760px) 80vw, 38vw" />
        </div>
        <div className="human-copy">
          <Eyebrow index="V /">Human control</Eyebrow>
          <h2>Technology detects.<br /><em>Humans decide.</em></h2>
          <p>TNOTL keeps the final response under human control. The alarm creates awareness, the camera adds context, and only a person can authorize deployment.</p>
          <ol className="decision-chain" aria-label="Human-controlled response chain">
            <li><small>I</small><span>Detection</span></li>
            <li><small>II</small><span>Information</span></li>
            <li className="human-decision"><small>III</small><strong>Human decision</strong></li>
            <li><small>IV</small><span>Response</span></li>
          </ol>
        </div>
      </section>

      <section className="cases-preview">
        <div className="cases-heading"><Eyebrow index="VI /">Where protection matters</Eyebrow><h2>Designed around<br /><em>occupied space.</em></h2><TextLink href="/use-cases">Explore use cases</TextLink></div>
        <div className="cases-list">{useCases.slice(0, 3).map((item) => <Link href="/use-cases" className={`case-row ${item.className}`} key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.label}</p><Arrow /></Link>)}</div>
      </section>

      <section className="final-cta"><p className="eyebrow">Ready when you are</p><h2>Protection should feel<br /><em>decisive.</em></h2><p>Tell us about the space you need to protect.</p><Link className="button button-light" href="/contact">Request a consultation <Arrow /></Link></section>
    </main>
  );
}
