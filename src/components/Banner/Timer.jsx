import Time from "./Time";
import styles from "./Timer.module.css";
function Timer() {
  return (
    <div className={styles["offer-timeout"]}>
      {Array.from({ length: 4 }, (_, i) => (
        <Time key={i} />
      ))}
    </div>
  );
}

export default Timer;
