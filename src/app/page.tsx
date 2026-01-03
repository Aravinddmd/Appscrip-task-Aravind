import { Suspense } from "react";
import Script from "next/script";
import Hero from "./components/Hero/Hero";
import ProductLayout from "./components/ProductLayout";
import Loading from "./loading";
import styles from "./page.module.css";
import type { Metadata } from "next";
import { Product } from "./types";

export const dynamic = "force-dynamic";

// Mock data -> For deployment issues

// ⚠️ FULL 20-ITEM FALLBACK DATA (Updated & Verified Images)
// ⚠️ FINAL STABLE DATA (Using Pexels to guarantee 0 build errors)
const MOCK_PRODUCTS: Product[] = [
  // --- MEN'S CLOTHING ---
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
    category: "men's clothing",
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
    category: "men's clothing",
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice.",
    category: "men's clothing",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 101,
    title: "Classic Denim Jacket",
    price: 65.0,
    description:
      "A timeless classic denim jacket that fits perfectly for any casual occasion.",
    category: "men's clothing",
    image:
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 4.5, count: 120 },
  },

  // --- JEWELERY ---
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
    category: "jewelery",
    image:
      "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image:
      "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
    category: "jewelery",
    image:
      "https://images.pexels.com/photos/6685160/pexels-photo-6685160.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
    category: "jewelery",
    image:
      "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 102,
    title: "Diamond Stud Earrings",
    price: 599.99,
    description: "Elegant diamond stud earrings that add a touch of sparkle.",
    category: "jewelery",
    image:
      "https://images.pexels.com/photos/1454185/pexels-photo-1454185.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 4.8, count: 210 },
  },

  // --- ELECTRONICS ---
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers.",
    category: "electronics",
    image:
      "https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response.",
    category: "electronics",
    image:
      "https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55",
    price: 109,
    description: "3D NAND flash are applied to deliver high transfer speeds.",
    category: "electronics",
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive Works with Playstation 4",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy.",
    category: "electronics",
    image:
      "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD IPS Ultra-Thin",
    price: 599,
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display.",
    category: "electronics",
    image:
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 2.9, count: 250 },
  },

  // --- WOMEN'S CLOTHING ---
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear.",
    category: "women's clothing",
    image:
      "https://images.pexels.com/photos/6311612/pexels-photo-6311612.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title: "Lock and Love Women's Removable Hooded Faux Leather",
    price: 29.95,
    description:
      "Faux leather material for style and comfort / 2 pockets of front.",
    category: "women's clothing",
    image:
      "https://images.pexels.com/photos/6685160/pexels-photo-6685160.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded.",
    category: "women's clothing",
    image:
      "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9.85,
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported.",
    category: "women's clothing",
    image:
      "https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock.",
    category: "women's clothing",
    image:
      "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: { rate: 4.5, count: 146 },
  },
];

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
    // ⚠️ RETURN MOCK DATA INSTEAD OF CRASHING
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
