export type Product = {
  slug: "door-alarm" | "indoor-camera" | "visibility-reducer";
  number: string;
  name: string;
  shortName: string;
  descriptor: string;
  summary: string;
  statement: string;
  image: string;
  imageAlt: string;
  sketch: string;
  sketchAlt: string;
  capabilities: string[];
  role: string;
};

export const romanNumerals = ["I", "II", "III", "IV", "V", "VI"] as const;

export const products: Product[] = [
  {
    slug: "door-alarm",
    number: "I",
    name: "Door Alarm",
    shortName: "Detect",
    descriptor: "Immediate awareness at the door.",
    summary:
      "Mounted at the point of entry, the Door Alarm detects forced movement, sounds an immediate local warning and alerts the connected TNOTL system the moment a protected door is disturbed.",
    statement: "Know the moment an entry point is disturbed.",
    image: "/images/products/door-alarm.png",
    imageAlt:
      "TNOTL Door Alarm with a white body, circular speaker and metallic loop",
    sketch: "/images/illustrations/door-alarm-sketch.png",
    sketchAlt: "Charcoal sketch of the TNOTL Door Alarm fitted securely to a residential front-door handle",
    capabilities: [
      "Forced-entry detection",
      "Immediate system trigger",
      "Audible local alert",
      "Wireless system communication",
      "Designed for controlled entry points",
    ],
    role:
      "The Door Alarm watches the threshold. If a protected door is forced, it sounds locally and signals the rest of the system immediately—turning an unseen entry into an event you can act on.",
  },
  {
    slug: "indoor-camera",
    number: "II",
    name: "Indoor Camera",
    shortName: "Verify",
    descriptor: "Clear live context after an alert.",
    summary:
      "When an alert arrives, the Indoor Camera gives you a live view of the protected space, helping you understand whether there is a real threat before deciding what to do.",
    statement: "See what is happening before you respond.",
    image: "/images/products/indoor-camera-clear.png",
    imageAlt:
      "TNOTL Indoor Camera with a circular black face and light metallic pedestal",
    sketch: "/images/illustrations/indoor-camera-sketch.png",
    sketchAlt: "Charcoal sketch of the TNOTL Indoor Camera mounted upside down in the corner of a home entrance hall",
    capabilities: [
      "Real-time live view",
      "Motion awareness",
      "Connected mobile experience",
      "Visual threat verification",
      "Remote situational awareness",
    ],
    role:
      "The Indoor Camera turns an alert into visible context. It does not make the decision for you; it gives you the live information needed to make that decision responsibly.",
  },
  {
    slug: "visibility-reducer",
    number: "III",
    name: "Visibility Reducer",
    shortName: "Deploy",
    descriptor: "Dense fog, deployed only by you.",
    summary:
      "After a threat is visually confirmed, the Visibility Reducer can be activated manually to fill the protected area with dense fog, limiting an intruder's sight and ability to move.",
    statement: "Reduce visibility only after the threat is confirmed.",
    image: "/images/products/visibility-reducer-clear.png",
    imageAlt:
      "TNOTL Visibility Reducer with a matte black body and radial silver vent",
    sketch: "/images/illustrations/visibility-reducer-sketch.png",
    sketchAlt: "Charcoal sketch of the TNOTL Visibility Reducer releasing white fog from its top vent in a living room",
    capabilities: [
      "Human-controlled deployment",
      "Rapid visibility reduction",
      "Connected readiness state",
      "Local protected-area response",
      "Designed to deter and delay",
    ],
    role:
      "The Visibility Reducer is the controlled response. It stays ready until you authorize it, then rapidly obscures the protected area to deter and delay a verified threat.",
  },
];

export const sequence = [
  ["I", "Entry", "Forced entry occurs at a protected access point."],
  ["II", "Alert", "The Door Alarm triggers a local and connected alert."],
  ["III", "View", "The Indoor Camera provides immediate visual access."],
  ["IV", "Verify", "A person assesses the scene and confirms the threat."],
  ["V", "Deploy", "The Visibility Reducer is activated manually."],
  ["VI", "Protect", "Visibility is reduced while occupants follow their safety response."],
] as const;

export const useCases = [
  {
    number: "I",
    title: "Homes",
    label: "Domestic protection",
    text: "Immediate awareness, visual context and a deliberate response when an intrusion reaches the people and spaces that matter most.",
    className: "case-home",
  },
  {
    number: "II",
    title: "Schools",
    label: "Sensitive spaces",
    text: "A layered response framework for controlled entry points, occupied buildings and time-critical decisions.",
    className: "case-school",
  },
  {
    number: "III",
    title: "Commercial",
    label: "Offices & property",
    text: "Visibility and response capability that extends beyond a passive alarm notification.",
    className: "case-office",
  },
  {
    number: "IV",
    title: "Facilities",
    label: "Flexible deployment",
    text: "A coordinated system for relevant entry points and high-value environments where human judgement remains essential.",
    className: "case-facility",
  },
] as const;
