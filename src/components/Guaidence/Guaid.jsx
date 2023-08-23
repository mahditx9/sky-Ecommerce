import styles from "./Guaid.module.css";
function Guaid({ title, description, src }) {
  return (
    <div className={styles["g-box"]}>
      <div className={styles["g-cover__box"]}>
        <img src={src} alt="guaid" />
      </div>
      <div className={styles["g-content__box"]}>
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default Guaid;
