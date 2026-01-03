"use client";

import { Instagram, Linkedin } from "lucide-react"; // Assuming you have lucide-react
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section: Newsletter & Contact */}
      <div className={styles.topSection}>
        <div className={styles.column}>
          <h3 className={styles.heading}>BE THE FIRST TO KNOW</h3>
          <p className={styles.text}>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribeBox}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.input}
            />
            <button className={styles.subscribeBtn}>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>CONTACT US</h3>
          <p className={styles.text}>+44 221 133 5360</p>
          <p className={styles.text}>customercare@mettamuse.com</p>

          <h3 className={styles.heading} style={{ marginTop: "20px" }}>
            CURRENCY
          </h3>
          <div className={styles.currency}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
              width={24} // Width is required
              height={24} // Height is required (matches width for icon)
              style={{ objectFit: "contain" }} // Ensures it doesn't stretch
            />
            <span>&nbsp; USD</span>
          </div>
          <p className={styles.smallText}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Bottom Section: Links */}
      <div className={styles.bottomSection}>
        <div className={styles.linkColumn}>
          <h3 className={styles.heading}>mettā muse</h3>
          <ul className={styles.list}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3 className={styles.heading}>QUICK LINKS</h3>
          <ul className={styles.list}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3 className={styles.heading}>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            <div className={styles.iconCircle}>
              <Instagram size={18} />
            </div>
            <div className={styles.iconCircle}>
              <Linkedin size={18} />
            </div>
          </div>

          <h3 className={styles.heading} style={{ marginTop: "20px" }}>
            mettā muse ACCEPTS
          </h3>
          <div className={styles.paymentIcons}>
            <span className={styles.payIcon}>GPay</span>
            <span className={styles.payIcon}>Visa</span>
            <span className={styles.payIcon}>PayPal</span>
            <span className={styles.payIcon}>Amex</span>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
