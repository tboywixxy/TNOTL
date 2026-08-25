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
  capabilities: string[];
  role: string;
};

export const products: Product[] = [
  {
    slug: "door-alarm",
    number: "01",
    name: "Door Alarm",
    shortName: "Detect",
    descriptor: "Detection begins at the point of entry.",
    summary:
      "Detects forced entry, creates an immediate local alert and initiates the connected TNOTL security workflow.",
    statement: "The first signal should be impossible to ignore.",
    image: "/images/products/door-alarm.png",
    imageAlt:
      "TNOTL Door Alarm with a white body, circular speaker and metallic loop",
    capabilities: [
      "Forced-entry detection",
      "Immediate system trigger",
      "Audible local alert",
      "Wireless system communication",
      "Designed for controlled entry points",
    ],
    role:
      "The Door Alarm is the system's first layer. It changes an intrusion from an unseen event into an immediate, shared signal.",
  },
  {
    slug: "indoor-camera",
    number: "02",
    name: "Indoor Camera",
    shortName: "Verify",
    descriptor: "See before you respond.",
    summary:
      "Provides real-time visual access after an alert so the user can understand the situation before choosing a response.",
    statement: "Information comes before intervention.",
    image: "/images/products/indoor-camera.png",
    imageAlt:
      "TNOTL Indoor Camera with a circular black face and light metallic pedestal",
    capabilities: [
      "Real-time live view",
      "Motion awareness",
      "Connected mobile experience",
      "Visual threat verification",
      "Remote situational awareness",
    ],
    role:
      "The Indoor Camera is the verification layer. It gives the person in control enough visual context to distinguish a threat from a false alarm.",
  },
  {
    slug: "visibility-reducer",
    number: "03",
    name: "Visibility Reducer",
    shortName: "Deploy",
    descriptor: "Take visibility away from the threat.",
    summary:
      "Releases dense fog when manually activated, rapidly reducing visibility in the protected area after a threat is verified.",
    statement: "Deployment is never automatic.",
    image: "/images/products/visibility-reducer.png",
    imageAlt:
      "TNOTL Visibility Reducer with a matte black body and radial silver vent",
    capabilities: [
      "Human-controlled deployment",
      "Rapid visibility reduction",
      "Connected readiness state",
      "Local protected-area response",
      "Designed to deter and delay",
    ],
    role:
      "The Visibility Reducer is the response layer. It only becomes active after the user has reviewed the situation and made a deliberate decision.",
  },
];

export const sequence = [
  ["01", "Entry", "Forced entry occurs at a protected access point."],
  ["02", "Alert", "The Door Alarm triggers a local and connected alert."],
  ["03", "View", "The Indoor Camera provides immediate visual access."],
  ["04", "Verify", "A person assesses the scene and confirms the threat."],
  ["05", "Deploy", "The Visibility Reducer is activated manually."],
  ["06", "Protect", "Visibility is reduced while occupants follow their safety response."],
] as const;

export const useCases = [
  {
    number: "01",
    title: "Homes",
    label: "Domestic protection",
    text: "Immediate awareness, visual context and a deliberate response when an intrusion reaches the people and spaces that matter most.",
    className: "case-home",
  },
  {
    number: "02",
    title: "Schools",
    label: "Sensitive spaces",
    text: "A layered response framework for controlled entry points, occupied buildings and time-critical decisions.",
    className: "case-school",
  },
  {
    number: "03",
    title: "Commercial",
    label: "Offices & property",
    text: "Visibility and response capability that extends beyond a passive alarm notification.",
    className: "case-office",
  },
  {
    number: "04",
    title: "Facilities",
    label: "Flexible deployment",
    text: "A coordinated system for relevant entry points and high-value environments where human judgement remains essential.",
    className: "case-facility",
  },
] as const;
