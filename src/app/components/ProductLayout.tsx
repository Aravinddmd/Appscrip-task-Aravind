"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Sidebar from "./Sidebar/Sidebar";
import ProductCard from "./ProductCard/ProductCard";
import styles from "../page.module.css";
import { Product } from "../types";

export default function ProductLayout({ products }: { products: Product[] }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get selected categories from URL
  const categoryParam = searchParams.get("category");
  const selectedCategories = useMemo(() => {
    return categoryParam ? categoryParam.split(",") : [];
  }, [categoryParam]);

  const sortOption = searchParams.get("sort") || "recommended";

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  //Logic to Toggle Single Categories
  const handleFilterChange = (newCategory: string) => {
    const params = new URLSearchParams(searchParams.toString());
    let currentCategories = params.get("category")
      ? params.get("category")!.split(",")
      : [];

    if (currentCategories.includes(newCategory)) {
      currentCategories = currentCategories.filter((c) => c !== newCategory);
    } else {
      currentCategories.push(newCategory);
    }

    if (currentCategories.length > 0) {
      params.set("category", currentCategories.join(","));
    } else {
      params.delete("category");
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  //Clear Filters
  const handleClearAll = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  //Logic to Sort
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  //Filter & Sort Logic for Display
  const sortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (selectedCategories.length === 0) return true;
      return selectedCategories.includes(product.category);
    });

    return filtered.sort((a, b) => {
      if (sortOption === "low-high") return a.price - b.price;
      if (sortOption === "high-low") return b.price - a.price;
      return 0;
    });
  }, [products, selectedCategories, sortOption]);

  return (
    <section className={styles.productSection}>
      <div className={styles.filterBar}>
        <div className={styles.filterLeft}>
          <span className={styles.itemCount}>
            {sortedProducts.length} ITEMS
          </span>
          <button onClick={toggleSidebar} className={styles.filterToggle}>
            {isSidebarOpen ? "< HIDE FILTER" : "> SHOW FILTER"}
          </button>
        </div>

        <div className={styles.sortDropdown}>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className={styles.selectInput}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="low-high">PRICE: LOW TO HIGH</option>
            <option value="high-low">PRICE: HIGH TO LOW</option>
          </select>
        </div>
      </div>

      <div className={styles.contentLayout}>
        {isSidebarOpen && (
          <Sidebar
            selectedCategories={selectedCategories}
            onFilterChange={handleFilterChange}
            onClearAll={handleClearAll}
          />
        )}

        <div className={styles.grid}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
