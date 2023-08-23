import styles from "./Input.module.css";
import { forwardRef } from "react";
// function ({id,className,placeholder}) {
//   return <input />;
// }
const Input = forwardRef(({ type, id, className, placeholder }, ref) => {
  return (
    <input
      type={type || "text"}
      ref={ref}
      id={id}
      className={className}
      placeholder={placeholder}
    />
  );
});
export default Input;
