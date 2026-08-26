import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ApertureMark } from "@/components/icons";
import { Eyebrow } from "@/components/site-shell";

export const metadata: Metadata = { title: "About", description: "TNOTL designs security technology that informs people and keeps them in control." };

export default function AboutPage() {
  return <main className="inner-page about-page">
    <section className="about-hero"><div><Eyebrow>Company / About TNOTL</Eyebrow><h1>More awareness.<br /><em>Less uncertainty.</em></h1></div><p>We believe security technology should make critical moments easier to understand—not make irreversible decisions on a person&apos;s behalf.</p><ApertureMark /></section>
    <section className="about-belief"><Eyebrow index="I /">Our belief</Eyebrow><blockquote>“A useful security system does more than react. It gives people enough information to act responsibly.”</blockquote><div><p>TNOTL is built around a simple sequence: sound the alarm, make the situation visible, and keep the response under human control.</p><p>This is not passive monitoring. It is a layered system designed for the moments when clear information matters most.</p></div></section>
    <section className="principles-grid"><article><span>I</span><h2>Clear signals</h2><p>Every state should be legible, from the first entry alert to response readiness.</p></article><article><span>II</span><h2>Useful context</h2><p>Information arrives before intervention so a person can distinguish what is really happening.</p></article><article><span>III</span><h2>Human authority</h2><p>The final response is a deliberate choice—not an automatic consequence.</p></article></section>
    <section className="about-method"><div className="method-object"><span>TNOTL</span><i /><b>H</b></div><div><Eyebrow index="II /">Our design standard</Eyebrow><h2>Physical products.<br /><em>Responsible logic.</em></h2><p>We approach TNOTL as both an engineered object system and a decision system. Hardware, interfaces and product language must all reinforce the same calm, controlled sequence.</p><Link className="button button-solid" href="/system">Explore the system <Arrow /></Link></div></section>
  </main>;
}
