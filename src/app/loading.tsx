import styles from "./page.module.css";

//Loading component for thee entire page to make it more ux friendly

export default function Loading() {
  return (
    <main className={styles.main}>
      <div
        style={{ height: "200px", background: "#f0f0f0", margin: "20px" }}
      ></div>

      <section className={styles.productSection}>
        <div className={styles.filterBar} style={{ border: "none" }}>
          <div
            style={{ width: "100px", height: "20px", background: "#e0e0e0" }}
          ></div>
          <div
            style={{ width: "100px", height: "20px", background: "#e0e0e0" }}
          ></div>
        </div>

        <div className={styles.contentLayout}>
          <div
            style={{ width: "300px", height: "500px", background: "#f6f6f6" }}
            className="desktop-only"
          ></div>

          <div className={styles.grid}>
            {/* Generating 10 fake cards */}
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* Image Placeholder */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    background: "#e0e0e0",
                    borderRadius: "4px",
                  }}
                ></div>
                {/* Title Placeholder */}
                <div
                  style={{
                    width: "80%",
                    height: "20px",
                    background: "#f0f0f0",
                  }}
                ></div>
                {/* Price Placeholder */}
                <div
                  style={{
                    width: "40%",
                    height: "15px",
                    background: "#f0f0f0",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
