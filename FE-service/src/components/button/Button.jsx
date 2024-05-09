import { forwardRef } from "react";
import styles from "./Button.module.css";

const Button = forwardRef(function Button(
  { children, iconButton, onClick },
  ref
) {
  return (
    <button
      onClick={onClick}
      className={iconButton ? styles.imgBtn : styles.img}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
