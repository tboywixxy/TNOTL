import Image, { type StaticImageData } from "next/image";

export function PageImageHero({ src, alt, tone = "dark" }: {
  src: StaticImageData;
  alt: string;
  tone?: "dark" | "blue";
}) {
  return (
    <section className={`page-image-hero page-image-hero-${tone}`} aria-label={alt}>
      <Image src={src} alt={alt} preload sizes="100vw" />
    </section>
  );
}
