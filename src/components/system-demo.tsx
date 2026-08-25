"use client";

import { useState } from "react";
import { ApertureMark, Arrow } from "./icons";

type DemoStage = "idle" | "alert" | "verify" | "ready" | "deployed" | "safe";

const copy: Record<DemoStage, { code: string; title: string; detail: string }> = {
  idle: { code: "SYSTEM ARMED", title: "Environment secure", detail: "All three protection layers are connected and standing by." },
  alert: { code: "ENTRY / BREACH", title: "Entry breach detected", detail: "The Door Alarm has triggered. Camera access is now available." },
  verify: { code: "CAMERA / ONLINE", title: "Verification required", detail: "Review the simulated live view and decide whether the alert is genuine." },
  ready: { code: "RESPONSE / READY", title: "Threat confirmed", detail: "The Visibility Reducer is ready. Deployment still requires a manual action." },
  deployed: { code: "MANUAL / DEPLOY", title: "Visibility reduced", detail: "Dense fog is filling the protected zone. The response was initiated by a person." },
  safe: { code: "EVENT / CLOSED", title: "False alarm logged", detail: "The system returns to monitoring without deploying a response." },
};

export function SystemDemo() {
  const [stage, setStage] = useState<DemoStage>("idle");
  const current = copy[stage];
  const reset = () => setStage("idle");

  return (
    <div className={`system-demo demo-${stage}`}>
      <div className="demo-visual" aria-live="polite">
        <div className="demo-grid" />
        <div className="demo-corridor">
          <div className="demo-door" />
          <div className="demo-light" />
        </div>
        <div className="camera-overlay">
          <span>CAM 01</span><span>LIVE</span>
          <ApertureMark />
          <i className="reticle reticle-a" /><i className="reticle reticle-b" />
        </div>
        <div className="fog-layer fog-one" /><div className="fog-layer fog-two" />
        <div className="demo-timestamp">22:14:0{stage === "idle" ? "2" : "7"} / ENTRY HALL</div>
      </div>
      <div className="demo-console">
        <div className="console-top"><span>TN / CONTROL INTERFACE</span><span className="live-dot">SIMULATION</span></div>
        <div className="console-status">
          <p>{current.code}</p>
          <h3>{current.title}</h3>
          <span>{current.detail}</span>
        </div>
        <div className="console-progress" aria-label="Simulation progress">
          {["Detect", "View", "Decide", "Respond"].map((item, index) => (
            <div key={item} className={
              (stage === "idle" && index === 0) ||
              (stage === "alert" && index <= 1) ||
              (stage === "verify" && index <= 2) ||
              (["ready", "deployed"].includes(stage) && index <= 3) ? "active" : ""
            }><i /><span>{item}</span></div>
          ))}
        </div>
        <div className="console-actions">
          {stage === "idle" && <button onClick={() => setStage("alert")}>Simulate intrusion <Arrow /></button>}
          {stage === "alert" && <button onClick={() => setStage("verify")}>Open camera <Arrow /></button>}
          {stage === "verify" && <>
            <button className="quiet-button" onClick={() => setStage("safe")}>False alarm</button>
            <button onClick={() => setStage("ready")}>Confirm threat <Arrow /></button>
          </>}
          {stage === "ready" && <button className="deploy-button" onClick={() => setStage("deployed")}>Press to deploy <Arrow /></button>}
          {(stage === "deployed" || stage === "safe") && <button className="quiet-button" onClick={reset}>Reset simulation</button>}
        </div>
        <p className="demo-disclaimer">Front-end demonstration only. This interface does not control hardware.</p>
      </div>
    </div>
  );
}
