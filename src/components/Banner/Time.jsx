import styles from "./Time.module.css";
function Time() {
  return (
    <div className={styles["timer-box"]}>
      <span>18</span>
      <span>Days</span>
    </div>
  );
}

export default Time;
