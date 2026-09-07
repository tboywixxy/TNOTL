import Image from "next/image";

export function BrandLogo() {
  return (
    <Image
      className="brand-logo"
      src="/images/TNOTL Logo RM-BG.png"
      alt=""
      width={1254}
      height={1254}
      sizes="(max-width: 760px) 50px, 60px"
    />
  );
}
