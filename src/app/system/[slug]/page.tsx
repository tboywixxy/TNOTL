import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/icons";
import { Eyebrow } from "@/components/site-shell";
import { products, romanNumerals } from "@/data/site";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product ? { title: product.name, description: product.summary } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const currentIndex = products.findIndex((item) => item.slug === slug);
  const nextProduct = products[(currentIndex + 1) % products.length];

  return (
    <main className={`inner-page product-page product-page-${product.slug}`}>
      <section className="product-page-hero">
        <div className="product-page-title">
          <Eyebrow>System / Product {product.number}</Eyebrow>
          <h1>{product.name}</h1>
          <p>{product.descriptor}</p>
        </div>

        <div className="product-page-object">
          <span>TN / {product.number} / FRONT</span>
          <Image src={product.image} alt={product.imageAlt} width={1122} height={1402} priority sizes="(max-width: 760px) 58vw, 25vw" />
          <i />
        </div>

        <div className="product-page-intro">
          <p>{product.summary}</p>
          <Link className="round-link" href="#in-context" aria-label={`See ${product.name} in context`}><Arrow direction="down" /></Link>
        </div>
      </section>

      <section className="product-story" id="in-context">
        <figure className="product-story-sketch">
          <Image src={product.sketch} alt={product.sketchAlt} width={1536} height={1122} sizes="(max-width: 760px) 100vw, 58vw" />
        </figure>
        <div className="product-story-copy">
          <Eyebrow>In context</Eyebrow>
          <h2>{product.statement}</h2>
          <p>{product.role}</p>
          <ul>
            {product.capabilities.slice(0, 3).map((capability, index) => (
              <li key={capability}><span>{romanNumerals[index]}</span>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`product-next product-next-${nextProduct.slug}`}>
        <div>
          <Eyebrow>Next / {nextProduct.number}</Eyebrow>
          <Link href={`/system/${nextProduct.slug}`}>
            <strong>{nextProduct.name}</strong>
            <span>{nextProduct.descriptor}</span>
            <Arrow />
          </Link>
        </div>
        <Image src={nextProduct.image} alt="" width={1122} height={1402} sizes="(max-width: 760px) 30vw, 16vw" />
      </section>
    </main>
  );
}
