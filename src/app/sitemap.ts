import type { MetadataRoute } from "next";
import { products } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tnotl.com";
  return ["", "/system", "/use-cases", "/about", "/vigil360", "/philanthropy", "/contact", ...products.map((item) => `/system/${item.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" : "yearly", priority: path === "" ? 1 : .7 }));
}
