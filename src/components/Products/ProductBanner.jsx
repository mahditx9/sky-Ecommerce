import styles from "./ProductBanner.module.css";
function ProductBanner() {
  return (
    <div className={styles.banner}>
      <img
        src="img/sport-shoe-illustration-blue-backdrop-generated-by-ai.jpg"
        alt="banner"
        class={styles["product-list__banner"]}
      />
    </div>
  );
}

export default ProductBanner;
