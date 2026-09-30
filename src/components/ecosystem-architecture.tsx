"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import styles from "./ecosystem-architecture.module.css";

const space = localFont({ src: "../../public/fonts/SpaceMono-Regular.ttf", display: "swap", variable: "--architecture-font" });
type Pillar = { number: string; category: string; name: string; lines: readonly string[]; href: string };

// Every level remains in the DOM. Entering the viewport constructs the tree once.
export function EcosystemArchitecture({ pillars }: { pillars: readonly Pillar[] }) {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = section.current!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animated = Array.from(root.querySelectorAll<HTMLElement | SVGPathElement>("[data-start]"));
    let frame = 0;
    let started = false;

    const paint = (progress: number) => {
      const stage = progress < .15 ? 1 : progress < .35 ? 2 : progress < .55 ? 3 : progress < .76 ? 4 : 5;

      root.dataset.stage = String(stage);
      root.style.setProperty("--progress", String(progress));

      for (const element of animated) {
        const start = Number(element.dataset.start);
        const end = Number(element.dataset.end ?? start + .06);
        const amount = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        const reveal = amount * amount * (3 - 2 * amount);
        element.style.setProperty("--reveal", String(reveal));
        element.style.setProperty("--emphasis", "1");

        if (element instanceof SVGPathElement) element.style.strokeDashoffset = String(1 - reveal);
        if (element instanceof HTMLAnchorElement) {
          element.tabIndex = reveal < .9 ? -1 : 0;
          element.style.pointerEvents = reveal < .9 ? "none" : "";
        }
      }
    };

    const finish = () => {
      root.dataset.animated = "false";
      paint(1);
    };

    const start = () => {
      if (started) return;
      started = true;
      if (reduced.matches) {
        finish();
        return;
      }

      root.dataset.animated = "true";
      const beganAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - beganAt) / 3000);
        paint(progress);
        if (progress < 1) frame = requestAnimationFrame(tick);
        else root.dataset.animated = "false";
      };
      frame = requestAnimationFrame(tick);
    };

    root.dataset.animated = reduced.matches ? "false" : "true";
    delete root.dataset.stage;
    if (reduced.matches) finish();
    else {
      for (const element of animated) {
        element.style.setProperty("--reveal", "0");
        element.style.setProperty("--emphasis", "1");
        if (element instanceof SVGPathElement) element.style.strokeDashoffset = "1";
        if (element instanceof HTMLAnchorElement) {
          element.tabIndex = -1;
          element.style.pointerEvents = "none";
        }
      }
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        start();
        observer.disconnect();
      }
    }, { threshold: .2 });

    if (!started) observer.observe(root);
    const onMotionChange = () => { if (reduced.matches) finish(); };
    reduced.addEventListener("change", onMotionChange);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      reduced.removeEventListener("change", onMotionChange);
    };
  }, []);

  const path = (d: string, start: number, end: number, branch?: number, className?: string) => (
    <path d={d} pathLength="1" strokeDasharray="1" strokeLinecap="round" strokeLinejoin="round" data-start={start} data-end={end} data-branch={branch} className={className} />
  );

  return (
    <section ref={section} id="ecosystem" className={`${styles.section} ${space.variable}`} data-animated="true" aria-labelledby="ecosystem-title">
      <div className={styles.canvas}>
        <div className={styles.systemRail} aria-hidden="true"><span>SYSTEM / 001</span></div>
        <div className={styles.diagram}>
          <header className={`${styles.identity} ${styles.layer}`} data-start="0" data-end=".11">
            <h2 id="ecosystem-title">TNOTL</h2>
            <p>HOLISTIC SECURITY</p>
            <small><span>PROTECTION</span><i aria-hidden="true" /><span>AWARENESS</span><i aria-hidden="true" /><span>ASSURANCE</span></small>
          </header>
          <div className={`${styles.caption} ${styles.layer}`} data-start=".02" data-end=".09">ONE VISION.<br />THREE DIMENSIONS.</div>

          <svg className={styles.connectors} viewBox="0 0 1000 720" preserveAspectRatio="none" aria-hidden="true">
            {path("M500 198 V230", .15, .20, undefined, styles.rootPath)}
            {path("M500 230 H168 M500 230 H832", .20, .26, undefined, styles.rootPath)}
            {[168, 500, 832].map((x, index) => (
              <g key={x} data-branch={index}>
                {path(`M${x} 230 V245`, .26, .30, index)}
                {path(`M${x} 294 V324`, .36, .42, index)}
                {path(`M${x} 410 V438`, .56, .62, index)}
                {path(`M${x} 522 V558 Q${x} 580 ${x < 500 ? 196 : x > 500 ? 804 : 500} 580 H500`, .76 + index * .02, .87 + index * .02, index)}
              </g>
            ))}
            {path("M500 580 V615", .88, .92, undefined, styles.rootPath)}
          </svg>

          <ol className={styles.branches}>
            {pillars.map((pillar, index) => (
              <li key={pillar.number} className={styles.branch} data-branch={index}>
                <Link href={pillar.href} className={`${styles.category} ${styles.layer}`} data-start=".30" data-end=".35">
                  <span>{pillar.number} /</span><strong>{pillar.category}</strong><i aria-hidden="true">↗</i>
                </Link>
                <h3 className={`${styles.name} ${styles.layer}`} data-start=".42" data-end=".52">{pillar.name}</h3>
                <ul className={styles.outcomes}>
                  {pillar.lines.map((line, lineIndex) => (
                    <li key={line} className={`${styles.layer} ${styles.outcome}`} data-start={.62 + lineIndex * .055} data-end={.68 + lineIndex * .055}>{line}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className={`${styles.impact} ${styles.layer}`} data-start=".92" data-end=".99">
            <h3>A SAFER NIGERIA.<br />A BRIGHTER TOMORROW.</h3>
            <p>PEOPLE / TECHNOLOGY / IMPACT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
