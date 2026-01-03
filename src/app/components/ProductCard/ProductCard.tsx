import Image from "next/image";
import { Heart } from "lucide-react";
import styles from "./ProductCard.module.css";
import { Product } from "@/app/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className={styles.details}>
        <h2 className={styles.title}>{product.title}</h2>{" "}
        <div className={styles.infoRow}>
          <p className={styles.price}>
            <span className={styles.currency}>Sign in to see price</span>
          </p>
          <button className={styles.heartBtn} aria-label="Add to favorites">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
