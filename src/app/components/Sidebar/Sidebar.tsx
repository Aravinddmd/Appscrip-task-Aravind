"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  onFilterChange: (category: string) => void;
  onClearAll: () => void;
  selectedCategories: string[];
}

export default function Sidebar({
  onFilterChange,
  onClearAll,
  selectedCategories,
}: SidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    category: true,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection("category")}
        >
          <span className={styles.sectionTitle}>CATEGORY</span>
          {openSections["category"] ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>

        {openSections["category"] && (
          <div className={styles.optionsList}>
            <span className={styles.allText} onClick={onClearAll}>
              Unselect All
            </span>

            {categories.map((cat) => (
              <label key={cat} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => onFilterChange(cat)}
                />
                <span className={styles.labelText}>{cat.toUpperCase()}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
