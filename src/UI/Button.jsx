import styles from "./Button.module.css";
function Button({ className, onClick = () => {}, type, children }) {
  const classNames = `${styles.btn} ${className}`;
  return (
    <button type={type || "button"} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
