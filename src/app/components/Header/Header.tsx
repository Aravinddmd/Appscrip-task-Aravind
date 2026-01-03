"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Top Strip */}
      <div className={styles.topStrip}>
        <div className={styles.topContent}>
          <span className={styles.element}>Lorem Ipsum</span>
          <span className={styles.element}>Lorem Ipsum</span>
          <span className={styles.element}>Lorem Ipsum</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={styles.mainNav}>
        <div className={styles.container}>
          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              LOGO
            </Link>
          </div>

          {/* Icons (Right Side) */}
          <div className={styles.icons}>
            <button className={styles.iconBtn} aria-label="Search">
              <Search size={20} />
            </button>
            <button className={styles.iconBtn} aria-label="Favorites">
              <Heart size={20} />
            </button>
            <button className={styles.iconBtn} aria-label="Cart">
              <ShoppingBag size={20} />
            </button>
            <button
              className={`${styles.iconBtn} ${styles.hideOnMobile}`}
              aria-label="Profile"
            >
              <span>ENG</span> <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links (Tabs) */}
      <nav
        className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}
      >
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navItem}>
              SHOP
            </Link>
          </li>
          <li>
            <Link href="/skills" className={styles.navItem}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="/stories" className={styles.navItem}>
              STORIES
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navItem}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navItem}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
