"use client";

import { useState } from "react";
import { ApertureMark, Arrow } from "./icons";

type DemoStage = "idle" | "alert" | "verify" | "ready" | "deployed" | "safe";

const copy: Record<DemoStage, { code: string; title: string; detail: string; scene: string }> = {
  idle: {
    code: "READY",
    title: "See how one alert becomes a decision.",
    detail: "Start the example below. The system will guide you, and nothing deploys without your approval.",
    scene: "Entry hall is secure",
  },
  alert: {
    code: "I — DETECT",
    title: "The door alarm detects forced entry.",
    detail: "You receive an alert. The indoor camera is now available so you can see what caused it.",
    scene: "Door opened — alarm triggered",
  },
  verify: {
    code: "II — SEE",
    title: "You check the live camera.",
    detail: "Now make the human decision: is this harmless, or is there a genuine threat?",
    scene: "Live camera view opened",
  },
  ready: {
    code: "III — DECIDE",
    title: "Threat confirmed. The system waits.",
    detail: "The visibility reducer is ready, but it still will not activate until you press deploy.",
    scene: "Response ready — approval required",
  },
  deployed: {
    code: "IV — RESPOND",
    title: "You deploy the visibility reducer.",
    detail: "Fog fills the protected area because you deliberately approved the response.",
    scene: "Visibility reducing",
  },
  safe: {
    code: "CLOSED",
    title: "You mark it as a false alarm.",
    detail: "No fog is deployed. The event closes and the system returns to monitoring.",
    scene: "No threat — monitoring resumed",
  },
};

const steps = ["Detect", "See", "Decide", "Respond"] as const;
const progressByStage: Record<DemoStage, number> = { idle: -1, alert: 0, verify: 1, ready: 2, deployed: 3, safe: 1 };

export function SystemDemo() {
  const [stage, setStage] = useState<DemoStage>("idle");
  const current = copy[stage];
  const reset = () => setStage("idle");

  return (
    <div className={`system-demo demo-${stage}`}>
      <div className="demo-visual" aria-live="polite">
        <svg className="demo-architecture" viewBox="0 0 900 520" preserveAspectRatio="none" aria-hidden="true">
          <path className="demo-architecture-frame" d="M45 45h810v430H45zM225 132h450v318H225z" />
          <path className="demo-architecture-depth" d="M45 45 225 132m630-87L675 132M45 475l180-25m630 25-180-25M225 132 45 475m630-343 180 343" />
          <path className="demo-architecture-floor" d="M225 450h450M136 463l267-331m361 331L497 132M47 390h806M91 326h718" />
          <path className="demo-door-closed" d="M286 184h154v266H286zM308 207h110v103H308zM308 331h110v95H308zM405 319h10" />
          <path className="demo-door-open" d="M286 184h154v266H286zm0 0 101 30v205l-101 31zm82 139h10" />
          <path className="demo-architecture-window" d="M500 205h126v142H500zM563 205v142M500 276h126" />
          <path className="demo-camera-mount" d="M690 45v55h78V45m-55 55v34m-21 0h42" />
          <path className="demo-reducer-base" d="M118 416h78m-62 0v-41h46v41m-35-41v-13h24v13" />
          <path className="demo-system-route" d="M410 319C510 270 596 196 713 134M713 134C590 292 393 377 157 375" />
        </svg>
        <div className="demo-device-node demo-node-alarm"><i /><span>Door alarm</span></div>
        <div className="demo-device-node demo-node-camera"><i /><span>Indoor camera</span></div>
        <div className="demo-device-node demo-node-reducer"><i /><span>Visibility reducer</span></div>
        <div className="camera-overlay">
          <span>CAM I</span><span>LIVE</span>
          <ApertureMark />
          <i className="reticle reticle-a" /><i className="reticle reticle-b" />
        </div>
        <div className="fog-layer fog-one" /><div className="fog-layer fog-two" />
        <div className="demo-visual-state"><span>{current.code}</span><strong>{current.scene}</strong></div>
      </div>
      <div className="demo-console">
        <div className="console-top"><span>GUIDED EXAMPLE</span><span className="live-dot">YOUR DECISION</span></div>
        <div className="console-status">
          <p>{current.code}</p>
          <h3>{current.title}</h3>
          <span>{current.detail}</span>
        </div>
        <div className="console-progress" aria-label="Simulation progress">
          {steps.map((item, index) => (
            <div key={item} className={index < progressByStage[stage] ? "is-complete" : index === progressByStage[stage] ? "is-current" : ""}>
              <i /><small>{["I", "II", "III", "IV"][index]}</small><span>{item}</span>
            </div>
          ))}
        </div>
        <div className="console-actions">
          {stage === "idle" && <button onClick={() => setStage("alert")}>Start scenario <Arrow /></button>}
          {stage === "alert" && <button onClick={() => setStage("verify")}>Check live camera <Arrow /></button>}
          {stage === "verify" && <>
            <button className="quiet-button" onClick={() => setStage("safe")}>No threat</button>
            <button onClick={() => setStage("ready")}>Confirm threat <Arrow /></button>
          </>}
          {stage === "ready" && <button className="deploy-button" onClick={() => setStage("deployed")}>Deploy fog now <Arrow /></button>}
          {(stage === "deployed" || stage === "safe") && <button className="quiet-button" onClick={reset}>Try the scenario again</button>}
        </div>
        <p className="demo-disclaimer">Interactive example only — no hardware is connected.</p>
      </div>
    </div>
  );
}
