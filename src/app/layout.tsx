import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/site-shell";
import "./globals.css";

const inter = localFont({ src: "../../public/fonts/Inter-Variable.ttf", variable: "--font-sans", display: "swap" });
const instrument = localFont({ src: "../../public/fonts/InstrumentSerif-Regular.ttf", variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tnotl.com"),
  title: { default: "TNOTL — Human Life Protection", template: "%s — TNOTL" },
  description: "A human-controlled security system combining intrusion detection, live visual verification and visibility reduction.",
  keywords: ["security system", "door alarm", "indoor camera", "visibility reduction", "human controlled security"],
  openGraph: { title: "TNOTL — Human Life Protection", description: "Alarm. Verify. Deploy. Human control, by design.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${inter.variable} ${instrument.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><div id="main-content">{children}</div><Footer /></body></html>;
}
