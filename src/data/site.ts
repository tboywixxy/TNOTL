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
    text: "Know when a protected entrance is disturbed, see what is happening and choose the response while the people you love are inside.",
    className: "case-home",
    image: "/images/illustrations/use-case-home-sketch.png",
    imageAlt: "White charcoal illustration of a Black family sharing a relaxed moment in their living room",
  },
  {
    number: "II",
    title: "Schools",
    label: "Sensitive spaces",
    text: "Give responsible staff immediate awareness and visual context across occupied buildings where calm decisions matter.",
    className: "case-school",
    image: "/images/illustrations/use-case-school-sketch.png",
    imageAlt: "White charcoal illustration of students and a teacher moving through a school corridor",
  },
  {
    number: "III",
    title: "Commercial",
    label: "Offices & property",
    text: "Protect people, workspaces and access points with information that reaches beyond a passive alarm notification.",
    className: "case-office",
    image: "/images/illustrations/use-case-commercial-sketch.png",
    imageAlt: "White charcoal illustration of a suited Black professional reviewing a tablet in a modern office",
  },
  {
    number: "IV",
    title: "Facilities",
    label: "Flexible deployment",
    text: "Coordinate awareness across controlled entrances and operational spaces while keeping every response under human authority.",
    className: "case-facility",
    image: "/images/illustrations/use-case-facility-sketch.png",
    imageAlt: "White charcoal illustration of two facilities managers walking through a controlled operations building",
  },
] as const;
