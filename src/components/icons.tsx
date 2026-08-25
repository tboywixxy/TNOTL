export function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  return (
    <svg
      aria-hidden="true"
      className={`arrow-icon arrow-${direction}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ApertureMark() {
  return (
    <svg aria-hidden="true" className="aperture-mark" viewBox="0 0 42 42" fill="none">
      <circle cx="21" cy="21" r="19.5" stroke="currentColor" strokeOpacity=".35" />
      <circle cx="21" cy="21" r="4" stroke="currentColor" />
      <path d="M21 4v9M21 29v9M4 21h9M29 21h9" stroke="currentColor" strokeOpacity=".6" />
    </svg>
  );
}
