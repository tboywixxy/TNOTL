"use client";

import { useEffect, useState } from "react";

const lineCount = 11;

export function FooterSignal() {
  const [activeLine, setActiveLine] = useState(2);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveLine((current) => {
        const choices = Array.from({ length: lineCount }, (_, index) => index)
          .filter((index) => Math.abs(index - current) > 1);
        return choices[Math.floor(Math.random() * choices.length)];
      });
    }, 6800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="footer-signal-field" aria-hidden="true">
      {Array.from({ length: lineCount }, (_, index) => (
        <span className={index === activeLine ? "is-active" : undefined} key={index} />
      ))}
    </div>
  );
}
