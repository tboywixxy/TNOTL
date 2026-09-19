"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { EcosystemArchitecture } from "./ecosystem-architecture";
import styles from "./tnotl-hero.module.css";

const pillars = [
  { number: "01", category: "Software", name: "Vigil 360", lines: ["Real-time awareness", "Greater response"], href: "/vigil360" },
  { number: "02", category: "Hardware", name: "Visibility Reducer", lines: ["Control your environment", "Disorient threats"], href: "/system/visibility-reducer" },
  { number: "03", category: "Philanthropy", name: "The Guardians’ Keeper", lines: ["Safer communities", "Brighter futures"], href: "/philanthropy" },
] as const;

const slides = [
  {
    image: "/images/tnotl-home-protection-hero.png",
    alt: "A family with Nigerian police and military personnel outside a home at sunset",
    label: "Holistic security",
    meta: "TNOTL / NG",
    intro: "TNOTL is holistic security.",
    title: <><span>Safer</span><strong>Tomorrows</strong><em>In our hands</em></>,
  },
  {
    image: "/images/about-house-background.png",
    alt: "A protected family home surrounded by trees",
    label: "People. Places. Possibilities.",
    meta: "Protection / Awareness",
    title: <><span>Protection for</span><strong>Real life.</strong></>,
    support: "Technology. Protection. A stronger Nigeria.",
  },
  {
    image: "/images/visibility-reducer-home.png",
    alt: "A Visibility Reducer filling a home entrance with dense obscuring mist",
    label: "TNOTL // Holistic security",
    meta: "One connected vision",
    title: <><span>A safer Nigeria.</span><strong>A brighter tomorrow.</strong></>,
    principles: ["Protection", "Awareness", "Assurance"],
    support: "People / Technology / Impact",
  },
] as const;

export function EcosystemHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const show = (index: number) => setActive((index + slides.length) % slides.length);

  return (
    <>
      <section
        className={styles.hero}
        aria-roledescription="carousel"
        aria-label="TNOTL introduction"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className={styles.slides} aria-live="polite">
          {slides.map((slide, index) => (
            <article
              className={`${styles.slide} ${index === active ? styles.active : ""}`}
              aria-hidden={index !== active}
              key={slide.image}
            >
              <Image src={slide.image} alt={slide.alt} fill priority={index === 0} sizes="100vw" />
              <div className={styles.shade} />
              <div className={styles.slideCopy}>
                <p className={styles.identity}>{slide.label}<small>{slide.meta}</small></p>
                {"intro" in slide && <p className={styles.intro}>{slide.intro}</p>}
                <h1 id={index === 0 ? "tnotl-hero-title" : undefined} className={styles.headline}>{slide.title}</h1>
                {"principles" in slide && (
                  <ol className={styles.principles} aria-label="Core brand principles">
                    {slide.principles.map((principle, principleIndex) => <li key={principle}><span>0{principleIndex + 1}</span>{principle}</li>)}
                  </ol>
                )}
                {"support" in slide && <p className={styles.support}>{slide.support}</p>}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.controls}>
          <button type="button" onClick={() => show(active - 1)} aria-label="Show previous slide">←</button>
          <div className={styles.dots}>
            {slides.map((_, index) => (
              <button
                type="button"
                className={index === active ? styles.activeDot : ""}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => show(index)}
                key={index}
              ><span>0{index + 1}</span></button>
            ))}
          </div>
          <button type="button" onClick={() => show(active + 1)} aria-label="Show next slide">→</button>
        </div>
      </section>
      <EcosystemArchitecture pillars={pillars} />
    </>
  );
}
