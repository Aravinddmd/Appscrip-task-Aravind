import { Suspense } from "react";
import Script from "next/script";
import Hero from "./components/Hero/Hero";
import ProductLayout from "./components/ProductLayout";
import Loading from "./loading";
import styles from "./page.module.css";
import type { Metadata } from "next";
import { Product } from "./types";
import { MOCK_PRODUCTS } from "./mockProducts";

export const dynamic = "force-dynamic";

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json();
  } catch (error) {
    console.error("API Failed, using fallback data:", error);

    return MOCK_PRODUCTS;
  }
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams.category
    ? (resolvedSearchParams.category as string).toUpperCase()
    : "DISCOVER OUR PRODUCTS";

  return {
    title: `${category} | APPSCRIP STORE`,
    description: `Shop the latest collection of ${category.toLowerCase()} at the best prices.`,
  };
}

export default async function Home() {
  const products = await getProducts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product: Product, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        image: product.image,
        description: product.description,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "USD",
        },
      },
    })),
  };

  return (
    <main className={styles.main}>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <Suspense fallback={<Loading />}>
        <ProductLayout products={products} />
      </Suspense>
    </main>
  );
}
