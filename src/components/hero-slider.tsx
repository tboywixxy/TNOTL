"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { products, romanNumerals } from "@/data/site";

const slides = [
  {
    id: "camera",
    product: products[1],
    width: 1207,
    height: 1303,
    sentence: <>See what&apos;s there. <em>Decide what happens next.</em></>,
  },
  {
    id: "alarm",
    product: products[0],
    width: 1024,
    height: 1536,
    sentence: <>Know the instant <em>your space is breached.</em></>,
  },
  {
    id: "reducer",
    product: products[2],
    width: 1121,
    height: 1403,
    sentence: <>One command. <em>Their visibility disappears.</em></>,
  },
] as const;

const slideDuration = 4000;

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      slideDuration,
    );

    return () => window.clearTimeout(timer);
  }, [activeSlide, isPaused]);

  const showSlide = (index: number) => setActiveSlide(index);
  const moveSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <section
      className="hero hero-slider"
      aria-label="TNOTL protection system"
      aria-roledescription="carousel"
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="hero-architecture" aria-hidden="true">
        <div className="architecture-lines" />
        <div className="hero-haze" />
      </div>

      <div className="hero-slides" aria-live="polite">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          const productObject = (
            <div className="hero-slide-object">
              <Image
                src={slide.product.image}
                alt={slide.product.imageAlt}
                width={slide.width}
                height={slide.height}
                preload={index === 0}
                sizes="(max-width: 760px) 72vw, 42vw"
              />
            </div>
          );

          return (
            <article
              className={`hero-slide hero-slide-${slide.id}${isActive ? " is-active" : ""}`}
              aria-hidden={!isActive}
              aria-label={`${index + 1} of ${slides.length}: ${slide.product.name}`}
              key={slide.id}
            >
              <div className="hero-slide-glow" aria-hidden="true" />
              {slide.id === "alarm" && (
                <div className="hero-door-scene">
                  <svg className="hero-door-sketch" viewBox="0 0 720 900" aria-hidden="true">
                    <path className="sketch-wall" d="M38 856H684M92 78h532v778H92z" />
                    <path className="sketch-frame" d="M132 116h452v740H132zM159 143h398v713H159z" />
                    <path className="sketch-door" d="M181 164h354v670H181zM203 186h310v626H203z" />
                    <path className="sketch-detail" d="M181 164 132 116m403 48 49-48M181 834l-49 22m403-22 49 22M203 475h310M220 204h276v234H220zM220 510h276v282H220z" />
                    <path className="sketch-hinges" d="M195 260v64m0 298v64" />
                    <path className="sketch-handle" d="M479 448H369m110-31a31 31 0 1 1 0 62 31 31 0 0 1 0-62Z" />
                    <path className="sketch-handle-core" d="M479 430a18 18 0 1 1 0 36 18 18 0 0 1 0-36Z" />
                    <path className="sketch-measure" d="M116 116H64m52 740H64M75 116v740m-9-740h18m-18 740h18" />
                  </svg>
                  {productObject}
                </div>
              )}
              {slide.id === "camera" && (
                <svg className="hero-context-sketch hero-camera-sketch" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
                  <path className="context-strong" d="M778 40h610M812 68h576M846 96h542M1090 40v72h154V40" />
                  <path d="M96 553 344 326l275 227v250H96zM344 326l119-86 314 263M154 553v-73h132v73m129 0V432h119v121M186 632h116v102H186zm251 0h108v102H437z" />
                  <path className="context-detail" d="M62 803h1306M50 825h1330M688 803 907 553h481M710 778 927 531h461M86 770l258-37 265 37M344 733V326m275 477V553" />
                  <path d="M768 503h620v300H768zM824 553h178v142H824zm250 0h244v250h-244zM110 803c18-88 56-132 114-132s96 44 114 132m-205 0c12-54 38-81 78-81s66 27 78 81" />
                  <path className="context-accent" d="M1167 40v44m-26 0h52M344 310v33" />
                </svg>
              )}
              {slide.id === "reducer" && (
                <svg className="hero-context-sketch hero-reducer-sketch" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
                  <path className="context-strong" d="M38 758h1364M24 798h1392M0 842h1440M425 475 716 255l303 220M468 475h508v283H468z" />
                  <path d="M58 526 245 374l196 152M84 526h330v232H84zM1009 528l180-145 190 145m-342 0h314v230h-314z" />
                  <path d="M658 563h116v195H658zM526 536h91v104h-91zm302 0h91v104h-91zM132 570h74v91h-74zm151 0h78v91h-78zM1083 570h75v91h-75zm126 0h88v91h-88z" />
                  <path className="context-detail" d="M425 475h594M58 526h383M1009 528h370M716 255v503M245 374v384M1189 383v375M0 842l306-84m1134 84-308-84M468 758l-106 84m614-84 108 84" />
                  <path d="M43 724h405m552 0h393M36 694h132v64m196-64h96v64m535-64h105v64m211-64h89v64M91 758c13-76 44-114 94-114s82 38 95 114m829 0c14-83 51-124 110-124s96 41 111 124" />
                  <path className="context-accent" d="M716 239v42m-26 0h52M42 798h178m1000 0h178" />
                </svg>
              )}
              {slide.id !== "alarm" && productObject}

              <div className="hero-slide-copy">
                <h1>{slide.sentence}</h1>
              </div>

              {slide.id === "reducer" && (
                <div className="hero-smoke" aria-hidden="true">
                  <svg className="smoke-filter-defs">
                    <defs>
                      <filter id="hero-smoke-organic" x="-50%" y="-50%" width="200%" height="200%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.032" numOctaves="4" seed="17" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="42" xChannelSelector="R" yChannelSelector="B" result="displaced" />
                        <feGaussianBlur in="displaced" stdDeviation="7" />
                      </filter>
                    </defs>
                  </svg>
                  <i className="smoke-jet" />
                  <i className="smoke-plume smoke-plume-one" />
                  <i className="smoke-plume smoke-plume-two" />
                  <i className="smoke-plume smoke-plume-three" />
                  <i className="smoke-plume smoke-plume-four" />
                  <i className="smoke-plume smoke-plume-five" />
                  <i className="smoke-plume smoke-plume-six" />
                  <span className="smoke-veil" />
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="hero-slider-controls">
        <button type="button" onClick={() => moveSlide(-1)} aria-label="Previous product">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12.5 4.5-5 5 5 5" /></svg>
        </button>
        <div className="hero-slider-dots" aria-label="Choose a product slide">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => showSlide(index)}
              aria-label={`Show ${slide.product.name}`}
              aria-current={index === activeSlide ? "true" : undefined}
              key={slide.id}
            ><span>{romanNumerals[index]}</span></button>
          ))}
        </div>
        <button type="button" onClick={() => moveSlide(1)} aria-label="Next product">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7.5 4.5 5 5-5 5" /></svg>
        </button>
      </div>
    </section>
  );
}
